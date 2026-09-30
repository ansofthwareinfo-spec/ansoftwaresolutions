import { GraduationCap, Headset, HeartPulse, Landmark, Laptop, ShieldPlus, ShoppingCart } from 'lucide-react'
import { IMAGES } from '@/utils/image'

/**
 * Sectors we support. Each one lists the people we hire for it and the solutions we build.
 * Health Insurance is listed on our LinkedIn page.
 */
export const INDUSTRIES = [
  {
    id: 'it-technology',
    title: 'IT & Technology',
    icon: Laptop,
    image: IMAGES.developer,
    text: 'Software firms and technology teams need people who can contribute from the first week, and systems that keep up as they grow.',
    roles: ['Developers and engineers', 'QA and technical support', 'Project and product managers'],
    solutions: ['Custom software and product development', 'Cloud setup and DevOps', 'Data platforms and dashboards'],
  },
  {
    id: 'bpo-customer-service',
    title: 'BPO & Customer Service',
    icon: Headset,
    image: IMAGES.support,
    text: 'Customer service and BPO operations depend on reliable teams and smooth processes. We help you staff up for a new process and automate the repetitive work.',
    roles: ['Voice and non-voice executives', 'Chat and email support', 'Team leaders and quality analysts'],
    solutions: ['CRM and ticketing integrations', 'Process and workflow automation', 'Performance and SLA dashboards'],
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    icon: ShieldPlus,
    image: IMAGES.insurance,
    text: 'Insurers handle large volumes of policies, claims and customer documents every day. The right people and better data management make that work faster and more accurate.',
    roles: ['Claims and policy processing staff', 'Customer service executives', 'MIS and data analysts'],
    solutions: ['Policy and claims data management', 'Claims reporting dashboards', 'Document and file management'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    image: IMAGES.healthcare,
    text: 'Clinics and healthcare providers juggle appointments, records and billing. Skilled staff and good software take a lot of that load off doctors and nurses.',
    roles: ['Front office and patient coordinators', 'Medical billing and coding staff', 'IT and support staff'],
    solutions: ['Appointment and patient portals', 'Clinic management software', 'Patient and operational reporting'],
  },
  {
    id: 'finance',
    title: 'Banking & Finance',
    icon: Landmark,
    image: IMAGES.finance,
    text: 'Finance teams need accurate numbers and dependable people. We hire for key roles and build the dashboards and automation that cut manual work.',
    roles: ['Accounts and finance executives', 'Operations and back-office staff', 'Relationship managers'],
    solutions: ['Financial dashboards and reporting', 'Invoice and document automation', 'Customer management tools'],
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    icon: ShoppingCart,
    image: IMAGES.retail,
    text: 'Selling online and in store means keeping stock, orders and customers in sync, and having the right people in every role.',
    roles: ['Customer support and store staff', 'E-commerce and catalogue executives', 'Sales and business development'],
    solutions: ['Online stores with secure payments', 'Inventory and order management', 'Sales and demand forecasting'],
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    image: IMAGES.education,
    text: 'Schools, colleges and training providers need committed staff and simple tools to teach, assess and track progress.',
    roles: ['Academic counsellors', 'Admin and operations staff', 'Technical and LMS support'],
    solutions: ['Learning management systems', 'Online exams and assessments', 'Student and fee management'],
  },
]
