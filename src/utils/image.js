/**
 * Image helpers.
 * Stock photos are served from Unsplash's CDN (free to use). To use your own
 * images, drop them in /public/images and pass a local path like "/images/team.jpg".
 */
const UNSPLASH = 'https://images.unsplash.com/photo-'

export const PLACEHOLDER_IMAGE = '/images/placeholder.svg'

const IMAGE_WIDTHS = [480, 800, 1200]

export const isRemoteId = (src) => typeof src === 'string' && /^\d{10,}-[a-z0-9]+$/i.test(src)

export function unsplash(id, width = 1200) {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}&q=75`
}

/** Returns { src, srcSet } for either an Unsplash id or a local/absolute path. */
export function resolveImage(src, width = 1200) {
  if (!src) return { src: PLACEHOLDER_IMAGE }
  if (!isRemoteId(src)) return { src }
  return {
    src: unsplash(src, width),
    srcSet: IMAGE_WIDTHS.map((w) => `${unsplash(src, w)} ${w}w`).join(', '),
  }
}

/** Named image library — swap ids or local paths here in one place. */
export const IMAGES = {
  officeTeam: '1551434678-e076c223a692',
  analytics: '1460925895917-afdab827c52f',
  codeLaptop: '1498050108023-c5249f4df085',
  collaboration: '1519389950473-47ba0277781c',
  planning: '1553877522-43269d4ea984',
  developer: '1517694712202-14dd9538aa97',
  codeScreen: '1555066931-4365d14bab8c',
  servers: '1558494949-ef010cbdcc31',
  mobile: '1512941937669-90a1b58e7e9c',
  strategy: '1556761175-5973dc0f32e7',
  ai: '1677442136019-21780ecad995',
  healthcare: '1576091160399-112ba8d25d1d',
  retail: '1556742049-0cfed4f6a45d',
  finance: '1454165804606-c3d57bc86b40',
  education: '1503676260728-1c00da094a0b',
  logistics: '1586528116311-ad8dd3c8310d',
  insurance: '1450101499163-c8848c66ca85',
  interview: '1551836022-d5d88e9218df',
  support: '1553775282-20af80779df7',
  handshake: '1521791136064-7986c2920216',
  resume: '1586281380349-632531db7ed4',
  candidate: '1573496359142-b8d87734a5a2',
  workshop: '1542744173-8e7e53415bb0',
}
