import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  ScanText,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Meer Mohammad Faisal',
  initials: 'MF',
  role: 'Full Stack & GenAI Engineer',
  email: 'fmd35585@gmail.com',
  github: 'https://github.com/Meer-Mohammad-Faisal',
  linkedin: 'https://www.linkedin.com/in/meer-faisal/',
  resume: '/MEER_Resume.pdf',
  leetcode: 'https://leetcode.com/u/Meerfaisal/',
  gfg: 'https://www.geeksforgeeks.org/user/fmd350g0i',
};

export const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const heroBadges = [
  'Node.js',
  'Express',
  'MongoDB',
  'React',
  'OpenAI APIs',
  'RAG',
  'REST APIs',
  'RBAC',
];

export const focusAreas = [
  {
    icon: Layers3,
    title: 'Full Stack Development',
    copy: 'MERN applications with fast frontends, reliable APIs, authentication, dashboards, and clean product flows.',
  },
  {
    icon: ServerCog,
    title: 'Backend Engineering',
    copy: 'Scalable Node.js and Express systems with JWT auth, RBAC, REST APIs, MongoDB data models, and maintainable service boundaries.',
  },
  {
    icon: BrainCircuit,
    title: 'GenAI Product Engineering',
    copy: 'LLM applications using OpenAI APIs, RAG, vector databases, OCR pipelines, prompt workflows, and AI-assisted product logic.',
  },
  {
    icon: Code2,
    title: 'Problem Solving',
    copy: '450+ DSA problems solved with a focus on clean reasoning, data structures, algorithms, and interview-ready fundamentals.',
  },
];

export const aboutKeywords = [
  'MERN Stack',
  'Node.js',
  'Express',
  'MongoDB',
  'React',
  'Python',
  'OpenAI APIs',
  'JWT/Auth',
  'RBAC',
  'REST APIs',
  'Vector Databases',
  'AI Workflows',
  'OCR',
  'RAG',
  'LLM Applications',
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FileCode2,
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'RBAC'],
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'AI / GenAI',
    icon: Sparkles,
    skills: ['OpenAI API', 'LangChain', 'RAG', 'Vector Databases', 'Prompt Engineering', 'OCR Pipelines', 'AI Agents'],
    accent: 'from-fuchsia-400 to-violet-500',
  },
  {
    title: 'Programming',
    icon: TerminalSquare,
    skills: ['C++', 'Python', 'JavaScript', 'DSA', 'System Design Basics'],
    accent: 'from-amber-300 to-orange-500',
  },
  {
    title: 'Tools',
    icon: BriefcaseBusiness,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
    accent: 'from-rose-300 to-pink-500',
  },
];

export const projects = [
  {
    title: 'RoleMatch AI',
    description:
      'An AI-powered resume optimization platform that analyzes resumes against job descriptions using LLMs and ATS scoring techniques.',
    features: ['Resume parsing', 'ATS score analysis', 'AI suggestions', 'Job matching', 'Authentication', 'Dashboard analytics'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    github: profile.github,
    demo: '#contact',
    icon: ScanText,
    metric: 'ATS + LLM',
  },
  {
    title: 'FaisCode',
    description:
      'An AI-powered coding interview preparation platform inspired by LeetCode with integrated assistance for explanations and code review.',
    features: ['Coding problems', 'AI explanations', 'Code analysis', 'Interview preparation', 'Judge system', 'Authentication'],
    tech: ['MERN Stack', 'OpenAI API', 'JWT'],
    github: profile.github,
    demo: '#contact',
    icon: Code2,
    metric: 'Interview AI',
  },
  {
    title: 'AI Finance Platform',
    description:
      'A smart finance management platform using AI for insights, budgeting, OCR receipt scanning, and analytics.',
    features: ['OCR receipt scanning', 'Expense categorization', 'Budget tracking', 'AI insights', 'Goal management', 'Analytics dashboard'],
    tech: ['Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    github: profile.github,
    demo: '#contact',
    icon: Workflow,
    metric: 'OCR + Insights',
  },
];

export const journey = [
  {
    title: 'Full Stack Development Journey',
    detail: 'Built multiple MERN applications with responsive interfaces, protected routes, dashboards, and production-style API integration.',
    icon: Layers3,
  },
  {
    title: 'Backend Engineering',
    detail: 'Focused on authentication, role-based access, REST API design, MongoDB modeling, and scalable service patterns.',
    icon: ServerCog,
  },
  {
    title: 'GenAI Engineering',
    detail: 'Created AI-powered workflows with LLM calls, RAG concepts, OCR extraction, and prompt-driven product experiences.',
    icon: BrainCircuit,
  },
  {
    title: 'DSA & Problem Solving',
    detail: 'Solved 450+ DSA problems across arrays, graphs, dynamic programming, trees, and core interview patterns.',
    icon: GraduationCap,
  },
  {
    title: 'AI Product Building',
    detail: 'Combining backend systems with AI features to ship practical products that solve recruiter-visible, real-world problems.',
    icon: Rocket,
  },
];

export const resumeHighlights = [
  { label: 'Full Stack Engineer', icon: Layers3 },
  { label: 'Backend Development', icon: ServerCog },
  { label: 'GenAI Applications', icon: BrainCircuit },
  { label: 'MERN Stack', icon: ShieldCheck },
  { label: 'AI Product Development', icon: Sparkles },
];
