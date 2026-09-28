import { BarChart3, BrainCircuit, Cloud, Database, Monitor, Server, Smartphone, Workflow } from 'lucide-react'

export const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Web Frontend',
    icon: Monitor,
    description: 'Fast, responsive interfaces that work on every screen.',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    description: 'Reliable, secure server-side code and integrations.',
    items: ['Node.js', 'Java & Spring Boot', 'Python', 'FastAPI', '.NET', 'REST & GraphQL'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: Smartphone,
    description: 'Apps for Android and iOS.',
    items: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infrastructure that is secure, automated and cost-aware.',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    icon: Database,
    description: 'Storing, moving and preparing data you can trust.',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Apache Spark', 'Snowflake', 'BigQuery'],
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    icon: BarChart3,
    description: 'Dashboards and reports people actually read.',
    items: ['Power BI', 'Tableau', 'Looker Studio', 'Excel', 'DAX'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    description: 'Machine learning and generative AI, applied practically.',
    items: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'LangChain', 'Azure OpenAI'],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: Workflow,
    description: 'Tools that take repetitive work off your team.',
    items: ['Power Automate', 'UiPath', 'n8n', 'Zapier', 'Python scripts'],
  },
]

/** Flat list used by the home page marquee. */
export const FEATURED_TECH = [
  'React', 'Angular', 'Node.js', 'Java', 'Python', '.NET', 'Flutter', 'AWS',
  'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'Power BI', 'TensorFlow', 'Power Automate',
]

export const TECH_PRINCIPLES = [
  { title: 'Fit for purpose', text: 'We recommend tools based on your goals, team and budget, not on what is trending.' },
  { title: 'Ready to grow', text: 'Proven frameworks and cloud setups that can handle more users as you grow.' },
  { title: 'Secure by default', text: 'Security practices, dependency checks and regular updates are part of every project.' },
  { title: 'Easy to maintain', text: 'Clean structure, documentation and tests, so any developer can pick it up later.' },
]
