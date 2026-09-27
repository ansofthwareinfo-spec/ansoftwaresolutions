/**
 * Central company configuration.
 * Replace the example values below with your real details — every page,
 * the footer, contact page and SEO tags read from this single file.
 */
export const SITE = {
  name: 'AN Software Solutions',
  shortName: 'AN Software',
  legalName: 'AN Software Solutions Private Limited',
  tagline: 'Engineering software that grows your business',
  url: 'https://www.ansoftwaresolutions.com',
  defaultTitle: 'AN Software Solutions | Software Development & IT Services Company',
  defaultDescription:
    'AN Software Solutions builds custom software, web and mobile apps, cloud, AI and digital solutions that help businesses grow. Get a free consultation today.',
  ogImage: '/og-image.svg',
  foundedYear: 2020,

  contact: {
    email: 'info@ansoftwaresolutions.com',
    careersEmail: 'careers@ansoftwaresolutions.com',
    phone: '+91 98765 43210',
    phoneHref: '+919876543210',
    hours: 'Mon – Sat, 9:30 AM – 6:30 PM IST',
    address: {
      line1: '4th Floor, Example Tech Park',
      line2: 'HITEC City, Madhapur',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: '500081',
      country: 'India',
    },
    mapQuery: 'HITEC City, Hyderabad, Telangana',
  },

  offices: [
    { city: 'Hyderabad', label: 'Headquarters', detail: 'HITEC City, Madhapur, Hyderabad 500081' },
    { city: 'Bangalore', label: 'Delivery Center', detail: 'Outer Ring Road, Bellandur, Bangalore 560103' },
  ],

  social: {
    linkedin: 'https://www.linkedin.com/company/ansoftwaresolutions',
    twitter: 'https://x.com/ansoftwaresol',
    facebook: 'https://www.facebook.com/ansoftwaresolutions',
    instagram: 'https://www.instagram.com/ansoftwaresolutions',
  },
}

export const yearsInBusiness = () => Math.max(1, new Date().getFullYear() - SITE.foundedYear)
