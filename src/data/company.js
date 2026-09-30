import {
  Compass,
  Eye,
  FileCheck2,
  Handshake,
  LifeBuoy,
  MessagesSquare,
  PenTool,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

/* Company facts — these match our LinkedIn page. Keep both in sync. */
export const COMPANY_FACTS = [
  { label: 'Headquarters', value: 'Hyderabad, Telangana' },
  { label: 'What we do', value: 'Recruitment & technology services' },
]

export const SPECIALTIES = [
  'Software Engineering',
  'Data & Analytics',
  'Artificial Intelligence',
  'Business Intelligence',
  'Cloud Computing',
  'Automation',
  'Digital Transformation',
]

/* "Services provided" as listed on LinkedIn (Health Insurance appears on the Industries page). */
export const SERVICES_PROVIDED = [
  'Custom Software Development',
  'Cloud Application Development',
  'Cloud Management',
  'Database Development',
  'Business Analytics',
  'Data Reporting',
  'Information Management',
  'File Management',
]

/** Short highlights for the dark "at a glance" band. */
export const HIGHLIGHTS = [
  { value: 'Hyderabad', label: 'Where we are based' },
  { value: '7', label: 'Areas of expertise' },
  { value: '8', label: 'Services we provide' },
  { value: 'Free', label: 'First consultation' },
]

export const MISSION_VISION = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To help organisations turn challenges into opportunities by connecting them with skilled people and building the technology they rely on.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the partner companies trust for both talent and technology, known for honest advice, quality people and dependable delivery.',
  },
]

export const GOALS = [
  {
    icon: Target,
    title: 'Start with the problem',
    text: 'Understand the business challenge first, then choose the technology. Success is measured by the difference it makes.',
  },
  {
    icon: ShieldCheck,
    title: 'Build it properly',
    text: 'Review code, test thoroughly and build security in from the start. Solutions should be scalable, secure and easy to maintain.',
  },
  {
    icon: MessagesSquare,
    title: 'Be easy to work with',
    text: 'Communicate clearly, share progress often and raise problems early instead of hiding them.',
  },
  {
    icon: Zap,
    title: 'Make work more efficient',
    text: 'Use automation, data and AI to help every client get more done with less effort.',
  },
  {
    icon: Users,
    title: 'Put the right people first',
    text: 'Match every role with people who have the skills, and the attitude, to succeed in it.',
  },
  {
    icon: Handshake,
    title: 'Stay for the long run',
    text: 'Work alongside clients from strategy to execution, and stay involved well after launch.',
  },
]

export const WHY_CHOOSE_US = [
  {
    icon: MessagesSquare,
    title: 'Talk to the people doing the work',
    text: 'We are a small team, so you speak directly with the engineers designing and building your solution.',
  },
  {
    icon: TrendingUp,
    title: 'Strategy and delivery together',
    text: 'We help you decide what to build and then build it, so nothing gets lost between planning and execution.',
  },
  {
    icon: Scale,
    title: 'Clear pricing, no surprises',
    text: 'You get a written estimate before we start, and any change in scope is agreed with you first.',
  },
  {
    icon: FileCheck2,
    title: 'Your code, your IP',
    text: 'We are happy to sign an NDA, and the source code belongs to you once the project is complete.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to last',
    text: 'Scalable, secure and documented solutions that any team can maintain later.',
  },
  {
    icon: LifeBuoy,
    title: 'Support after launch',
    text: 'We stay around for fixes, updates and improvements once your solution is live.',
  },
]

export const PROCESS = [
  { icon: Search, title: 'Discover', text: 'We learn about your business, your users and what success looks like for you.' },
  { icon: Compass, title: 'Plan', text: 'We agree on scope, timeline and cost in writing before any work begins.' },
  { icon: PenTool, title: 'Design', text: 'You see wireframes and a clickable prototype early, so there are no surprises.' },
  { icon: Wrench, title: 'Build & Test', text: 'We build in short cycles, test as we go and show you progress regularly.' },
  { icon: Rocket, title: 'Launch & Support', text: 'We handle the launch and stay on hand for fixes, updates and improvements.' },
]
