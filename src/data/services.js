import {
  BrainCircuit,
  Cloud,
  Code2,
  Globe,
  Megaphone,
  Palette,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react'
import { IMAGES } from '@/utils/image'

/**
 * Service catalogue. Each entry powers the services grid, the navbar
 * mega-menu and its own detail page at /services/:slug.
 */
export const SERVICES = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Tailor-made business software engineered around your workflows, not the other way round.',
    icon: Code2,
    image: IMAGES.codeScreen,
    overview:
      'Off-the-shelf tools rarely fit the way a growing business actually works. We design and build custom software — ERPs, CRMs, internal portals, SaaS products and automation tools — that removes manual effort, connects your systems and scales as you grow.',
    features: [
      { title: 'Enterprise Applications', text: 'ERP, CRM, HRMS and inventory systems built around your exact processes.' },
      { title: 'SaaS Product Engineering', text: 'Multi-tenant, subscription-ready platforms from MVP to scale.' },
      { title: 'Legacy Modernisation', text: 'Re-architect ageing systems into modern, maintainable codebases.' },
      { title: 'API & System Integration', text: 'Connect payment gateways, ERPs, CRMs and third-party services reliably.' },
      { title: 'Workflow Automation', text: 'Eliminate repetitive tasks with rule-based and AI-assisted automation.' },
      { title: 'Maintenance & Support', text: 'SLA-backed support, monitoring and continuous improvements.' },
    ],
    benefits: [
      'Software that fits your process exactly',
      'Full ownership of source code and IP',
      'Scalable, modular architecture',
      'Lower long-term licensing costs',
    ],
    tech: ['Java', 'Spring Boot', 'Node.js', '.NET', 'Python', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'web-development',
    title: 'Web Application Development',
    short: 'Fast, secure and SEO-friendly websites and web apps that convert visitors into customers.',
    icon: Globe,
    image: IMAGES.codeLaptop,
    overview:
      'Your website is often the first conversation you have with a customer. We build responsive corporate websites, e-commerce stores, portals and complex web applications with clean code, strong performance scores and search visibility built in from day one.',
    features: [
      { title: 'Corporate Websites', text: 'Modern, responsive websites that reflect your brand and build trust.' },
      { title: 'Web Applications', text: 'Dashboards, portals and SaaS apps with rich, app-like experiences.' },
      { title: 'E-commerce Development', text: 'Online stores with secure checkout, payments and inventory sync.' },
      { title: 'Progressive Web Apps', text: 'Installable, offline-ready web apps that feel native on any device.' },
      { title: 'CMS & Headless CMS', text: 'Easy content editing with WordPress, Strapi or headless setups.' },
      { title: 'Performance & SEO', text: 'Core Web Vitals optimisation, technical SEO and accessibility.' },
    ],
    benefits: [
      'Mobile-first, responsive design',
      'Optimised for speed and Core Web Vitals',
      'Built-in on-page and technical SEO',
      'Secure, well-tested codebases',
    ],
    tech: ['React', 'Next.js', 'Angular', 'Vue.js', 'Node.js', 'Laravel', 'WordPress', 'TypeScript'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Native and cross-platform iOS and Android apps your users will love to open every day.',
    icon: Smartphone,
    image: IMAGES.mobile,
    overview:
      'From consumer apps to field-force and enterprise mobility, we craft intuitive, high-performance mobile apps. We help you choose between native and cross-platform, then handle design, development, store launch and post-launch growth.',
    features: [
      { title: 'iOS App Development', text: 'Swift-based native apps following Apple Human Interface Guidelines.' },
      { title: 'Android App Development', text: 'Kotlin-based native apps optimised across devices.' },
      { title: 'Cross-Platform Apps', text: 'One codebase for both platforms with Flutter or React Native.' },
      { title: 'App UI/UX Design', text: 'Research-driven, thumb-friendly interfaces and micro-interactions.' },
      { title: 'Backend & APIs', text: 'Secure, scalable backends, push notifications and real-time sync.' },
      { title: 'Store Launch & ASO', text: 'Play Store / App Store submission and store optimisation.' },
    ],
    benefits: [
      'Faster time-to-market with cross-platform',
      'Smooth, 60fps user experiences',
      'Offline support and secure storage',
      'Analytics and crash reporting built in',
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'GraphQL'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short: 'Migrate, modernise and automate your infrastructure for speed, uptime and cost control.',
    icon: Cloud,
    image: IMAGES.servers,
    overview:
      'We help teams move to the cloud with confidence and ship faster once they are there. Our engineers design cloud-native architectures, automate CI/CD pipelines, containerise workloads and keep your infrastructure observable, secure and cost-efficient.',
    features: [
      { title: 'Cloud Migration', text: 'Plan and execute low-risk migrations to AWS, Azure or Google Cloud.' },
      { title: 'CI/CD Pipelines', text: 'Automated build, test and deploy pipelines for every commit.' },
      { title: 'Containers & Kubernetes', text: 'Docker and Kubernetes for portable, self-healing workloads.' },
      { title: 'Infrastructure as Code', text: 'Repeatable environments with Terraform and CloudFormation.' },
      { title: 'Monitoring & Observability', text: 'Dashboards, logs and alerts so issues are caught early.' },
      { title: 'Cloud Cost Optimisation', text: 'Right-sizing and governance to cut unnecessary cloud spend.' },
    ],
    benefits: [
      'Faster, more frequent releases',
      'High availability and disaster recovery',
      'Lower infrastructure costs',
      'Security and compliance by design',
    ],
    tech: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Human-centred product design that makes complex things feel simple and delightful.',
    icon: Palette,
    image: IMAGES.uiDesign,
    overview:
      'Great design is how a product earns trust. Our designers combine user research, information architecture and visual craft to create interfaces that are easy to use, accessible and consistent — backed by design systems your developers can build from quickly.',
    features: [
      { title: 'User Research', text: 'Interviews, personas and journey maps grounded in real user needs.' },
      { title: 'Wireframing & Prototyping', text: 'Clickable prototypes to validate ideas before development.' },
      { title: 'Visual & UI Design', text: 'Clean, on-brand interfaces for web and mobile.' },
      { title: 'Design Systems', text: 'Reusable components and tokens for consistent, faster delivery.' },
      { title: 'Usability Testing', text: 'Test with real users and iterate on measurable feedback.' },
      { title: 'Accessibility Audits', text: 'WCAG-aligned reviews so everyone can use your product.' },
    ],
    benefits: [
      'Higher conversion and engagement',
      'Fewer support tickets',
      'Consistent brand experience',
      'Faster hand-off to development',
    ],
    tech: ['Figma', 'Adobe XD', 'Illustrator', 'Framer', 'Miro', 'Maze'],
  },
  {
    slug: 'data-analytics-ai',
    title: 'Data Analytics & AI',
    short: 'Turn raw data into decisions with dashboards, machine learning and generative AI.',
    icon: BrainCircuit,
    image: IMAGES.ai,
    overview:
      'Most organisations already have the data they need — it is just scattered. We build data pipelines, BI dashboards and practical AI solutions such as chatbots, document intelligence and forecasting models that deliver clear, measurable business value.',
    features: [
      { title: 'BI & Dashboards', text: 'Interactive Power BI and Tableau dashboards for real-time insight.' },
      { title: 'Data Engineering', text: 'Reliable ETL/ELT pipelines and modern data warehouses.' },
      { title: 'Machine Learning', text: 'Prediction, recommendation and anomaly-detection models.' },
      { title: 'Generative AI Solutions', text: 'LLM-powered assistants, search and content automation.' },
      { title: 'Computer Vision & OCR', text: 'Extract data from images, invoices and documents automatically.' },
      { title: 'AI Strategy & Consulting', text: 'Identify high-ROI AI use cases and a responsible adoption roadmap.' },
    ],
    benefits: [
      'Data-driven decision making',
      'Automation of repetitive knowledge work',
      'Responsible, secure AI adoption',
      'Clear ROI on every use case',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'Power BI', 'Snowflake', 'Apache Spark'],
  },
  {
    slug: 'quality-assurance-testing',
    title: 'QA & Software Testing',
    short: 'Manual and automated testing that catches issues before your customers ever do.',
    icon: ShieldCheck,
    image: IMAGES.security,
    overview:
      'Quality is not a phase at the end — it is built into every sprint. Our QA engineers combine manual exploratory testing with automation, performance and security testing to help you release with confidence, every single time.',
    features: [
      { title: 'Manual & Exploratory Testing', text: 'Structured test cases plus real-world exploratory sessions.' },
      { title: 'Test Automation', text: 'Web, mobile and API automation suites integrated into CI/CD.' },
      { title: 'Performance Testing', text: 'Load and stress tests to ensure speed under real traffic.' },
      { title: 'Security Testing', text: 'Vulnerability scans and OWASP-based security assessments.' },
      { title: 'Mobile App Testing', text: 'Device coverage across OS versions, screen sizes and networks.' },
      { title: 'QA Consulting', text: 'Test strategy, tooling and process setup for your team.' },
    ],
    benefits: [
      'Fewer production defects',
      'Faster regression cycles',
      'Better performance and stability',
      'Confident, predictable releases',
    ],
    tech: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'JMeter', 'Postman', 'Jest'],
  },
  {
    slug: 'it-consulting-staffing',
    title: 'IT Consulting & Staff Augmentation',
    short: 'Expert guidance and skilled engineers who plug into your team exactly when you need them.',
    icon: Users,
    image: IMAGES.strategy,
    overview:
      'Whether you need a technology roadmap or extra hands to hit a deadline, we have you covered. Our consultants help you make the right technology decisions, and our pre-vetted engineers integrate seamlessly with your in-house team on flexible terms.',
    features: [
      { title: 'Technology Consulting', text: 'Architecture reviews, tech-stack selection and digital roadmaps.' },
      { title: 'Dedicated Teams', text: 'A full, managed team working exclusively on your product.' },
      { title: 'Staff Augmentation', text: 'Individual developers, testers or designers added to your team.' },
      { title: 'Project Rescue', text: 'Stabilise delayed or troubled projects and get them back on track.' },
      { title: 'Code & Security Audits', text: 'Independent review of code quality, performance and security.' },
      { title: 'CTO-as-a-Service', text: 'Senior technical leadership for startups and growing businesses.' },
    ],
    benefits: [
      'Scale your team up or down quickly',
      'Access to specialised, vetted talent',
      'Reduced hiring time and cost',
      'Transparent reporting and communication',
    ],
    tech: ['Agile', 'Scrum', 'Jira', 'Confluence', 'Microsoft Teams', 'Slack'],
  },
  {
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    short: 'Search, social and performance marketing that brings qualified leads to your door.',
    icon: Megaphone,
    image: IMAGES.marketing,
    overview:
      'A great product still needs to be found. We plan and run data-driven digital marketing — SEO, paid campaigns, social media and content — with transparent reporting so you always know what is working and where every rupee goes.',
    features: [
      { title: 'Search Engine Optimisation', text: 'Technical, on-page and off-page SEO for sustainable rankings.' },
      { title: 'Pay-Per-Click Advertising', text: 'Google and Meta ad campaigns optimised for conversions.' },
      { title: 'Social Media Marketing', text: 'Strategy, content calendars and community management.' },
      { title: 'Content Marketing', text: 'Blogs, case studies and landing pages that educate and convert.' },
      { title: 'Local SEO', text: 'Google Business Profile optimisation to win local searches.' },
      { title: 'Analytics & Reporting', text: 'Clear monthly reports on traffic, leads and ROI.' },
    ],
    benefits: [
      'More qualified traffic and leads',
      'Stronger brand visibility',
      'Measurable return on ad spend',
      'Transparent monthly reporting',
    ],
    tech: ['Google Analytics 4', 'Google Ads', 'Search Console', 'Meta Ads', 'SEMrush', 'HubSpot'],
  },
]

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug)

export const ENGAGEMENT_MODELS = [
  {
    title: 'Fixed Price',
    text: 'Best for well-defined projects. Agreed scope, timeline and budget with milestone-based delivery.',
    points: ['Clear scope & budget', 'Milestone payments', 'Minimal management overhead'],
  },
  {
    title: 'Dedicated Team',
    text: 'A full-time team that works as an extension of yours — ideal for long-term product development.',
    points: ['Full control over priorities', 'Scalable team size', 'Deep product knowledge'],
    featured: true,
  },
  {
    title: 'Time & Material',
    text: 'Flexible engagement for evolving requirements. Pay only for the effort actually spent.',
    points: ['Change scope anytime', 'Transparent timesheets', 'Faster project start'],
  },
]
