import { BrainCircuit, Cloud, Database, Monitor, Server, Smartphone, TestTube2 } from 'lucide-react'

export const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Monitor,
    description: 'Responsive, accessible and blazing-fast user interfaces.',
    items: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / Sass', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    description: 'Robust, secure and scalable server-side engineering.',
    items: ['Node.js', 'Express', 'NestJS', 'Java', 'Spring Boot', 'Python', 'Django', 'FastAPI', '.NET Core', 'PHP / Laravel', 'Go'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: Smartphone,
    description: 'Native and cross-platform apps for iOS and Android.',
    items: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart', 'Firebase', 'Expo'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Automated, observable and cost-efficient infrastructure.',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: Database,
    description: 'The right data store for every workload.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle', 'DynamoDB', 'Elasticsearch'],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    icon: BrainCircuit,
    description: 'Analytics, machine learning and generative AI.',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenAI APIs', 'Pandas', 'Apache Spark', 'Power BI', 'Tableau'],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    icon: TestTube2,
    description: 'Automated quality gates on every release.',
    items: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'Jest', 'JUnit', 'Postman', 'JMeter'],
  },
]

/** Flat list used by the home page marquee. */
export const FEATURED_TECH = [
  'React', 'Angular', 'Node.js', 'Java', 'Python', '.NET', 'Flutter', 'Swift',
  'Kotlin', 'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
]

export const TECH_PRINCIPLES = [
  { title: 'Fit for purpose', text: 'We recommend technology based on your goals, team and budget — never on hype.' },
  { title: 'Built to scale', text: 'Proven frameworks and cloud-native patterns that grow with your users.' },
  { title: 'Secure by default', text: 'OWASP-aligned practices, dependency scanning and regular updates.' },
  { title: 'Easy to maintain', text: 'Clean architecture, documentation and tests so any team can take it forward.' },
]
