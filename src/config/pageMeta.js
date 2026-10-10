import { SERVICES } from '@/data/services'
import { SITE } from './site'

/**
 * SEO metadata for every page — the single source of truth.
 * Used at runtime by <Seo /> and at build time by scripts/prerender.mjs,
 * which writes each page's static HTML (title, description, keywords, social tags).
 *
 * Guidelines:
 *  - title: the main search phrase first, brand last; about 70 characters or fewer in total
 *  - description: 140–160 characters, says who it is for, where, and what to do next
 *  - keywords: a few accurate phrases (Google ignores this tag; keep it short to avoid spam signals)
 */
/** Brand-name searches: the spellings people type for "A&N Software Solutions". */
const BRAND_KEYWORDS = [
  'AN Software Solutions',
  'A and N Software Solutions',
  'A N Software Solutions',
  'A&N Software',
  'AN Software Solutions Hyderabad',
  'ansoftwaresolutions',
]

const STATIC_PAGES = {
  '/': {
    title: null, // uses SITE.defaultTitle
    description: SITE.defaultDescription,
    keywords: [
      'recruitment agency in Hyderabad',
      'staffing company Hyderabad',
      'IT recruitment',
      'contract staffing',
      'BPO hiring',
      'IT services company Hyderabad',
      'A&N Software Solutions',
      ...BRAND_KEYWORDS,
    ],
    image: '/og/home.jpg',
  },
  '/hire': {
    title: 'Recruitment & Staffing Services in Hyderabad',
    description:
      'Hire skilled, pre-screened candidates for permanent, contract, leadership, fresher and bulk roles. Share your requirement and we will call you within a day.',
    keywords: [
      'recruitment services Hyderabad',
      'staffing services',
      'hire developers',
      'permanent hiring',
      'contract to hire',
      'bulk hiring',
      'campus hiring',
    ],
    image: '/og/hire.jpg',
  },
  '/jobs': {
    title: 'Jobs in Hyderabad for Freshers & Experienced',
    description:
      'Find jobs in Hyderabad and across India for freshers and experienced professionals in IT, BPO, customer support and operations. Apply online or send a resume.',
    keywords: [
      'jobs in Hyderabad',
      'fresher jobs Hyderabad',
      'IT jobs Hyderabad',
      'BPO jobs Hyderabad',
      'customer support jobs',
      'job consultancy Hyderabad',
    ],
    image: '/og/jobs.jpg',
  },
  '/services': {
    title: 'IT & Software Development Services, Hyderabad',
    description:
      'Software development, data & analytics, AI, business intelligence, cloud computing, automation and digital transformation services for growing businesses.',
    keywords: [
      'IT services Hyderabad',
      'software development company Hyderabad',
      'data analytics services',
      'cloud computing services',
      'AI development',
      'business process automation',
    ],
    image: '/og/services.jpg',
  },
  '/solutions': {
    title: 'Solutions We Build: ERP, E-commerce & AI',
    description:
      'Examples of the solutions we build: online stores, booking apps, ERP, sales dashboards, data warehouses, AI assistants, forecasting and invoice automation.',
    keywords: [
      'custom ERP development',
      'e-commerce website development',
      'Power BI dashboards',
      'AI document assistant',
      'invoice automation',
      'cloud migration',
    ],
    image: '/og/solutions.jpg',
  },
  '/industries': {
    title: 'Industries We Serve: IT, BPO & Healthcare',
    description:
      'Recruitment and technology services for IT, BPO and customer service, health insurance, healthcare, banking and finance, retail and education businesses.',
    keywords: [
      'IT staffing',
      'BPO recruitment',
      'healthcare staffing',
      'health insurance technology',
      'banking and finance recruitment',
      'retail software solutions',
    ],
    image: '/og/industries.jpg',
  },
  '/technologies': {
    title: 'Technologies: React, Java, Python, AWS & More',
    description:
      'The tools we work with across web, mobile, cloud, data, BI, AI and automation, including React, Java, Python, .NET, Flutter, AWS, Azure and Power BI.',
    keywords: ['React development', 'Java development', 'Python development', 'AWS and Azure', 'Power BI', 'Flutter apps'],
    image: '/og/technologies.jpg',
  },
  '/about': {
    title: 'About Us: Recruitment & IT Firm in Hyderabad',
    description:
      'A&N Software Solutions (AN Software Solutions) is a Hyderabad firm helping companies hire skilled professionals and build software, data and cloud solutions.',
    keywords: [
      'about A&N Software Solutions',
      'recruitment company Hyderabad',
      'IT company Hyderabad',
      'talent and technology partner',
      'about AN Software Solutions',
      ...BRAND_KEYWORDS,
    ],
    image: '/og/about.jpg',
  },
  '/contact': {
    title: 'Contact Us: Hire Talent or Start a Project',
    description:
      'Contact A&N (AN) Software Solutions in Hyderabad about hiring, jobs or technology projects. Call +91 63007 21736 or send a message. We reply within a day.',
    keywords: [
      'contact A&N Software Solutions',
      'recruitment agency contact Hyderabad',
      'hire talent Hyderabad',
      'contact AN Software Solutions',
      'A and N Software Solutions contact number',
      'AN Software Solutions Hyderabad',
    ],
    image: '/og/contact.jpg',
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description:
      'How A&N Software Solutions collects, uses, shares and protects personal information from employers, job candidates and website visitors in India.',
    keywords: ['privacy policy', 'A&N Software Solutions'],
    image: '/og/privacy-policy.jpg',
  },
  '/terms': {
    title: 'Terms of Service',
    description:
      'The terms and conditions for using the A&N Software Solutions website, job listings and services. Please read them carefully before using the website.',
    keywords: ['terms of service', 'A&N Software Solutions'],
    image: '/og/terms.jpg',
  },
}

