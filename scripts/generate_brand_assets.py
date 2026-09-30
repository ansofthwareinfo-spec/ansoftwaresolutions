"""
Generate every brand asset (favicons, app icons, header logo, social share images)
from the single source logo at public/logo.jpg.

Usage:
    pip install pillow
    python scripts/generate_brand_assets.py

Re-run it whenever the logo, a page headline or a service changes.
Fonts (Outfit + Manrope, SIL Open Font License) are downloaded once into scripts/.cache/.
"""

from __future__ import annotations

import re
import urllib.request
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SOURCE_LOGO = PUBLIC / "logo.jpg"
BRAND_DIR = PUBLIC / "brand"
OG_DIR = PUBLIC / "og"
CACHE = Path(__file__).resolve().parent / ".cache"

SITE_NAME = "A&N Software Solutions"
SITE_DOMAIN = "ansoftwaresolutions.com"
TAGLINE = "Efficiency powered by innovation"

# Colours sampled from the logo
NAVY = (4, 35, 81)
NAVY_2 = (8, 58, 120)
BLUE = (7, 108, 164)
SKY = (3, 154, 207)
CYAN = (2, 207, 224)
WHITE = (255, 255, 255)
MUTED = (190, 210, 232)

FONTS = {
    "Outfit.ttf": "https://github.com/google/fonts/raw/main/ofl/outfit/Outfit%5Bwght%5D.ttf",
    "Manrope.ttf": "https://github.com/google/fonts/raw/main/ofl/manrope/Manrope%5Bwght%5D.ttf",
}

OG_SIZE = (1200, 630)
SUPERSAMPLE = 4


# --------------------------------------------------------------------------- helpers
def font(name: str, size: int, weight: str) -> ImageFont.FreeTypeFont:
    path = CACHE / name
    if not path.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        print(f"Downloading {name}…")
        urllib.request.urlretrieve(FONTS[name], path)  # noqa: S310 - fixed, trusted URLs
    ft = ImageFont.truetype(str(path), size)
    ft.set_variation_by_name(weight)
    return ft


def save_png(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, "PNG", optimize=True)
    print(f"  {path.relative_to(ROOT).as_posix()}  ({path.stat().st_size // 1024} KB)")


def circular_logo(source: Image.Image) -> Image.Image:
    """Crop the round badge out of the white square and make the corners transparent."""
    gray = source.convert("L")
    # Anything clearly darker than the white background belongs to the badge.
    bbox = gray.point(lambda v: 255 if v < 235 else 0).getbbox()
    left, top, right, bottom = bbox
    cx, cy = (left + right) / 2, (top + bottom) / 2
    radius = max(right - left, bottom - top) / 2 + 6

    box = (round(cx - radius), round(cy - radius), round(cx + radius), round(cy + radius))
    badge = source.crop(box).convert("RGBA")
    size = badge.width

    # Anti-aliased circular mask
    mask = Image.new("L", (size * SUPERSAMPLE, size * SUPERSAMPLE), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, mask.width - 1, mask.height - 1), fill=255)
    badge.putalpha(mask.resize((size, size), Image.LANCZOS))
    return badge


