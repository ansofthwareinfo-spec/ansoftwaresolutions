import {
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  Crown,
  FileSearch,
  GraduationCap,
  Handshake,
  Lock,
  MessagesSquare,
  Search,
  Target,
  Timer,
  UserCheck,
  Users,
  UsersRound,
  Zap,
} from 'lucide-react'

/* Recruitment & staffing — what we offer employers. */

export const HIRING_SERVICES = [
  {
    icon: Briefcase,
    title: 'Permanent Hiring',
    text: 'Full-time professionals who fit your role, your team and the way you work, from first call to joining day.',
  },
  {
    icon: Timer,
    title: 'Contract Staffing',
    text: 'Skilled people for a project, a peak season or a short-term gap, ready to start quickly.',
  },
  {
    icon: UserCheck,
    title: 'Contract-to-Hire',
    text: 'Work with a candidate on contract first, then bring them on full-time once you are sure of the fit.',
  },
  {
    icon: Crown,
    title: 'Leadership Hiring',
    text: 'Discreet search for managers, tech leads and senior specialists who can move your business forward.',
  },
  {
    icon: GraduationCap,
    title: 'Campus & Fresher Hiring',
    text: 'Motivated graduates and freshers, screened for fundamentals and the attitude to learn.',
  },
  {
    icon: UsersRound,
    title: 'Bulk Hiring',
    text: 'Several positions to fill at once? We run a structured drive so quality holds up at volume.',
  },
]

export const HIRING_MODELS = ['Permanent', 'Contract', 'Contract-to-hire', 'Leadership', 'Campus & freshers', 'Bulk hiring']

/* Roles we recruit for, grouped by function. */
export const ROLE_GROUPS = [
  {
    title: 'Software Development',
    roles: ['Java Developers', '.NET Developers', 'Python Developers', 'React & Angular Developers', 'Full Stack Developers', 'Mobile App Developers'],
  },
  {
    title: 'Customer Support & BPO',
    roles: ['Voice Process Executives', 'Non-Voice & Chat Support', 'Email Support', 'Team Leaders', 'Quality Analysts'],
  },
  {
    title: 'Data & Analytics',
    roles: ['Data Analysts', 'Power BI Developers', 'Data Engineers', 'MIS Executives'],
  },
  {
    title: 'Operations & Back Office',
    roles: ['Back Office Executives', 'Data Entry Operators', 'Operations Executives', 'Process Associates'],
  },
  {
    title: 'Cloud & Infrastructure',
    roles: ['DevOps Engineers', 'Cloud Engineers', 'System Administrators', 'Network Engineers'],
  },
  {
    title: 'Sales & Business Development',
    roles: ['Inside Sales Executives', 'Business Development Executives', 'Relationship Managers', 'Telesales'],
  },
  {
    title: 'Quality, AI & Automation',
    roles: ['QA & Automation Testers', 'Machine Learning Engineers', 'RPA Developers', 'Technical Support Engineers'],
  },
  {
    title: 'HR & Administration',
    roles: ['HR Executives', 'Recruiters', 'Admin Executives', 'Payroll Executives'],
  },
  {
    title: 'Management & Leadership',
    roles: ['Project Managers', 'Business Analysts', 'Operations Managers', 'Delivery Heads'],
  },
]

/** Flat list for the scrolling strip on the home page (two roles from each group, interleaved). */
export const FEATURED_ROLES = [0, 1].flatMap((i) => ROLE_GROUPS.map((group) => group.roles[i]))

export const HIRING_PROCESS = [
  { icon: MessagesSquare, title: 'Share your requirement', text: 'Tell us about the role, the skills that matter and the kind of person who will do well in your team.' },
  { icon: Search, title: 'We search & screen', text: 'We source candidates and check their skills, experience and expectations before anyone reaches you.' },
  { icon: ClipboardCheck, title: 'Review a shortlist', text: 'You receive a focused set of profiles with notes on why each person fits the brief.' },
  { icon: Users, title: 'Interviews', text: 'We schedule interviews, collect feedback and keep candidates informed at every stage.' },
  { icon: Handshake, title: 'Offer & joining', text: 'We help with the offer and stay in touch with the candidate until their first day.' },
]

export const EMPLOYER_BENEFITS = [
  {
    icon: BadgeCheck,
    title: 'Properly screened',
    text: 'We check skills, experience and communication before sharing a profile. For technical roles, our own engineers help assess candidates.',
  },
  {
    icon: Target,
    title: 'Only relevant profiles',
    text: 'You see candidates who fit the brief. No stacks of resumes to sort through.',
  },
  {
    icon: Zap,
    title: 'Quick turnaround',
    text: 'We start searching as soon as the brief is clear and keep you updated as profiles come in.',
  },
  {
    icon: MessagesSquare,
    title: 'One point of contact',
    text: 'A dedicated consultant who understands your role and answers your questions directly.',
  },
  {
    icon: Lock,
    title: 'Confidential when needed',
    text: 'Replacing someone or hiring for a sensitive role? We keep the search discreet.',
  },
  {
    icon: FileSearch,
    title: 'Clear terms',
    text: 'Fees and terms are agreed in writing before we begin, so there are no surprises later.',
  },
]

/** Short statements for the dark band on the home page. */
export const HIRING_HIGHLIGHTS = [
  { value: 'Screened', label: 'Every profile checked before you see it' },
  { value: 'Relevant', label: 'Candidates matched to your brief' },
  { value: 'Discreet', label: 'Confidential searches on request' },
  { value: 'End-to-end', label: 'From sourcing to joining day' },
]

export const CANDIDATE_STEPS = [
  { title: 'Send your profile', text: 'Apply for an opening or upload your resume to be considered for future roles.' },
  { title: 'We get in touch', text: 'If your profile matches a role, we call you to talk about the job and your expectations.' },
  { title: 'Interview', text: 'We share the job details, help you prepare and schedule the interview with the company.' },
  { title: 'Offer', text: 'We guide you through the offer and stay in touch until you join.' },
]

export const HIRING_FAQS = [
  {
    q: 'What kind of roles do you hire for?',
    a: 'Roles across the business: developers and data professionals, customer support and BPO teams, back-office and operations staff, sales, HR and management, from freshers to senior leaders.',
  },
  {
    q: 'How do we start working with you?',
    a: 'Share your requirement through the Hire Talent form or give us a call. We discuss the role, agree on terms and start the search.',
  },
  {
    q: 'How do you check candidate quality?',
    a: 'We review each candidate’s experience, assess the skills that matter for the role, check communication and confirm availability and salary expectations before sharing the profile.',
  },
  {
    q: 'Can you handle bulk hiring for a new process or team?',
    a: 'Yes. For support, BPO, operations or project teams, we plan a structured hiring drive with screening at every step, so quality holds up even at volume.',
  },
  {
    q: 'Can you handle confidential hiring?',
    a: 'Yes. We can run the search without naming your company until the candidate is ready to interview.',
  },
]