/* Search-focused metadata for each service page, keyed by service slug. */
const SERVICE_SEO = {
  'software-engineering': {
    title: 'Custom Software Development in Hyderabad',
    description:
      'Custom software, web app and mobile app development. We design, build, test and support software that fits how your business works, from our Hyderabad base.',
    keywords: ['custom software development', 'web application development', 'mobile app development', 'software company Hyderabad', 'API integration'],
  },
  'data-analytics': {
    title: 'Data Analytics & Database Services',
    description:
      'Database development, data integration, information and file management, and business analytics that turn scattered data into numbers your team can trust.',
    keywords: ['data analytics services', 'database development', 'information management', 'file management', 'business analytics', 'data integration'],
  },
  'artificial-intelligence': {
    title: 'AI Development & Consulting Services',
    description:
      'Practical AI for business: assistants and chatbots, document processing, forecasting, recommendations and AI strategy, built securely around your own data.',
    keywords: ['AI development company', 'AI chatbot development', 'document processing AI', 'demand forecasting', 'generative AI solutions'],
  },
  'business-intelligence': {
    title: 'Power BI & Business Intelligence Services',
    description:
      'Power BI and Tableau dashboards, automated data reporting and KPI tracking that show how your business is doing at a glance, without manual Excel reports.',
    keywords: ['business intelligence services', 'Power BI dashboard development', 'Tableau dashboards', 'data reporting', 'KPI dashboards'],
  },
  'cloud-computing': {
    title: 'Cloud Application Development & Management',
    description:
      'Cloud application development, migration and cloud management on AWS, Azure and Google Cloud, with DevOps, monitoring, backups and cost optimisation.',
    keywords: ['cloud application development', 'cloud management services', 'cloud migration', 'AWS and Azure', 'DevOps services'],
  },
  automation: {
    title: 'Business Process Automation & RPA Services',
    description:
      'Automate approvals, data entry, invoices and reports with workflow automation, RPA and system integration, and save your team hours of manual work each week.',
    keywords: ['business process automation', 'workflow automation', 'RPA services', 'invoice automation', 'Power Automate'],
  },
  'digital-transformation': {
    title: 'Digital Transformation Consulting Services',
    description:
      'A practical, step-by-step plan to modernise how your business runs: process review, technology roadmap, system selection and hands-on help with delivery.',
    keywords: ['digital transformation consulting', 'technology roadmap', 'process digitisation', 'ERP and CRM selection', 'IT consulting'],
  },
}

const SERVICE_PAGES = Object.fromEntries(
  SERVICES.map((service) => {
    const seo = SERVICE_SEO[service.slug] ?? {}
    return [
      `/services/${service.slug}`,
      {
        title: seo.title ?? `${service.title} Services`,
        description: seo.description ?? service.short,
        keywords: seo.keywords ?? [service.title],
        image: `/og/services-${service.slug}.jpg`,
        service: { name: service.title, slug: service.slug },
      },
    ]
  }),
)

export const PAGE_META = { ...STATIC_PAGES, ...SERVICE_PAGES }

/** Every page that should be indexed. Keep public/sitemap.xml in sync with this list. */
export const INDEXABLE_PATHS = Object.keys(PAGE_META)

/** Robots directive for indexable pages: allow large image previews and full snippets. */
export const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
export const ROBOTS_NOINDEX = 'noindex, follow'

export const NOT_FOUND_META = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  keywords: [],
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
