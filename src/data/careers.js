import { BookOpen, Rocket, UserCheck, Users } from 'lucide-react'

export const PERKS = [
  { icon: Rocket, title: 'Real work from day one', text: 'You work on live projects, not practice tasks.' },
  { icon: Users, title: 'Learn from mentors', text: 'Pair with experienced engineers who review your work and help you improve.' },
  { icon: UserCheck, title: 'Real ownership', text: 'In a small team, your ideas are heard and your work is visible.' },
  { icon: BookOpen, title: 'Grow with us', text: 'Pick up new skills across software, data, AI and cloud as the company grows.' },
]

export const HIRING_STEPS = [
  { title: 'Apply', text: 'Send your details and resume using the form below.' },
  { title: 'Profile review', text: 'We read every application and reply within a week.' },
  { title: 'Technical chat', text: 'A practical conversation or small task related to the role.' },
  { title: 'Offer', text: 'If it is a good fit on both sides, we share an offer and a start date.' },
]

/* Current openings — edit, add or remove roles as needed. */
export const JOBS = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Software Engineering',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '1–3 years',
    summary: 'Build web applications end to end, from the database to the user interface.',
    responsibilities: [
      'Build features across the frontend and backend',
      'Turn designs into responsive, accessible screens',
      'Write clean, tested and documented code',
      'Work directly with clients to understand requirements',
    ],
    requirements: [
      'Good knowledge of JavaScript, React and Node.js or Java',
      'Experience with SQL databases',
      'Comfortable with Git',
      'Clear communication in English',
    ],
  },
  {
    id: 'data-bi-analyst',
    title: 'Data & BI Analyst',
    department: 'Data & Analytics',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '1–3 years',
    summary: 'Turn raw business data into dashboards and reports that people rely on.',
    responsibilities: [
      'Build and maintain Power BI dashboards',
      'Write SQL to clean and model data',
      'Automate recurring reports',
      'Explain findings clearly to non-technical teams',
    ],
    requirements: [
      'Strong SQL and Excel skills',
      'Hands-on experience with Power BI or Tableau',
      'Basic Python is a plus',
      'An eye for detail and accuracy',
    ],
  },
  {
    id: 'software-engineer-intern',
    title: 'Software Engineer Intern',
    department: 'Software Engineering',
    location: 'Hyderabad',
    type: 'Internship',
    experience: 'Freshers',
    summary: 'Start your career on real projects, with a mentor guiding you.',
    responsibilities: [
      'Help build features on live projects',
      'Learn our tools and way of working',
      'Write and test code with guidance from a mentor',
      'Take part in daily stand-ups and code reviews',
    ],
    requirements: [
      'B.Tech, B.E., MCA or B.Sc. in Computer Science or related',
      'Good programming fundamentals',
      'Willingness to learn and ask questions',
      'College or personal projects are a plus',
    ],
  },
]
