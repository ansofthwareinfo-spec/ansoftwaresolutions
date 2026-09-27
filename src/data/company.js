import {
  Award,
  Compass,
  Eye,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LifeBuoy,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'
import { IMAGES } from '@/utils/image'

/* NOTE: numbers, names and milestones below are example content — replace with your real data. */

export const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 80, suffix: '+', label: 'Happy Clients' },
  { value: 45, suffix: '+', label: 'Tech Experts' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

export const MISSION_VISION = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower businesses of every size with reliable, secure and scalable technology — delivered transparently, on time, and with measurable impact on their growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a globally trusted technology partner from India, recognised for engineering excellence, honest partnerships and a people-first culture.',
  },
]

export const GOALS = [
  {
    icon: TrendingUp,
    title: 'Deliver Measurable Value',
    text: 'Tie every engagement to clear business outcomes — revenue, efficiency or customer experience — and report on them openly.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Security First',
    text: 'Follow code reviews, automated testing and secure-by-design practices on every project, without exception.',
  },
  {
    icon: Handshake,
    title: 'Build Long-Term Partnerships',
    text: 'Earn repeat business through trust, responsiveness and support that continues long after launch.',
  },
  {
    icon: Users,
    title: 'Grow Our People',
    text: 'Invest in continuous learning, certifications and mentorship so our team stays ahead of the technology curve.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate Responsibly',
    text: 'Adopt AI, cloud-native and automation technologies where they create real value — ethically and securely.',
  },
  {
    icon: Rocket,
    title: 'Scale Globally',
    text: 'Expand our delivery footprint to serve clients across India, the Middle East, Europe and North America.',
  },
]

export const VALUES = [
  { icon: HeartHandshake, title: 'Integrity', text: 'We are honest about timelines, costs and challenges — always.' },
  { icon: Award, title: 'Ownership', text: 'We treat every client product as if it were our own.' },
  { icon: Sparkles, title: 'Craftsmanship', text: 'Clean code, thoughtful design and attention to detail.' },
  { icon: Users, title: 'Collaboration', text: 'One team with our clients, sharing context and credit.' },
  { icon: Lightbulb, title: 'Curiosity', text: 'We keep learning so our clients keep leading.' },
  { icon: Zap, title: 'Agility', text: 'We adapt quickly and deliver value in short, steady cycles.' },
]

export const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: 'Experienced Engineers',
    text: 'Skilled developers, designers and testers with hands-on experience across modern stacks.',
  },
  {
    icon: Zap,
    title: 'Agile, On-Time Delivery',
    text: 'Two-week sprints, weekly demos and clear milestones keep projects predictable.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & NDA Protection',
    text: 'Strict NDAs, secure coding standards and full IP ownership transferred to you.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    text: 'No hidden costs. Flexible engagement models that match your budget and goals.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Point of Contact',
    text: 'A project manager who knows your product and answers your questions fast.',
  },
  {
    icon: LifeBuoy,
    title: 'Post-Launch Support',
    text: 'Maintenance, monitoring and enhancements long after your product goes live.',
  },
]

export const PROCESS = [
  { icon: Search, title: 'Discover', text: 'We understand your business, users and goals through workshops and research.' },
  { icon: Compass, title: 'Plan', text: 'We define scope, architecture, milestones and a realistic delivery roadmap.' },
  { icon: PenTool, title: 'Design', text: 'Wireframes and prototypes are validated with you before a line of code is written.' },
  { icon: Wrench, title: 'Develop & Test', text: 'Agile sprints with continuous QA, code reviews and weekly demos.' },
  { icon: Rocket, title: 'Launch & Support', text: 'Smooth deployment, monitoring and ongoing improvements after go-live.' },
]

export const TIMELINE = [
  { year: '2020', title: 'The Beginning', text: 'AN Software Solutions was founded with a small team and a big promise: honest, high-quality software.' },
  { year: '2021', title: 'First Enterprise Clients', text: 'Delivered our first ERP and e-commerce platforms and expanded into mobile app development.' },
  { year: '2022', title: 'Cloud & DevOps Practice', text: 'Launched a dedicated cloud practice helping clients migrate and automate their infrastructure.' },
  { year: '2023', title: 'Growing Team', text: 'Crossed 100 projects and opened a new delivery center to support growing demand.' },
  { year: '2024', title: 'AI & Data Solutions', text: 'Introduced data analytics and generative AI services to help clients automate smarter.' },
  { year: 'Today', title: 'Global Partner', text: 'Serving clients across multiple countries with a growing team of passionate technologists.' },
]

export const LEADERSHIP = [
  { name: 'Founder Name', role: 'Founder & CEO', image: IMAGES.portrait1 },
  { name: 'Co-Founder Name', role: 'Co-Founder & CTO', image: IMAGES.portrait2 },
  { name: 'Leader Name', role: 'Head of Delivery', image: IMAGES.portrait3 },
  { name: 'Leader Name', role: 'Head of Design', image: IMAGES.portrait4 },
]
