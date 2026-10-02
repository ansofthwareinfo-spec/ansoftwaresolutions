import { SERVICES } from '@/data/services'
import { SITE } from './site'

/**
 * SEO metadata for every page — the single source of truth.
 * Used at runtime by <Seo /> and at build time by scripts/prerender.mjs,
 * which writes per-page HTML (title, description, social tags) and the sitemap.
 *
 * Guidelines: titles under ~60 characters including the brand,
 * descriptions roughly 120–160 characters.
 */
const STATIC_PAGES = {
  '/': {
    title: null, // uses SITE.defaultTitle
    description:
      'Hire skilled, pre-screened professionals for permanent, contract and leadership roles, plus software, data, AI and cloud services. Based in Hyderabad.',
    image: '/og/home.jpg',
  },
  '/hire': {
    title: 'Recruitment & Staffing Services',
    description:
      'Permanent, contract, leadership, fresher and bulk hiring for developers, support, BPO, operations, sales and management roles. Share your requirement today.',
    image: '/og/hire.jpg',
  },
  '/jobs': {
    title: 'Jobs for Freshers & Experienced',
    description:
      'Browse current openings with companies hiring through A&N Software Solutions in Hyderabad and beyond, or upload your resume to join our talent pool.',
    image: '/og/jobs.jpg',
  },
  '/services': {
    title: 'Technology Services',
    description:
      'Software engineering, data & analytics, AI, business intelligence, cloud computing, automation and digital transformation services from Hyderabad.',
    image: '/og/services.jpg',
  },
  '/solutions': {
    title: 'Solutions We Build',
    description:
      'Examples of the software, data, AI, cloud and automation solutions we can build for you, from online stores and ERP to dashboards and AI assistants.',
    image: '/og/solutions.jpg',
  },
  '/industries': {
    title: 'Industries We Serve',
    description:
      'Hiring and technology services for IT, BPO and customer service, health insurance, healthcare, banking and finance, retail and education businesses.',
    image: '/og/industries.jpg',
  },
  '/technologies': {
    title: 'Technologies We Use',
    description:
      'The tools we work with across web, mobile, cloud, data, business intelligence, AI and automation, and how we choose the right ones for your project.',
    image: '/og/technologies.jpg',
  },
  '/about': {
    title: 'About Us',
    description:
      'A&N Software Solutions is a Hyderabad-based company that helps organisations hire skilled professionals and build dependable technology.',
    image: '/og/about.jpg',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      'Contact A&N Software Solutions in Hyderabad about hiring, job opportunities or technology projects. Call +91 63007 21736 or send us a message.',
    image: '/og/contact.jpg',
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description:
      'How A&N Software Solutions collects, uses, shares and protects personal information from employers, candidates and website visitors.',
    image: '/og/privacy-policy.jpg',
  },
  '/terms': {
    title: 'Terms of Service',
    description:
      'The terms and conditions for using the A&N Software Solutions website, job listings and services. Please read them before using the site.',
    image: '/og/terms.jpg',
  },
}

const SERVICE_PAGES = Object.fromEntries(
  SERVICES.map((service) => [
    `/services/${service.slug}`,
    {
      title: `${service.title} Services`,
      description: `${service.short} ${service.title} services from A&N Software Solutions, Hyderabad.`,
      image: `/og/services-${service.slug}.jpg`,
    },
  ]),
)

export const PAGE_META = { ...STATIC_PAGES, ...SERVICE_PAGES }

/** Every page that should be indexed and listed in the sitemap. */
export const INDEXABLE_PATHS = Object.keys(PAGE_META)

export const NOT_FOUND_META = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  image: SITE.ogImage,
  noindex: true,
}

export const fullTitle = (title) => (title ? `${title} | ${SITE.name}` : SITE.defaultTitle)

export const canonicalUrl = (path) => `${SITE.url}${path === '/' ? '/' : path}`

export const absoluteUrl = (path) => (path.startsWith('http') ? path : `${SITE.url}${path}`)

/** Metadata for a pathname; unknown paths get the not-found metadata. */
export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return PAGE_META[path] ?? NOT_FOUND_META
}
