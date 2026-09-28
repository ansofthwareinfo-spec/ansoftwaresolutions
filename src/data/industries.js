import { GraduationCap, HeartPulse, Landmark, ShieldPlus, ShoppingCart } from 'lucide-react'
import { IMAGES } from '@/utils/image'

/* Sectors where our services are a strong fit. Health Insurance is listed on our LinkedIn page. */
export const INDUSTRIES = [
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    icon: ShieldPlus,
    image: IMAGES.insurance,
    text: 'Insurers handle large volumes of policies, claims and customer documents every day. Better data management, clear reporting and automation make that work faster and more accurate.',
    solutions: ['Policy and claims data management', 'Claims reporting and analytics dashboards', 'Document and file management for policies'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    image: IMAGES.healthcare,
    text: 'Clinics and healthcare providers juggle appointments, records and reports. Software and data can take a lot of that paperwork away while keeping patient information private.',
    solutions: ['Appointment and patient portals', 'Clinic management software', 'Reporting on patient and operational data'],
  },
  {
    id: 'finance',
    title: 'Banking & Finance',
    icon: Landmark,
    image: IMAGES.finance,
    text: 'Finance teams need accurate numbers, fast. Dashboards, automated reconciliation and document processing cut down manual work and reduce errors.',
    solutions: ['Financial dashboards and reporting', 'Automated invoice and document processing', 'Loan and customer management tools'],
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    icon: ShoppingCart,
    image: IMAGES.retail,
    text: 'Selling online and in store means keeping stock, orders and customers in sync. Good software and data help you sell more and waste less.',
    solutions: ['Online stores with secure payments', 'Inventory and order management', 'Sales and demand forecasting'],
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    image: IMAGES.education,
    text: 'Schools, colleges and training providers can teach, assess and track progress online, with less admin for staff.',
    solutions: ['Learning management systems', 'Online exams and assessments', 'Student and fee management'],
  },
]
