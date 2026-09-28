import { BarChart3, BrainCircuit, Cloud, Code2, Database, TrendingUp, Workflow } from 'lucide-react'
import { IMAGES } from '@/utils/image'

/**
 * Our seven areas of expertise, matching the specialties on our LinkedIn page.
 * Each entry powers the services grid, the navbar menu and its own page at /services/:slug.
 */
export const SERVICES = [
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    short: 'Web apps, mobile apps and custom business software, built properly and built to last.',
    icon: Code2,
    image: IMAGES.codeScreen,
    overview:
      'Most businesses reach a point where spreadsheets and off-the-shelf tools stop keeping up. That is usually where we come in. We design and build software around the way your team actually works, whether it is a customer-facing web app, a mobile app or an internal tool that saves hours every week.',
    features: [
      { title: 'Web applications', text: 'Customer portals, dashboards and SaaS products that work well on any screen.' },
      { title: 'Mobile apps', text: 'Android and iOS apps, built natively or with Flutter and React Native.' },
      { title: 'Custom software development', text: 'Tools for billing, inventory, HR or operations, shaped around your process.' },
      { title: 'APIs and integrations', text: 'Connect payment gateways, CRMs and other systems so data moves on its own.' },
      { title: 'Modernising old systems', text: 'Move legacy software to a modern stack without disrupting daily work.' },
      { title: 'Testing and support', text: 'Automated tests before launch, plus fixes and improvements after it.' },
    ],
    benefits: [
      'Software that fits how you work',
      'You own the code and the IP',
      'Easy to change as you grow',
      'Tested before it reaches users',
    ],
    tech: ['React', 'Angular', 'Node.js', 'Java', 'Python', 'Flutter', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    short: 'Bring your data together, clean it up and make it useful for everyday decisions.',
    icon: Database,
    image: IMAGES.analytics,
    overview:
      'Your data is probably spread across a CRM, a few spreadsheets, an accounting tool and your app database. We connect those sources, clean the data and organise it so your team can trust the numbers and actually use them.',
    features: [
      { title: 'Database development', text: 'Well-designed databases that are fast, reliable and easy to grow.' },
      { title: 'Data integration', text: 'Pull data from your apps, spreadsheets and systems into one clean, central place.' },
      { title: 'Information management', text: 'Organise business information so it is accurate, consistent and easy to find.' },
      { title: 'File management', text: 'Store, organise and control access to documents and files securely.' },
      { title: 'Business analytics', text: 'Clear answers to specific business questions, explained in plain language.' },
      { title: 'Automated pipelines', text: 'Scheduled jobs keep data fresh, so nobody has to export files by hand.' },
    ],
    benefits: [
      'One reliable source of truth',
      'Less time on manual reports',
      'Better-informed decisions',
      'Data that is secure and organised',
    ],
    tech: ['Python', 'SQL', 'Apache Spark', 'Azure Data Factory', 'BigQuery', 'Snowflake'],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    short: 'Practical AI that saves time: assistants, document processing, forecasting and more.',
    icon: BrainCircuit,
    image: IMAGES.ai,
    overview:
      'AI is most useful when it solves a specific problem. We start by finding the tasks where it can genuinely help, like answering repetitive questions, reading documents or predicting demand. Then we build solutions that fit safely into the tools you already use.',
    features: [
      { title: 'AI assistants and chatbots', text: 'Answer customer or staff questions using your own documents and data.' },
      { title: 'Document processing', text: 'Read invoices, forms and contracts and pull out the details automatically.' },
      { title: 'Forecasting', text: 'Predict sales, demand or customer churn from your historical data.' },
      { title: 'Recommendations', text: 'Suggest the right product or content to each user.' },
      { title: 'Computer vision', text: 'Detect, count or inspect items in images and video.' },
      { title: 'AI strategy', text: 'Work out where AI will pay off and plan a safe, step-by-step rollout.' },
    ],
    benefits: [
      'Hours of repetitive work saved',
      'Faster answers for customers',
      'Decisions backed by data',
      'Your data stays private and secure',
    ],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'Azure OpenAI'],
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    short: 'Dashboards and reports that show how your business is doing at a glance.',
    icon: BarChart3,
    image: IMAGES.finance,
    overview:
      'You should not have to wait until month-end for someone to put a report together. We build dashboards and reports that are simple to read, update automatically and focus on the numbers that matter to you, so you can see what is happening today.',
    features: [
      { title: 'KPI dashboards', text: 'Sales, finance and operations metrics in one clear view.' },
      { title: 'Self-service reporting', text: 'Your team can filter and explore data without waiting on anyone.' },
      { title: 'Power BI and Tableau', text: 'Setup, data connections and best-practice configuration.' },
      { title: 'Data reporting', text: 'Accurate reports delivered to the right inboxes automatically, daily, weekly or monthly.' },
      { title: 'Mobile-friendly views', text: 'Check your key numbers from your phone.' },
      { title: 'Training', text: 'Help your team read, build and trust the dashboards.' },
    ],
    benefits: [
      'Performance visible in real time',
      'No more manual Excel reports',
      'Everyone works from the same numbers',
      'Problems and trends spotted early',
    ],
    tech: ['Power BI', 'Tableau', 'SQL Server', 'Excel', 'Looker Studio', 'DAX'],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    short: 'Move to the cloud, run reliably and keep hosting costs under control.',
    icon: Cloud,
    image: IMAGES.servers,
    overview:
      'Whether you are moving an application off an old server or launching something new, we set up cloud infrastructure that is secure, reliable and sized for what you actually need. We also automate deployments, so releasing updates becomes quick and low-risk.',
    features: [
      { title: 'Cloud application development', text: 'Applications built for the cloud from day one, ready to scale with your users.' },
      { title: 'Cloud migration', text: 'Move applications and data to AWS, Azure or Google Cloud with a clear plan.' },
      { title: 'Cloud management', text: 'Monitoring, backups, security updates and support for your cloud setup.' },
      { title: 'DevOps and CI/CD', text: 'Automated testing and deployment for every code change.' },
      { title: 'Containers', text: 'Docker and Kubernetes, used where they genuinely make sense.' },
      { title: 'Cost optimisation', text: 'Review and right-size resources to cut wasted spend.' },
    ],
    benefits: [
      'Fewer outages, faster recovery',
      'Quicker and safer releases',
      'Pay only for what you use',
      'Security built into the setup',
    ],
    tech: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    slug: 'automation',
    title: 'Automation',
    short: 'Take repetitive manual tasks off your team so they can focus on real work.',
    icon: Workflow,
    image: IMAGES.workshop,
    overview:
      'Copying data between systems, sending the same emails, chasing approvals, re-typing invoices. These small tasks add up to hours every week. We map out how the work flows today, then automate the repetitive steps so they happen on their own, accurately, every time.',
    features: [
      { title: 'Workflow automation', text: 'Approvals, notifications and hand-offs between teams, handled automatically.' },
      { title: 'System integration', text: 'Your CRM, accounting and email tools sync with each other.' },
      { title: 'Robotic process automation', text: 'Bots that handle rule-based tasks inside existing software.' },
      { title: 'Document automation', text: 'Capture, check and route invoices and forms without manual entry.' },
      { title: 'Automated alerts', text: 'The right information reaches the right person at the right time.' },
      { title: 'Process review', text: 'Find the steps worth automating first for the biggest time savings.' },
    ],
    benefits: [
      'Hours saved every week',
      'Fewer manual errors',
      'Faster turnaround on routine work',
      'Room to grow without extra hires',
    ],
    tech: ['Python', 'Power Automate', 'UiPath', 'n8n', 'Zapier', 'REST APIs'],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    short: 'A clear, step-by-step plan to modernise how your business runs, and help delivering it.',
    icon: TrendingUp,
    image: IMAGES.strategy,
    overview:
      'Transformation does not have to mean one huge, risky project. We look at how your business runs today, find where technology will make the biggest difference and help you move forward in manageable steps, from strategy through to execution.',
    features: [
      { title: 'Current-state review', text: 'Understand your processes, tools and pain points before changing anything.' },
      { title: 'Technology roadmap', text: 'A prioritised plan with realistic timelines and budgets.' },
      { title: 'Going digital', text: 'Replace paper forms and scattered spreadsheets with proper systems.' },
      { title: 'Choosing the right tools', text: 'Honest advice on ERP, CRM and other platforms, or building your own.' },
      { title: 'Change support', text: 'Training and hand-holding so your team adopts the new way of working.' },
      { title: 'Ongoing guidance', text: 'A technology partner to check in with as your business grows.' },
    ],
    benefits: [
      'A clear plan before you spend',
      'Changes rolled out in small steps',
      'Tools your team actually uses',
      'Technology tied to business goals',
    ],
    tech: ['Microsoft 365', 'Power Platform', 'Azure', 'Zoho', 'Salesforce', 'Jira'],
  },
]

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug)

export const ENGAGEMENT_MODELS = [
  {
    title: 'Fixed Price',
    text: 'Best when the scope is clear. You get an agreed price, timeline and list of deliverables up front.',
    points: ['Clear scope and budget', 'Payments tied to milestones', 'Little management needed from you'],
  },
  {
    title: 'Dedicated Team',
    text: 'Engineers who work only on your product, as an extension of your own team.',
    points: ['You set the priorities', 'Scale the team up or down', 'Deep knowledge of your product'],
    featured: true,
    tag: 'Best for ongoing work',
  },
  {
    title: 'Time & Material',
    text: 'Flexible for projects where requirements will change. You pay for the time actually spent.',
    points: ['Change direction any time', 'Transparent timesheets', 'Start quickly'],
  },
]
