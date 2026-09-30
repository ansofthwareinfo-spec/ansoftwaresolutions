/**
 * Current openings with our client companies.
 * Replace these sample roles with your real requirements: add, edit or remove entries.
 * `company` describes the employer without naming it, unless the client agrees to be named.
 */
export const JOBS = [
  {
    id: 'java-developer',
    title: 'Java Developer',
    company: 'IT services company',
    location: 'Hyderabad',
    workMode: 'On-site',
    type: 'Full-time',
    experience: '2–5 years',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
    summary: 'Build and maintain backend services for enterprise applications.',
    responsibilities: [
      'Develop REST APIs and microservices with Spring Boot',
      'Write clean, tested and well-documented code',
      'Work with the frontend and QA teams on new features',
    ],
    requirements: [
      'Hands-on experience with Java 8+ and Spring Boot',
      'Good knowledge of SQL databases',
      'Familiarity with Git and Agile ways of working',
    ],
  },
  {
    id: 'react-developer',
    title: 'React.js Developer',
    company: 'Product company',
    location: 'Hyderabad',
    workMode: 'Hybrid',
    type: 'Full-time',
    experience: '1–4 years',
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    summary: 'Create fast, responsive user interfaces for a growing web product.',
    responsibilities: [
      'Build reusable React components from Figma designs',
      'Integrate REST APIs and manage application state',
      'Improve performance and accessibility',
    ],
    requirements: [
      'Strong JavaScript and React fundamentals',
      'Experience with TypeScript is a plus',
      'Good understanding of responsive design',
    ],
  },
  {
    id: 'power-bi-developer',
    title: 'Power BI Developer',
    company: 'Consulting firm',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Contract',
    experience: '2–4 years',
    skills: ['Power BI', 'DAX', 'SQL', 'Excel'],
    summary: 'Design dashboards and reports for finance and operations teams.',
    responsibilities: [
      'Build Power BI dashboards and data models',
      'Write DAX measures and SQL queries',
      'Work with business users to understand reporting needs',
    ],
    requirements: [
      'Hands-on Power BI and DAX experience',
      'Strong SQL skills',
      'Clear communication with non-technical users',
    ],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    company: 'SaaS company',
    location: 'Bangalore',
    workMode: 'Hybrid',
    type: 'Contract-to-hire',
    experience: '3–6 years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    summary: 'Automate infrastructure and deployments for a cloud-based product.',
    responsibilities: [
      'Maintain CI/CD pipelines and cloud infrastructure',
      'Manage containerised workloads on Kubernetes',
      'Set up monitoring, alerts and backups',
    ],
    requirements: [
      'Experience with AWS or Azure',
      'Hands-on Docker and Kubernetes',
      'Scripting with Bash or Python',
    ],
  },
  {
    id: 'graduate-trainee',
    title: 'Graduate Trainee – Software',
    company: 'IT services company',
    location: 'Hyderabad',
    workMode: 'On-site',
    type: 'Fresher',
    experience: '0–1 year',
    skills: ['Programming basics', 'SQL', 'Communication'],
    summary: 'Start your career with structured training and real project work.',
    responsibilities: [
      'Complete a training program on the company’s tech stack',
      'Support live projects under a mentor',
      'Learn coding standards, testing and teamwork',
    ],
    requirements: [
      'B.Tech, B.E., MCA or B.Sc. (Computer Science or related)',
      'Good programming fundamentals',
      'Eagerness to learn',
    ],
  },
]

export const JOB_TYPES = ['All', ...new Set(JOBS.map((job) => job.type))]
