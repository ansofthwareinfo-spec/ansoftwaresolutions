import { Building2, Factory, GraduationCap, HeartPulse, Landmark, Plane, ShoppingCart, Truck } from 'lucide-react'
import { IMAGES } from '@/utils/image'

export const INDUSTRIES = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    image: IMAGES.healthcare,
    text: 'Patient portals, telemedicine, clinic management and health-data platforms built with privacy at their core.',
    solutions: ['Telemedicine apps', 'Hospital & clinic management', 'Appointment & e-prescription systems'],
  },
  {
    id: 'fintech',
    title: 'Banking & FinTech',
    icon: Landmark,
    image: IMAGES.finance,
    text: 'Secure digital banking, payment, lending and insurance solutions with strong compliance and audit trails.',
    solutions: ['Payment & wallet apps', 'Loan management systems', 'Financial dashboards & reporting'],
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    icon: ShoppingCart,
    image: IMAGES.retail,
    text: 'Omnichannel storefronts, POS integrations and personalisation engines that increase basket size.',
    solutions: ['B2C & B2B e-commerce', 'Inventory & order management', 'Loyalty & recommendation engines'],
  },
  {
    id: 'education',
    title: 'Education & E-learning',
    icon: GraduationCap,
    image: IMAGES.education,
    text: 'Learning management systems, virtual classrooms and assessment platforms for institutions and ed-tech.',
    solutions: ['LMS platforms', 'Online exam & assessment tools', 'Student & campus management'],
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    icon: Truck,
    image: IMAGES.logistics,
    text: 'Fleet tracking, warehouse management and route optimisation to move goods faster and cheaper.',
    solutions: ['Fleet & GPS tracking', 'Warehouse management systems', 'Delivery & route optimisation'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: Building2,
    image: IMAGES.realEstate,
    text: 'Property listing portals, CRM for brokers and tenant management tools that simplify every transaction.',
    solutions: ['Property listing portals', 'Real-estate CRM', 'Tenant & facility management'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    image: IMAGES.manufacturing,
    text: 'ERP, production planning and IoT-driven monitoring that bring visibility to the factory floor.',
    solutions: ['Manufacturing ERP', 'IoT machine monitoring', 'Quality & maintenance tracking'],
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    icon: Plane,
    image: IMAGES.travel,
    text: 'Booking engines, hotel management and travel apps that deliver seamless guest experiences.',
    solutions: ['Booking & reservation engines', 'Hotel management systems', 'Travel & tour apps'],
  },
]