def letters_crop(source: Image.Image) -> Image.Image:
    """The 'AN' monogram only — legible at favicon sizes where the full badge is not."""
    w, h = source.size
    crop = source.crop((int(w * 0.10), int(h * 0.24), int(w * 0.93), int(h * 0.68)))
    side = max(crop.size)
    square = Image.new("RGB", (side, side), WHITE)
    square.paste(crop, ((side - crop.width) // 2, (side - crop.height) // 2))
    return square


def on_canvas(image: Image.Image, size: int, scale: float, background=WHITE, radius_ratio=0.0) -> Image.Image:
    """Centre `image` on a square canvas; optional rounded corners."""
    canvas = Image.new("RGBA", (size, size), background + (255,))
    inner = int(size * scale)
    fitted = image.convert("RGBA").resize((inner, inner), Image.LANCZOS)
    offset = (size - inner) // 2
    canvas.alpha_composite(fitted, (offset, offset))
    if radius_ratio:
        mask = Image.new("L", (size * SUPERSAMPLE, size * SUPERSAMPLE), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            (0, 0, mask.width - 1, mask.height - 1), radius=int(mask.width * radius_ratio), fill=255
        )
        canvas.putalpha(mask.resize((size, size), Image.LANCZOS))
    return canvas


def wrap(draw: ImageDraw.ImageDraw, text: str, ft: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=ft) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def fit_lines(draw, text, name, weight, max_width, max_lines, sizes):
    """Largest font size from `sizes` at which `text` wraps into `max_lines` or fewer."""
    for size in sizes:
        ft = font(name, size, weight)
        lines = wrap(draw, text, ft, max_width)
        if len(lines) <= max_lines:
            return ft, lines
    ft = font(name, sizes[-1], weight)
    lines = wrap(draw, text, ft, max_width)[:max_lines]
    lines[-1] = lines[-1].rstrip(".,") + "…"
    return ft, lines


# --------------------------------------------------------------------------- social images
@dataclass
class OgPage:
    slug: str
    eyebrow: str
    title: str
    subtitle: str


def og_background() -> Image.Image:
    w, h = OG_SIZE
    bg = Image.new("RGB", OG_SIZE, NAVY)
    # Smooth left → right navy gradient
    gradient = Image.linear_gradient("L").rotate(90).transpose(Image.FLIP_LEFT_RIGHT).resize(OG_SIZE)
    bg = Image.composite(Image.new("RGB", OG_SIZE, NAVY_2), bg, gradient)

    glow = Image.new("RGBA", OG_SIZE, (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse((w - 560, -260, w + 200, 500), fill=SKY + (110,))
    g.ellipse((-260, h - 220, 300, h + 260), fill=CYAN + (60,))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    bg = Image.alpha_composite(bg.convert("RGBA"), glow)

    # Subtle grid texture
    grid = Image.new("RGBA", OG_SIZE, (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, w, 48):
        gd.line((x, 0, x, h), fill=(255, 255, 255, 10))
    for y in range(0, h, 48):
        gd.line((0, y, w, y), fill=(255, 255, 255, 10))
    return Image.alpha_composite(bg, grid)


def render_og(page: OgPage, badge: Image.Image) -> Image.Image:
    img = og_background()
    w, h = OG_SIZE
    pad = 72
    text_width = 620
    footer_top = h - 100  # text must end above the footer strip

    # Large badge on the right with a soft halo
    size = 360
    bx, by = w - size - 70, (h - size) // 2
    halo = Image.new("RGBA", OG_SIZE, (0, 0, 0, 0))
    ImageDraw.Draw(halo).ellipse((bx - 24, by - 24, bx + size + 24, by + size + 24), fill=(255, 255, 255, 45))
    img = Image.alpha_composite(img, halo.filter(ImageFilter.GaussianBlur(30)))
    img.alpha_composite(badge.resize((size, size), Image.LANCZOS), (bx, by))
    draw = ImageDraw.Draw(img, "RGBA")  # RGBA mode so translucent fills blend

    # Brand row
    mark = 56
    img.alpha_composite(badge.resize((mark, mark), Image.LANCZOS), (pad, pad - 6))
    draw.text((pad + mark + 16, pad + 2), SITE_NAME, font=font("Outfit.ttf", 30, "Bold"), fill=WHITE)

    # Pick the largest title/subtitle sizes that fit between the eyebrow and the footer
    eyebrow_top = 180
    body_top = eyebrow_top + 64
    for title_size, sub_size in [(64, 26), (58, 25), (52, 24), (48, 23), (44, 22)]:
        title_font, title_lines = fit_lines(draw, page.title, "Outfit.ttf", "Bold", text_width, 3, [title_size])
        sub_font, sub_lines = fit_lines(draw, page.subtitle, "Manrope.ttf", "Medium", text_width, 2, [sub_size])
        title_h = len(title_lines) * int(title_font.size * 1.12)
        sub_h = len(sub_lines) * int(sub_font.size * 1.45)
        if body_top + title_h + 16 + sub_h <= footer_top:
            break

    # Eyebrow pill
    eyebrow_font = font("Manrope.ttf", 20, "Bold")
    label = page.eyebrow.upper()
    pill_w = draw.textlength(label, font=eyebrow_font) + 36
    draw.rounded_rectangle(
        (pad, eyebrow_top, pad + pill_w, eyebrow_top + 40), radius=20, fill=(255, 255, 255, 30), outline=CYAN + (170,), width=2
    )
    draw.text((pad + 18, eyebrow_top + 8), label, font=eyebrow_font, fill=(150, 232, 246))

    y = body_top
    for line in title_lines:
        draw.text((pad, y), line, font=title_font, fill=WHITE)
        y += int(title_font.size * 1.12)
    y += 16
    for line in sub_lines:
        draw.text((pad, y), line, font=sub_font, fill=MUTED)
        y += int(sub_font.size * 1.45)

    # Footer strip
    foot_font = font("Manrope.ttf", 22, "SemiBold")
    draw.line((pad, h - 80, pad + 64, h - 80), fill=CYAN, width=4)
    draw.text((pad, h - 64), f"{SITE_DOMAIN}  ·  {TAGLINE}", font=foot_font, fill=(214, 228, 244))
    return img.convert("RGB")


def service_pages() -> list[OgPage]:
    source = (ROOT / "src" / "data" / "services.js").read_text(encoding="utf8")
    # Matches single- or double-quoted string values
    pattern = re.compile(r"""slug: (['"])(.+?)\1,\s*title: (['"])(.+?)\3,\s*short: (['"])(.+?)\5""")
    return [OgPage(f"services-{m[1]}", "Service", m[3], m[5]) for m in pattern.findall(source)]


STATIC_PAGES = [
    OgPage("home", "Recruitment & Technology", "Build your team with people who deliver",
           "Skilled, pre-screened professionals, plus software, data, AI and cloud services."),
    OgPage("hire", "Hire Talent", "Hire skilled people, without the hassle",
           "Permanent, contract, contract-to-hire, leadership, fresher and bulk hiring."),
    OgPage("jobs", "Jobs", "Find a job that fits you",
           "Openings for freshers and experienced professionals. Apply or upload your resume."),
    OgPage("about", "About Us", "People and technology, working for you",
           "Who we are, how we work and what we stand for."),
    OgPage("services", "Technology Services", "Seven areas of expertise, one team",
           "Software, data & analytics, AI, business intelligence, cloud, automation and digital transformation."),
    OgPage("solutions", "Solutions", "Solutions we can build for you",
           "Examples across software, data, AI, cloud and automation."),
    OgPage("technologies", "Technologies", "How we pick the right tools",
           "Web, mobile, cloud, data, BI, AI and automation tools we work with."),
    OgPage("industries", "Industries", "Technology that fits your industry",
           "Health insurance, healthcare, finance, retail and education."),
    OgPage("contact", "Contact Us", "Let's start a conversation",
           "Hiring, a job search or a technology project. We are happy to help."),
    OgPage("privacy-policy", "Legal", "Privacy Policy",
           "How we collect, use and protect your personal information."),
    OgPage("terms", "Legal", "Terms of Service",
           "The terms and conditions for using our website."),
]


# --------------------------------------------------------------------------- main
def main() -> None:
    source = Image.open(SOURCE_LOGO).convert("RGB")
    badge = circular_logo(source)
    letters = letters_crop(source)

    print("Logo & icons")
    save_png(badge.resize((256, 256), Image.LANCZOS), BRAND_DIR / "logo-mark.png")
    badge.resize((256, 256), Image.LANCZOS).save(BRAND_DIR / "logo-mark.webp", "WEBP", quality=90, method=6)
    print(f"  public/brand/logo-mark.webp  ({(BRAND_DIR / 'logo-mark.webp').stat().st_size // 1024} KB)")
    save_png(source.resize((512, 512), Image.LANCZOS), BRAND_DIR / "logo-512.png")

    save_png(on_canvas(badge, 512, 0.92), BRAND_DIR / "icon-512.png")
    save_png(on_canvas(badge, 192, 0.92), BRAND_DIR / "icon-192.png")
    save_png(on_canvas(badge, 512, 0.72), BRAND_DIR / "icon-maskable-512.png")  # inside the 80% safe zone
    save_png(on_canvas(badge, 180, 0.90).convert("RGB"), BRAND_DIR / "apple-touch-icon.png")

    favicon = on_canvas(letters, 256, 0.86, radius_ratio=0.22)
    save_png(favicon.resize((32, 32), Image.LANCZOS), BRAND_DIR / "favicon-32.png")
    favicon.save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"  public/favicon.ico  ({(PUBLIC / 'favicon.ico').stat().st_size // 1024} KB)")

    print("Social share images (1200x630)")
    OG_DIR.mkdir(parents=True, exist_ok=True)
    for page in STATIC_PAGES + service_pages():
        path = OG_DIR / f"{page.slug}.jpg"
        render_og(page, badge).save(path, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"  {path.relative_to(ROOT).as_posix()}  ({path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
