import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Clapperboard,
  ClipboardCheck,
  Code2,
  Database,
  FileCode2,
  Film,
  Github,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Phone,
  Megaphone,
  NotebookTabs,
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
  initials: '',
  role: 'Software Engineer',
  email: 'fmd35585@gmail.com',
  phone: '+91 84093 35800',
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
  { label: 'Phone', href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'LeetCode', href: profile.leetcode, icon: TerminalSquare },
  { label: 'GFG', href: profile.gfg, icon: Languages },
];

export const heroBadges = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'REST APIs',
  'JWT/Auth',
  'CI/CD',
  'Basic Docker',
];

export const focusAreas = [
  {
    icon: TerminalSquare,
    title: 'Software Engineering',
    copy: 'System design, reliable architectures, maintainable codebases, and pragmatic engineering practices for production services.',
  },
  {
    icon: Layers3,
    title: 'Full Stack Development',
    copy: 'End-to-end React and MERN applications with polished UI, reliable APIs, authentication, dashboards, and product-ready user flows.',
  },
  {
    icon: ServerCog,
    title: 'Backend Engineering',
    copy: 'Node.js and Express systems with REST APIs, JWT auth, RBAC, MongoDB models, error handling, and maintainable service boundaries.',
  },
  {
    icon: BrainCircuit,
    title: 'Applied GenAI',
    copy: 'Practical AI features using OpenAI/Groq, RAG pipelines, structured prompts, and validation for reliable outputs.',
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
  'CI/CD',
  'GitHub Actions',
  'Docker Basics',
  'OCR',
  'RAG Concepts',
  'LLM Applications',
];

export const skillGroups = [
  {
    title: 'Languages',
    icon: TerminalSquare,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL'],
    accent: 'from-amber-300 to-orange-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'REST API design',
      'Middleware & error handling',
      'Microservices & distributed systems',
      'Rate limiting & throttling',
      'JWT & RBAC',
      'Schema design & query optimization',
    ],
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Frontend',
    icon: FileCode2,
    skills: ['JavaScript (ES6+)', 'React', 'Next.js', 'HTML & CSS', 'Responsive UI', 'Accessibility'],
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB (indexes & projections)', 'PostgreSQL', 'Redis (caching & sessions)', 'Supabase', 'Design for scale'],
    accent: 'from-sky-400 to-blue-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: BriefcaseBusiness,
    skills: ['Docker', 'GitHub Actions CI/CD', 'AWS EC2', 'Containerized deployments', 'Monitoring & observability'],
    accent: 'from-rose-300 to-pink-500',
  },
  {
    title: 'Testing & Quality',
    icon: ClipboardCheck,
    skills: ['Jest', 'Unit & integration tests', 'Test coverage', 'E2E basics', 'Contracts & schema validation'],
    accent: 'from-amber-200 to-amber-400',
  },
  {
    title: 'AI / GenAI',
    icon: Sparkles,
    skills: ['OpenAI API', 'RAG pipelines', 'Prompt engineering', 'Groq API', 'LLM orchestration (safe parsing)'],
    accent: 'from-fuchsia-400 to-violet-500',
  },
];

const createCaseStudy = ({
  pitch,
  problem,
  limitations,
  solution,
  innovations,
  features,
  architecture,
  challenges,
  impact,
  recruiter,
  roadmap,
  techStack,
  resume,
  readme,
  portfolio,
  assumption,
}) => ({
  pitch,
  problem,
  limitations,
  solution,
  innovations,
  features,
  architecture,
  challenges,
  impact,
  recruiter,
  roadmap,
  techStack,
  resume,
  readme,
  portfolio,
  assumption,
});

export const projects = [
  {
    title: 'RoleMatch AI',
    subtitle: 'AI Resume and JD Matching Platform',
    description:
      'A resume optimization product that helps candidates understand how well their resume matches a job description and what to improve before applying.',
    github: 'https://github.com/Meer-Mohammad-Faisal/HireLens-AI-Resume-JD-Analyzer',
    demo: 'https://hire-lens-ai-resume-jd-analyzer.vercel.app/',
    icon: ScanText,
    metric: 'ATS + LLM',
    featured: true,
    features: ['Resume parsing with job-context analysis', 'ATS-style compatibility scoring', 'Actionable AI improvement suggestions', 'Job match and dashboard workflow'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    metrics: [
      { value: '500+', label: 'resumes generated' },
      { value: '150+', label: 'active users' },
      { value: '85%', label: 'session retention' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'RoleMatch AI helps job seekers turn a generic resume into a role-specific application asset. It compares resume content against job descriptions, identifies gaps, and converts feedback into clear next actions.',
      problem: [
        'Freshers and job seekers often apply with resumes that do not match role-specific keywords, skills, or project evidence.',
        'Recruiters and ATS systems filter quickly, so weak alignment can hide otherwise strong candidates.',
        'Without feedback, candidates repeat the same application mistakes across dozens of roles.',
      ],
      limitations: [
        'Manual resume reviews are slow and inconsistent.',
        'Generic resume templates improve formatting but do not explain role fit.',
        'Keyword tools often miss context, project evidence, and practical improvement advice.',
      ],
      solution: [
        'The user provides a resume and job description.',
        'The system parses resume content, extracts job requirements, and compares the two signals.',
        'The product returns ATS-style scoring, missing skills, and suggested resume improvements.',
      ],
      innovations: [
        'Treats resume improvement as a job-fit workflow, not just text generation.',
        'Combines score visibility with actionable suggestions so users know what to change.',
        'Designed around candidate decision-making: apply, improve, or tailor for another role.',
      ],
      features: [
        'Resume parsing extracts structured candidate signals so the analysis is not dependent on manual copy-paste.',
        'ATS score analysis gives users a quick compatibility benchmark before applying.',
        'AI suggestions translate gaps into concrete resume edits, missing skills, and project positioning ideas.',
        'Dashboard analytics help users compare application readiness across target jobs.',
      ],
      architecture: [
        'Frontend: React UI for upload, job description entry, results, and dashboard flow.',
        'Backend: Node.js and Express APIs orchestrate parsing, analysis, scoring, and response formatting.',
        'Database: MongoDB stores user/application analysis records when persistence is enabled.',
        'Authentication: JWT-style account flow protects user dashboards.',
        'AI Services: OpenAI API powers contextual resume-to-JD reasoning.',
        'Deployment: Vercel-hosted frontend with backend-ready API architecture.',
        'Data flow: resume + JD -> parser -> backend scoring service -> OpenAI analysis -> structured result -> dashboard.',
      ],
      challenges: [
        'Reduced vague AI feedback by asking for structured, role-specific recommendations.',
        'Separated candidate input, scoring, and suggestion output so the workflow stays maintainable.',
        'Handled sensitive career data with a product flow that avoids unnecessary clutter.',
      ],
      impact: [
        'Helps candidates quickly identify missing skills, weak keywords, and unclear project evidence.',
        'Can reduce wasted applications by showing role fit before submission.',
        'Makes resume iteration faster for fresh graduates applying to many roles.',
      ],
      recruiter: [
        'Shows full stack product thinking around a real hiring workflow.',
        'Demonstrates API design, authentication, AI integration, parsing, and dashboard UX.',
        'Highlights ability to convert an ambiguous AI idea into a usable career product.',
      ],
      roadmap: ['Resume version history', 'Job board import', 'LinkedIn profile comparison', 'Cover letter assistant', 'Exportable improvement checklist'],
      techStack: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Node.js', 'Express'],
        Database: ['MongoDB'],
        Authentication: ['JWT'],
        AI: ['OpenAI API'],
        Deployment: ['Vercel'],
      },
      resume: [
        'Built an AI resume-to-job-description analyzer that scores ATS compatibility and generates role-specific improvement recommendations.',
        'Designed a full stack workflow for resume parsing, job requirement extraction, AI analysis, authentication, and dashboard-based review.',
        'Improved candidate decision-making by turning generic resume feedback into structured missing-skill and project-positioning insights.',
      ],
      readme:
        'RoleMatch AI is an AI-powered resume and job-description matching platform that helps candidates understand role fit, identify gaps, and improve application quality before submitting.',
      portfolio:
        'RoleMatch AI is a recruiter-focused resume optimization platform for candidates who want role-specific feedback before applying. The product analyzes resumes against job descriptions, estimates ATS compatibility, highlights missing skills, and generates practical suggestions for improving alignment. I built it as a full stack product with a polished analysis flow, backend orchestration, authentication-ready architecture, and OpenAI-powered reasoning.',
    }),
  },
  {
    title: 'FaisCode',
    subtitle: 'AI Coding Interview Preparation Platform',
    description:
      'A LeetCode-inspired coding practice platform with AI assistance for explanations, code review, and interview preparation.',
    github: 'https://github.com/Meer-Mohammad-Faisal/FaisCode_Coding_Platform',
    demo: 'https://github.com/Meer-Mohammad-Faisal/FaisCode_Coding_Platform',
    icon: Code2,
    metric: 'Interview AI',
    featured: true,
    features: ['Problem practice workflow', 'AI explanations and hints', 'Code analysis for learning', 'Authentication and interview dashboard'],
    tech: ['MERN Stack', 'OpenAI API', 'JWT'],
    metrics: [
      { value: '200+', label: 'users' },
      { value: '1,200+', label: 'code solutions' },
      { value: '75%', label: '30-day retention' },
    ],
    caseStudy: createCaseStudy({
      pitch:
        'FaisCode helps learners practice coding interviews with a structured problem platform and AI-assisted explanations. It focuses on learning why a solution works instead of only checking whether code passes.',
      problem: [
        'Students often get stuck on coding problems without knowing the right hint level.',
        'Existing platforms can feel pass/fail oriented, especially for freshers still building fundamentals.',
        'Interview preparation needs explanation, repetition, tracking, and feedback in one place.',
      ],
      limitations: [
        'Video tutorials are passive and do not adapt to the learner problem by problem.',
        'Generic AI chats are not connected to a coding practice workflow.',
        'Many clones focus on UI only and skip authentication, progress, and backend design.',
      ],
      solution: [
        'Users browse coding problems and work through interview-style challenges.',
        'AI assistance explains approaches, complexity, and common mistakes.',
        'The platform supports authentication and a judge-style learning workflow.',
      ],
      innovations: [
        'Positions AI as a guided learning layer around coding practice instead of a shortcut.',
        'Combines problem solving, explanation, code analysis, and progress tracking in one product direction.',
        'Designed for freshers who need both DSA repetition and conceptual clarity.',
      ],
      features: [
        'Coding problems create a familiar interview-preparation workflow.',
        'AI explanations break down approaches and help users learn patterns faster.',
        'Code analysis supports review of submitted logic, edge cases, and improvement ideas.',
        'Authentication enables a persistent preparation experience.',
      ],
      architecture: [
        'Frontend: React interface for problem browsing, editor flow, explanations, and progress screens.',
        'Backend: Node.js and Express APIs manage problems, submissions, users, and AI requests.',
        'Database: MongoDB stores users, problems, and practice records.',
        'Authentication: JWT-based login protects user progress.',
        'AI Services: OpenAI API provides explanations and code-review style feedback.',
        'Deployment: repository is ready for deployment; live demo currently redirects to GitHub.',
        'Data flow: selected problem -> user solution -> backend validation/AI prompt -> explanation/code insight -> learning dashboard.',
      ],
      challenges: [
        'Structured AI feedback to avoid vague answers and keep the learning focus on algorithms.',
        'Balanced platform scope between coding workflow, authentication, and AI features.',
        'Separated problem data, user state, and AI assistance for cleaner maintenance.',
      ],
      impact: [
        'Helps freshers understand coding patterns instead of memorizing answers.',
        'Improves self-study by giving explanations when a mentor is not available.',
        'Creates a foundation for interview analytics and personalized practice paths.',
      ],
      recruiter: [
        'Demonstrates MERN stack development, authentication, API design, and AI-assisted learning workflows.',
        'Shows DSA understanding translated into a product experience.',
        'Highlights product empathy for a clear user group: interview-preparing students.',
      ],
      roadmap: ['Online judge integration', 'Difficulty-based streaks', 'Company-wise problem lists', 'Discussion threads', 'AI-generated revision plans'],
      techStack: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Node.js', 'Express'],
        Database: ['MongoDB'],
        Authentication: ['JWT'],
        AI: ['OpenAI API'],
        Deployment: ['GitHub repository available', 'Live deployment pending'],
      },
      resume: [
        'Built an AI-assisted coding preparation platform with problem workflows, explanations, code analysis, and authentication.',
        'Integrated OpenAI-powered learning support to explain approaches, edge cases, and interview reasoning.',
        'Designed a MERN architecture for users, problems, submissions, and AI feedback workflows.',
      ],
      readme:
        'FaisCode is a MERN-based coding interview preparation platform that combines problem solving with AI explanations and code analysis for guided learning.',
      portfolio:
        'FaisCode is an interview preparation platform for students who want more than a list of coding problems. It combines a LeetCode-style practice flow with AI explanations, code analysis, authentication, and a roadmap toward progress tracking. The product demonstrates MERN architecture, backend API design, auth workflows, and practical AI integration around DSA learning.',
    }),
  },
  {
    title: 'FaisGPT Pro',
    subtitle: 'Conversational AI Assistant',
    description:
      'A ChatGPT-style AI assistant built as a polished conversational product for prompt experimentation, productivity, and AI-first UX practice.',
    github: 'https://github.com/Meer-Mohammad-Faisal/Fais_GPT_Pro',
    demo: 'https://fais-gpt-pro-chi.vercel.app/',
    icon: Bot,
    metric: 'AI Chat',
    featured: true,
    features: ['Conversational assistant UI', 'Prompt-driven responses', 'Reusable chat experience', 'Responsive AI product interface'],
    tech: ['React', 'OpenAI API', 'JavaScript', 'Vercel'],
    caseStudy: createCaseStudy({
      pitch:
        'FaisGPT Pro is a conversational AI assistant built to explore how users interact with LLMs in a focused product interface. It turns prompt-response experimentation into a clean, accessible chat experience.',
      problem: [
        'Users need fast AI assistance, but generic demos often lack product polish and responsive UX.',
        'Developers need practical experience handling prompts, loading states, and chat interaction patterns.',
        'Poor AI interfaces make even strong models feel confusing or unreliable.',
      ],
      limitations: [
        'Raw API playgrounds are useful for developers but not ideal for normal users.',
        'Static prompt demos do not teach real interaction design.',
        'Many AI clones focus only on the API call and ignore UX states.',
      ],
      solution: [
        'Provide a clean chat UI for prompt input and AI responses.',
        'Manage conversational states such as loading, errors, and response rendering.',
        'Keep the experience simple enough for quick testing and portfolio demonstration.',
      ],
      innovations: [
        'Focuses on usable AI product interaction instead of only API integration.',
        'Serves as a foundation for future domain-specific assistants.',
        'Demonstrates how frontend polish affects trust in AI responses.',
      ],
      features: [
        'Conversational UI gives users a familiar way to ask questions and receive AI responses.',
        'Prompt-driven response handling supports experimentation with different tasks.',
        'Responsive layout keeps the assistant usable across devices.',
        'Deployment-ready structure makes the AI product easy to share.',
      ],
      architecture: [
        'Frontend: React interface for chat input, response display, and interaction states.',
        'Backend/API layer: AI request handling can be configured around the selected provider.',
        'AI Services: OpenAI-compatible prompt-response workflow.',
        'Storage: lightweight session-style interaction; long-term memory is a future roadmap item.',
        'Deployment: Vercel live deployment.',
        'Data flow: prompt -> AI request layer -> model response -> rendered chat output.',
      ],
      challenges: [
        'Created a smooth response flow with clear user feedback while requests are in progress.',
        'Kept the UI focused so the AI interaction does not feel cluttered.',
        'Prepared the project for future domain-specific assistant features.',
      ],
      impact: [
        'Shows practical ability to build AI-first user interfaces.',
        'Provides a live demonstration of prompt-response product thinking.',
        'Creates a reusable foundation for more specialized GenAI workflows.',
      ],
      recruiter: [
        'Demonstrates frontend execution, AI API integration, loading states, and conversational UX.',
        'Shows ability to ship a live AI application.',
        'Complements deeper full stack projects by proving AI product interface skills.',
      ],
      roadmap: ['Conversation history', 'Model selection', 'Prompt templates', 'File-aware chat', 'User accounts'],
      techStack: {
        Frontend: ['React', 'CSS'],
        AI: ['OpenAI-compatible API workflow'],
        Deployment: ['Vercel'],
        Tooling: ['Git', 'GitHub'],
      },
      resume: [
        'Built and deployed a conversational AI assistant with prompt input, response rendering, and responsive chat UX.',
        'Implemented AI-first interaction states for loading, output display, and user-friendly prompt workflows.',
        'Created a reusable foundation for future domain-specific AI assistant features.',
      ],
      readme:
        'FaisGPT Pro is a deployed conversational AI assistant focused on clean chat UX, prompt experimentation, and practical AI product interaction.',
      portfolio:
        'FaisGPT Pro is a polished conversational AI assistant that demonstrates practical GenAI product skills. The project focuses on building a clean chat experience around prompt input, response rendering, responsive layout, and deployment-ready AI interaction patterns. It is intentionally lightweight, making it a strong complement to larger backend-heavy projects.',
    }),
  },
  {
    title: 'Ad Aligned',
    subtitle: 'Multi-Agent AI Landing Page Personalization Engine',
    description:
      'A full stack AI CRO tool that analyzes ad creatives and personalizes existing landing pages while preserving the original page structure.',
    github: 'https://github.com/Meer-Mohammad-Faisal/AdAlign-AI',
    demo: 'https://ad-align-ai.vercel.app/',
    icon: Megaphone,
    metric: '3-Agent CRO',
    featured: true,
    features: ['Ad creative analysis', 'DOM-level page enhancement', 'Validator agent with retry logic', 'Original vs enhanced comparison UI'],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'OpenAI GPT-4o', 'Cheerio'],
    caseStudy: createCaseStudy({
      pitch:
        'Ad Aligned improves message match between paid ads and landing pages. Instead of generating a new page, it enhances the existing page with CRO-driven copy and visual alignment while preserving structure.',
      problem: [
        'Paid ads often promise one message while the landing page communicates something broader or different.',
        'Marketing teams lose conversions when visitors do not immediately see continuity after clicking an ad.',
        'Full AI page generation can break brand consistency, layout, and trust.',
      ],
      limitations: [
        'Manual landing page personalization is slow and expensive.',
        'A/B tools often require marketing and engineering coordination before useful variants exist.',
        'AI page generators can hallucinate claims or rebuild layouts in unsafe ways.',
      ],
      solution: [
        'The user uploads an ad creative or provides an image URL and enters a landing page URL.',
        'The analyzer extracts ad messaging, tone, audience, value proposition, CTA, pain points, and colors.',
        'The enhancer updates the existing landing page at the DOM level.',
        'The validator scores consistency, quality, CRO strength, and hallucination risk before output.',
      ],
      innovations: [
        'Enhances the same landing page instead of generating a replacement page.',
        'Uses a 3-agent Analyzer, Enhancer, Validator workflow with structured JSON handoff.',
        'Adds validation guardrails and retry loops to reduce hallucinations and unsafe changes.',
        'Shows reasoning, scores, HTML changes, and side-by-side previews so the workflow is inspectable.',
      ],
      features: [
        'Ad analysis extracts audience, CTA, pain points, benefits, tone, and color palette from creative input.',
        'DOM-level enhancement updates hero copy, CTA text, benefits, proof blocks, and scoped visual accents without changing the original structure.',
        'Validation detects unsupported claims, hallucinated numbers, weak CTA alignment, and broken enhancement markers.',
        'Comparison UI lets users inspect original and enhanced pages side by side before trusting the output.',
      ],
      architecture: [
        'Frontend: React, TypeScript, Tailwind, Vite dashboard with ad input, agent progress, analysis panels, scores, reasoning, and iframe comparison.',
        'Backend: Node.js and Express expose health, analyze, enhance, validate, run-all, and proxy endpoints.',
        'Scraping: Cheerio and browser-style retry logic fetch and parse landing pages.',
        'AI Services: OpenAI GPT-4o handles image/text analysis and structured agent outputs.',
        'Validation: validator agent scores consistency, CRO quality, and hallucination safety; low quality can trigger retry-based re-enhancement.',
        'Deployment: Vercel frontend with backend deployable to Railway or Render.',
        'Data flow: ad creative + landing URL -> scraper + analyzer -> structured ad/page signals -> enhancer -> validator -> comparison dashboard.',
      ],
      challenges: [
        'Reduced random AI behavior using structured JSON outputs between agents.',
        'Avoided broken pages by applying constrained DOM transformations instead of full regeneration.',
        'Added fallback-to-original behavior when validation detects unsafe or low-quality enhancement.',
        'Handled inaccessible pages with scraping retries, asset proxying, and graceful failures.',
      ],
      impact: [
        'Helps marketers improve ad-to-page message continuity before launching campaigns.',
        'Reduces manual CRO iteration by producing a reviewable enhanced variant quickly.',
        'Makes AI output safer through validation, reasoning visibility, and quality scoring.',
      ],
      recruiter: [
        'Shows full stack engineering, AI workflow orchestration, web scraping, DOM manipulation, validation pipelines, and product thinking.',
        'Demonstrates ability to build reliable AI systems with guardrails, not just prompt wrappers.',
        'Combines business value, frontend UX, backend APIs, and LLM architecture in one project.',
      ],
      roadmap: ['Persistent experiments', 'A/B test export', 'Brand guideline ingestion', 'Puppeteer-based rendering checks', 'Team review and approval workflow'],
      techStack: {
        Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        Backend: ['Node.js', 'Express'],
        AI: ['OpenAI GPT-4o', 'Structured JSON workflows'],
        Scraping: ['Cheerio', 'Browser-style fallback scraping'],
        Validation: ['Multi-agent scoring', 'Retry logic', 'Hallucination checks'],
        Deployment: ['Vercel', 'Render/Railway-ready backend'],
      },
      resume: [
        'Built a full stack AI CRO tool that analyzes ad creatives and personalizes existing landing pages by aligning headlines, CTAs, value propositions, and visual styling.',
        'Engineered a 3-agent OpenAI GPT-4o workflow with structured JSON handoff, DOM-level enhancement, validation scoring, retry loops, and hallucination guardrails.',
        'Developed a React TypeScript dashboard with agent progress tracking, reasoning panels, score dashboards, HTML diff visibility, and side-by-side previews.',
      ],
      readme:
        'Ad Aligned is an AI-powered CRO workflow that analyzes ad creatives, scrapes existing landing pages, applies message-matched enhancements, and validates output with a multi-agent pipeline.',
      portfolio:
        'Ad Aligned is a multi-agent AI landing page personalization engine that improves message match between paid ads and landing pages. Users provide an ad creative and landing page URL, then the system analyzes ad signals, enhances the existing page at the DOM level, validates the result, and shows original versus enhanced output. It demonstrates strong full stack, AI orchestration, scraping, validation, and product-design skills.',
    }),
  },
  {
    title: 'BiztelAI Workflow',
    subtitle: 'Manufacturing Document Digitization Prototype',
    description:
      'An OCR-based workflow automation prototype that converts shop-floor documents into structured, validated operational records.',
    github: 'https://github.com/Meer-Mohammad-Faisal/BiztelAI-Workflow',
    demo: 'https://biztel-ai-workflow.vercel.app/',
    icon: ClipboardCheck,
    metric: 'OCR Ops',
    featured: true,
    features: ['Image/PDF upload and preview', 'OCR-assisted extraction', 'Editable validation workflow', 'Search, history, and analytics dashboard'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Tesseract.js', 'Node.js', 'Vercel'],
    caseStudy: createCaseStudy({
      pitch:
        'BiztelAI Workflow digitizes handwritten and semi-structured manufacturing documents into reviewable operational records. It focuses on the entire supervisor workflow: upload, extract, validate, edit, save, search, and analyze.',
      problem: [
        'Manufacturing teams often depend on paper production sheets that are hard to track, validate, and analyze.',
        'Supervisors need reliable records for shifts, machines, work orders, quantities, and exceptions.',
        'Manual transcription creates delays, missing data, duplicate work orders, and reporting errors.',
      ],
      limitations: [
        'Spreadsheets require manual entry and do not catch operational rule violations automatically.',
        'Raw OCR tools produce text but do not create validated business records.',
        'Heavy enterprise systems can be too slow for assignment/demo workflows.',
      ],
      solution: [
        'Users upload image or PDF production documents and preview the file.',
        'The app runs OCR-assisted extraction with fallback parsing into structured fields.',
        'Each field receives confidence indicators and can be edited by the reviewer.',
        'Validation rules flag operational issues before saving into searchable history and dashboards.',
      ],
      innovations: [
        'Treats OCR as one step inside a real review workflow, not the final product.',
        'Adds confidence scoring and editable fields so humans stay in control of uncertain values.',
        'Uses browser localStorage for a deployable prototype while documenting how production storage would evolve.',
      ],
      features: [
        'Upload preview lets users verify the correct production document before extraction.',
        'OCR-assisted extraction converts messy document text into operational fields such as date, shift, machine, work order, quantities, time, and supervisor.',
        'Validation rules catch missing fields, invalid shifts, future dates, quantity mismatch, suspicious quantities, duplicate work orders, and format issues.',
        'Operations dashboard summarizes uploads, reviewed records, validation failures, total quantity, average confidence, shift summaries, machine summaries, and exception trends.',
      ],
      architecture: [
        'Frontend: HTML, CSS, and JavaScript build the intake, review, history, and dashboard screens.',
        'OCR: Tesseract.js runs browser-based text extraction with fallback extraction logic.',
        'Storage: localStorage persists upload history and reviewed records for fast prototype deployment.',
        'Server: Node.js static server supports deployment packaging.',
        'Deployment: Vercel-ready static deployment.',
        'Data flow: document upload -> preview -> OCR/fallback extraction -> structured fields -> confidence scoring -> validation -> editable review -> saved record -> history/dashboard.',
      ],
      challenges: [
        'Handled imperfect OCR by adding fallback extraction and human review instead of pretending the model is always correct.',
        'Designed validation rules around real manufacturing constraints such as shift values, machine formats, work order uniqueness, and quantity consistency.',
        'Kept the prototype deployable without backend complexity while documenting a production path.',
      ],
      impact: [
        'Reduces manual transcription friction for plant supervisors and operations teams.',
        'Turns paper-based production data into searchable, analyzable records.',
        'Improves trust through confidence scores, validation warnings, and editable review.',
      ],
      recruiter: [
        'Demonstrates product thinking beyond OCR by solving the full operational workflow.',
        'Shows validation design, frontend state management, data modeling, dashboard thinking, and deployment readiness.',
        'Highlights ability to scope a practical prototype without overengineering.',
      ],
      roadmap: ['Backend OCR queue', 'Postgres records', 'S3/object storage', 'Role-based access', 'Audit logs', 'ERP export integration', 'LLM-assisted extraction'],
      techStack: {
        Frontend: ['HTML', 'CSS', 'JavaScript'],
        OCR: ['Tesseract.js'],
        Storage: ['Browser localStorage'],
        Server: ['Node.js static server'],
        Deployment: ['Vercel'],
        Documentation: ['README', 'AI workflow notes'],
      },
      resume: [
        'Built an OCR-based manufacturing document digitization prototype with upload preview, structured extraction, confidence scoring, validation rules, editable review, searchable history, and analytics dashboard.',
        'Implemented business-rule validation for mandatory fields, shift values, machine/work-order formats, suspicious quantities, future dates, quantity mismatch, and duplicate work orders.',
        'Designed a Vercel-ready static prototype using Tesseract.js and localStorage to demonstrate the full operations workflow without backend complexity.',
      ],
      readme:
        'BiztelAI Workflow is an OCR-assisted manufacturing document review desk that converts uploaded production sheets into validated, editable, searchable operational records with supervisor analytics.',
      portfolio:
        'BiztelAI Workflow is a practical document automation prototype for manufacturing operations. It accepts image and PDF production sheets, extracts structured fields with OCR, highlights uncertain values, validates operational rules, and stores reviewed records in searchable history. The dashboard gives supervisors lightweight visibility into uploads, validation failures, quantities, shifts, machines, and exceptions.',
    }),
  },
  {
    title: 'CinePass',
    subtitle: 'Movie Ticket Reservation System',
    description:
      'A mobile-first movie booking app with JWT auth, seat selection, payment simulation, QR tickets, booking history, and cancellation.',
    github: 'https://github.com/Meer-Mohammad-Faisal/Creative-Upaay',
    demo: 'https://creative-upaay-jaj6.vercel.app/',
    icon: Film,
    metric: 'Booking UX',
    featured: false,
    features: ['Movie discovery and scheduling', '12 x 12 seat map with conflict checks', 'JWT auth and booking history', 'QR tickets and cancellation'],
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'JWT', 'MongoDB/Mongoose'],
    caseStudy: createCaseStudy({
      pitch:
        'CinePass is a mobile-first movie ticket reservation product that recreates a complete discovery-to-ticket workflow. It is built around the operational details that make booking systems hard: seat state, authentication, payment outcomes, history, and cancellation.',
      problem: [
        'Movie booking apps need to keep seat availability consistent while users move through multiple screens.',
        'Users expect booking state to survive refreshes and payment failures without losing context.',
        'A weak booking flow can double-book seats, confuse users, or create unreliable tickets.',
      ],
      limitations: [
        'Static UI assignments often skip real reservation logic.',
        'Client-only booking demos cannot safely confirm seats.',
        'Payment and cancellation edge cases are often ignored in small projects.',
      ],
      solution: [
        'Users browse movies, choose schedule, select seats, authenticate, simulate payment, and receive a QR ticket.',
        'The server performs final seat conflict checks before confirming a booking.',
        'Booking history and cancellation release seats back into availability.',
      ],
      innovations: [
        'Implements a complete booking lifecycle instead of only screens.',
        'Supports MongoDB when configured and a durable local JSON fallback for evaluator-friendly demos.',
        'Serializes local reservations and rechecks master seat state before confirmation.',
      ],
      features: [
        'Movie discovery and schedule screens guide users from browsing to showtime selection.',
        'Programmatic 12 x 12 seat matrix displays available, occupied, and selected states with a six-seat limit.',
        'JWT authentication protects checkout and booking history.',
        'QR tickets, transaction dates, cancellation, and declined-payment simulation make the workflow feel production-like.',
      ],
      architecture: [
        'Frontend: Vite React app with Redux Toolkit, React Router, localStorage persistence, and QR code rendering.',
        'Backend: Express REST API for catalog, schedules, seats, auth, bookings, and cancellation.',
        'Database: MongoDB with Mongoose when configured, otherwise local serialized file store.',
        'Authentication: JWT with demo login and registration flow.',
        'Payment: simulated success and declined paths with rollback behavior.',
        'Deployment: Vercel frontend with API deployable to Render/Railway.',
        'Data flow: movie selection -> schedule -> seat state request -> selected seats -> auth -> payment simulation -> server conflict check -> booking/ticket.',
      ],
      challenges: [
        'Prevented seat conflicts by rechecking occupied seats on the server before confirmation.',
        'Handled persistence across refreshes with Redux store subscription and localStorage.',
        'Added cancellation behavior that releases seats instead of leaving stale reservations.',
      ],
      impact: [
        'Demonstrates a realistic booking workflow from discovery to ticket management.',
        'Shows how client UX and backend consistency must work together in transactional products.',
        'Provides a strong full stack example beyond CRUD screens.',
      ],
      recruiter: [
        'Shows full stack architecture, state management, JWT auth, REST API design, persistence strategy, and transaction-style seat conflict handling.',
        'Demonstrates ability to turn Figma-style screens into a working product flow.',
        'Highlights practical error handling and fallback design.',
      ],
      roadmap: ['Real payment gateway', 'Admin catalog management', 'Email ticket delivery', 'Seat hold expiration', 'Production user persistence'],
      techStack: {
        Frontend: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
        Backend: ['Node.js', 'Express'],
        Database: ['MongoDB/Mongoose', 'Local JSON fallback'],
        Authentication: ['JWT', 'bcryptjs'],
        Deployment: ['Vercel frontend', 'Render/Railway-ready API'],
      },
      resume: [
        'Built a mobile-first movie ticket booking system with discovery, schedules, seat selection, JWT auth, simulated payment, QR tickets, history, and cancellation.',
        'Implemented server-side seat conflict checks, MongoDB persistence with local fallback, and cancellation logic that releases reserved seats.',
        'Used React, Redux Toolkit, Express, JWT, and Mongoose to deliver a complete booking lifecycle rather than a static UI.',
      ],
      readme:
        'CinePass is a full stack movie reservation application that supports discovery, scheduling, seat selection, authentication, payment simulation, QR tickets, and booking cancellation.',
      portfolio:
        'CinePass is a mobile-first reservation system that demonstrates real full stack booking complexity. The product covers movie discovery, showtime selection, seat maps, authentication, checkout, QR tickets, booking history, and cancellation. Its strongest engineering detail is server-side seat conflict checking with MongoDB support and local fallback persistence.',
    }),
  },
  {
    title: 'QuickNote Vault',
    subtitle: 'Local-First Notes and Snippet Manager',
    description:
      'A fast note and snippet workspace for saving reusable text, code snippets, ideas, expenses, and short lists without sign-up friction.',
    github: 'https://github.com/Meer-Mohammad-Faisal/Note_App',
    demo: 'https://note-app-topaz-nu.vercel.app/',
    icon: NotebookTabs,
    metric: 'Local First',
    featured: false,
    features: ['Create and update notes', 'Search saved snippets', 'Copy-to-clipboard actions', 'LocalStorage persistence'],
    tech: ['React', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'LocalStorage'],
    caseStudy: createCaseStudy({
      pitch:
        'QuickNote Vault is a local-first workspace for saving quick notes, code snippets, reusable text, and small daily lists. It prioritizes speed and zero-login access for users who need to capture information immediately.',
      problem: [
        'People often lose short notes, copied commands, code snippets, and temporary text across chats and documents.',
        'Heavy note tools create too much friction for quick capture.',
        'Developers and students need a simple searchable place for reusable text.',
      ],
      limitations: [
        'Messaging yourself is messy and not searchable as a personal knowledge base.',
        'Large note platforms can be overkill for temporary snippets.',
        'Plain text files lack browser accessibility and copy actions.',
      ],
      solution: [
        'Users create titled notes or snippets directly in the browser.',
        'Saved items persist locally and can be searched, viewed, edited, copied, or deleted.',
        'Toast feedback confirms actions without interrupting the workflow.',
      ],
      innovations: [
        'Optimized for instant capture rather than account-heavy note management.',
        'Uses localStorage to make the app deployable and usable without backend setup.',
        'Treats snippets, notes, and temporary text as one fast workflow.',
      ],
      features: [
        'Create/update note flow helps users quickly save reusable information.',
        'Search filters saved entries by title so old snippets can be recovered quickly.',
        'Copy-to-clipboard turns stored snippets into reusable productivity assets.',
        'Local persistence keeps the experience fast and private for lightweight use cases.',
      ],
      architecture: [
        'Frontend: React, React Router, Tailwind CSS, and responsive screens for create, list, and view flows.',
        'State: Redux Toolkit manages note actions such as add, update, delete, and reset.',
        'Storage: browser localStorage persists saved notes without a backend.',
        'Feedback: react-hot-toast communicates create, update, delete, and copy actions.',
        'Deployment: Vercel static deployment.',
        'Data flow: user creates note -> Redux reducer updates state -> localStorage sync -> list/search/view/copy actions.',
      ],
      challenges: [
        'Kept the workflow simple while still supporting create, edit, view, delete, search, and copy actions.',
        'Used Redux Toolkit for predictable state updates and localStorage persistence.',
        'Designed empty states and action feedback for a cleaner user experience.',
      ],
      impact: [
        'Helps users capture and reuse short information faster.',
        'Removes sign-up friction for quick note-taking and snippet storage.',
        'Demonstrates practical frontend state management in a small product.',
      ],
      recruiter: [
        'Shows React, routing, state management, local persistence, UI feedback, and product thinking for a focused utility.',
        'Demonstrates ability to ship small, polished tools with clear user value.',
        'Complements larger projects by showing clean frontend fundamentals.',
      ],
      roadmap: ['Tags and folders', 'Markdown preview', 'Cloud sync', 'Shareable snippets', 'Import/export'],
      techStack: {
        Frontend: ['React', 'Tailwind CSS', 'React Router'],
        State: ['Redux Toolkit'],
        Storage: ['Browser localStorage'],
        UX: ['react-hot-toast', 'Lucide icons'],
        Deployment: ['Vercel'],
      },
      resume: [
        'Built a local-first note and snippet manager with create, edit, view, search, copy, delete, and reset workflows.',
        'Implemented Redux Toolkit state management with localStorage persistence and toast-based action feedback.',
        'Deployed a responsive Vite React utility that supports quick notes, reusable snippets, and temporary text workflows.',
      ],
      readme:
        'QuickNote Vault is a fast local-first notes and snippets app for saving reusable text, code snippets, ideas, and small lists without sign-up friction.',
      portfolio:
        'QuickNote Vault is a lightweight productivity app designed for instant capture. It lets users save notes, code snippets, reusable text, expenses, and lists, then search, view, edit, copy, or delete them. The project demonstrates clean React routing, Redux Toolkit state management, localStorage persistence, and a polished small-tool UX.',
    }),
  },
  {
    title: 'GramSetu Village Ops',
    subtitle: 'Village Management System',
    description:
      'A public-sector style village management interface for organizing local information, services, and administrative workflows.',
    github: '',
    demo: 'https://golden-pasca-15bf5f.netlify.app/',
    icon: Building2,
    metric: 'GovTech UI',
    featured: false,
    features: ['Village information hub', 'Service-oriented UI', 'Responsive public-facing screens', 'Admin workflow direction'],
    tech: ['React', 'JavaScript', 'CSS', 'Netlify'],
    caseStudy: createCaseStudy({
      assumption:
        'Assumption: GitHub is currently empty/not available, so this summary is based on the live app link and the stated village management system direction.',
      pitch:
        'GramSetu Village Ops is a village management system concept for making local information and services easier to access. It is positioned as a simple civic-tech interface for residents and local administrators.',
      problem: [
        'Village-level information is often scattered across offline channels, notice boards, and manual records.',
        'Residents need easier access to services, announcements, and administrative information.',
        'Local administrators need a clearer digital interface for organizing basic workflows.',
      ],
      limitations: [
        'Manual registers are difficult to search and update.',
        'Messaging groups can spread information but are not structured systems of record.',
        'Large government platforms may not be tailored to small local workflows.',
      ],
      solution: [
        'Provide a responsive interface for village information and service discovery.',
        'Organize civic information into clear sections for residents and administrators.',
        'Create a foundation that can later support forms, records, and workflow tracking.',
      ],
      innovations: [
        'Focuses on accessibility and clarity for non-technical public users.',
        'Frames village management as a lightweight digital operations problem.',
        'Creates a scalable direction for adding real administrative modules later.',
      ],
      features: [
        'Information hub gives residents a central place to understand village resources and updates.',
        'Service-oriented navigation reduces confusion around local administrative tasks.',
        'Responsive screens make the system usable from mobile devices common in rural access contexts.',
        'Admin workflow direction leaves room for future record management and approval flows.',
      ],
      architecture: [
        'Frontend: React/JavaScript UI deployed as a static site.',
        'Backend: not publicly verified from the current GitHub state.',
        'Database: future production version could use PostgreSQL or MongoDB for resident/service records.',
        'Authentication: future admin roles could use JWT and RBAC.',
        'Deployment: Netlify live deployment.',
        'Data flow: public user navigates service/info sections; future admin flow would create/update structured records.',
      ],
      challenges: [
        'Designed a public-facing product direction with simple navigation and low friction.',
        'Scoped the project so it can be shown live while backend/admin modules remain a future path.',
        'Avoided overclaiming unavailable backend details until repository code is published.',
      ],
      impact: [
        'Can help residents find local information faster.',
        'Creates a foundation for digitizing small administrative workflows.',
        'Demonstrates civic product thinking and responsive UI design.',
      ],
      recruiter: [
        'Shows ability to build public-sector style interfaces with practical user needs.',
        'Demonstrates frontend delivery, responsive layout, and product scoping.',
        'Shows honesty about current implementation limits and future backend direction.',
      ],
      roadmap: ['Admin login', 'Resident records', 'Service request tracking', 'Document uploads', 'SMS/WhatsApp notifications', 'Analytics dashboard'],
      techStack: {
        Frontend: ['React', 'JavaScript', 'CSS'],
        Deployment: ['Netlify'],
        FutureBackend: ['Node.js/Express', 'JWT/RBAC', 'PostgreSQL or MongoDB'],
      },
      resume: [
        'Built a live village management system interface focused on public information access, local services, and responsive civic-tech UX.',
        'Designed the product direction for future admin workflows, resident records, service requests, and role-based access.',
        'Deployed the project on Netlify as a public-facing prototype for village operations digitization.',
      ],
      readme:
        'GramSetu Village Ops is a civic-tech village management prototype for organizing local information, services, and future administrative workflows in a responsive web interface.',
      portfolio:
        'GramSetu Village Ops is a village management system prototype focused on civic access and local operations. It presents a foundation for organizing village information, service flows, and future admin modules such as resident records, service requests, and role-based dashboards. The current live version is best presented as a public-facing prototype with backend expansion planned.',
    }),
  },
  {
    title: 'Wortly',
    subtitle: 'Short-Form German Learning Platform',
    description:
      'A Reels-style German learning app with auth, PostgreSQL, video feed, likes, bookmarks, comments, uploads, validation, and Docker Compose.',
    github: 'https://github.com/Meer-Mohammad-Faisal/skillCase_internship_assignment',
    demo: 'https://github.com/Meer-Mohammad-Faisal/skillCase_internship_assignment',
    icon: Languages,
    metric: 'EdTech Feed',
    featured: false,
    features: ['Vertical video learning feed', 'JWT auth and protected profile', 'Likes, bookmarks, comments', 'PostgreSQL schema and Docker Compose'],
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'PostgreSQL', 'Docker Compose'],
    caseStudy: createCaseStudy({
      pitch:
        'Wortly is a short-form German learning platform that turns language lessons into a vertical video feed. It combines social engagement patterns with structured backend rules for likes, bookmarks, comments, and protected user state.',
      problem: [
        'Language learners often struggle to stay engaged with traditional lesson formats.',
        'Short video habits are strong, but educational content needs account state, comments, bookmarks, and reliable streaming.',
        'Learning apps need backend consistency for engagement counts and duplicate actions.',
      ],
      limitations: [
        'Static video pages do not personalize liked or bookmarked content.',
        'Client-only demos cannot safely handle duplicate likes or user-specific engagement.',
        'Many education prototypes ignore backend validation, database schema, and streaming behavior.',
      ],
      solution: [
        'Learners register or sign in, then browse a full-height German lesson feed.',
        'Videos autoplay in view with scroll snapping for a Reels-style experience.',
        'Authenticated users can like, comment, and bookmark lessons with backend validation.',
        'The backend stores users, videos, comments, likes, and bookmarks in PostgreSQL.',
      ],
      innovations: [
        'Combines short-form social UX with a real service-layer backend.',
        'Uses transactional like updates to keep engagement counts accurate.',
        'Serves videos outside the frontend bundle with HTTP range support for better buffering and seeking.',
        'Includes Docker Compose for local PostgreSQL setup, showing basic container workflow.',
      ],
      features: [
        'Vertical video feed with scroll snapping makes language lessons feel modern and mobile-native.',
        'JWT registration and login protect personalized actions while keeping the feed viewable.',
        'Optimistic likes with rollback improve UX while preserving backend correctness.',
        'Comments and bookmarks create retention loops for learners who want to revisit lessons.',
      ],
      architecture: [
        'Frontend: React, Vite, Redux Toolkit, React Router, Axios, Framer Motion, and reusable feed components.',
        'Backend: Node.js and Express with routes, controllers, middleware, services, and centralized error handling.',
        'Database: PostgreSQL stores users, videos, likes, bookmarks, and comments with indexes and foreign keys.',
        'Authentication: JWT, bcrypt password hashing, protected profile endpoint, and optional auth for feed personalization.',
        'Storage: local MP4 uploads served by Express with HTTP range support.',
        'Validation: Zod validates auth, video metadata, UUID params, and comments.',
        'Deployment: frontend can deploy as Vite static build; backend should run on Render/Railway with PostgreSQL such as Neon/Supabase.',
        'Data flow: user auth -> feed request with optional JWT -> video metadata + liked/bookmarked state -> engagement API -> PostgreSQL transaction -> updated UI.',
      ],
      challenges: [
        'Implemented duplicate-like and duplicate-bookmark protection with composite keys.',
        'Kept like counts accurate through transactional insert/update behavior.',
        'Handled video streaming using Express static delivery with range requests.',
        'Added consistent validation and error response shapes for predictable frontend handling.',
      ],
      impact: [
        'Makes German lesson consumption feel closer to familiar short-video products.',
        'Lets learners save, discuss, and revisit lessons instead of passively watching.',
        'Demonstrates production-style backend structure in an education product.',
      ],
      recruiter: [
        'Shows full stack development, PostgreSQL schema design, authentication, API design, validation, service-layer architecture, Docker basics, and media delivery.',
        'Demonstrates engineering maturity through transactions, error handling, and clean project structure.',
        'Proves ability to build beyond CRUD with streaming and engagement logic.',
      ],
      roadmap: ['Live deployment', 'Lesson categories', 'Progress tracking', 'Admin uploader', 'Search and recommendations', 'Cloud video storage'],
      techStack: {
        Frontend: ['React', 'Vite', 'Redux Toolkit', 'React Router', 'Axios', 'Framer Motion'],
        Backend: ['Node.js', 'Express'],
        Database: ['PostgreSQL', 'pg'],
        Authentication: ['JWT', 'bcrypt'],
        Validation: ['Zod'],
        Storage: ['Multer', 'Local MP4 uploads', 'HTTP range support'],
        DevOps: ['Docker Compose for PostgreSQL'],
      },
      resume: [
        'Built a Reels-style German learning platform with JWT auth, PostgreSQL, video feed, likes, bookmarks, comments, and protected user state.',
        'Implemented service-layer engagement logic with duplicate protection, transactional like-count updates, validation, and centralized error handling.',
        'Added Express video delivery with HTTP range support and Docker Compose for local PostgreSQL development.',
      ],
      readme:
        'Wortly is a short-form German learning app with a vertical lesson feed, authentication, engagement features, PostgreSQL persistence, and Docker-based local development.',
      portfolio:
        'Wortly is a short-form German learning platform that brings Reels-style engagement to educational content. It includes a vertical video feed, JWT authentication, likes, bookmarks, comments, PostgreSQL persistence, validation, upload handling, and Docker Compose for local development. This project is strong because it demonstrates backend structure, transactions, media delivery, and full stack product thinking.',
    }),
  },
  {
    title: 'ShortLink',
    subtitle: 'URL shortener and analytics',
    description:
      'A lightweight URL shortener featuring QR code generation, real-time analytics, and async click processing for reliable tracking.',
    github: 'https://github.com/Meer-Mohammad-Faisal/shortlink',
    demo: '#',
    icon: Rocket,
    metric: 'URL Shortener',
    featured: false,
    features: ['QR code generation', 'Real-time analytics dashboard', 'Redis caching + BullMQ click processing', 'Short links with expiry and metadata preview'],
    tech: ['React', 'Node.js', 'Redis', 'BullMQ', 'Supabase'],
    metrics: [
      { value: '200+', label: 'shortened URLs' },
      { value: '89%', label: 'Jest test coverage' },
    ],
    caseStudy: createCaseStudy({
      pitch: 'ShortLink is a production-ready URL shortener with analytics and async processing to keep click ingestion reliable.',
      problem: ['Many shorteners lack reliable analytics and struggle with high click volumes.', 'Synchronous click processing can slow response times for redirects.'],
      limitations: ['Prototype-level demo; production would require higher availability and scaling strategies.'],
      solution: ['Use Redis for caching, BullMQ for async click aggregation, and Supabase for persistent storage with a lightweight frontend.'],
      innovations: ['Separation of redirect path from analytics ingestion to keep latency low.', 'Async click processing and real-time dashboard updates.'],
      features: ['Shorten links with QR export', 'Async click ingestion via BullMQ', 'Realtime analytics and dashboard snapshots'],
      architecture: ['Frontend: React', 'Backend: Node.js + Express redirect service', 'Queue: BullMQ + Redis', 'Analytics: Supabase/Postgres + Redis cache'],
      challenges: ['Keeping redirect latency low while ensuring click events are reliable and eventually-consistent.'],
      impact: ['200+ shortened URLs; reliable analytics for demo users.'],
      recruiter: ['Shows backend queueing, caching, test coverage, and analytics pipeline design.'],
      roadmap: ['Scaling, custom domains, rate limits, SSO for teams'],
      techStack: { Frontend: ['React'], Backend: ['Node.js', 'Express'], Database: ['Supabase/Postgres'], DevOps: ['Redis', 'BullMQ'] },
      resume: ['Built a URL shortener with QR support, async analytics ingestion via BullMQ, and Redis-backed caching.'],
      readme: 'ShortLink is a URL shortener with analytics, QR codes, and async click processing.',
      portfolio: 'ShortLink demonstrates queue-based analytics, Redis caching, and a fast redirect path with a dashboard for analytics.',
    }),
  },
];

export const journey = [
  {
    title: 'Dehix — Software Engineer Intern (Nov 2025 – Jan 2026)',
    detail:
      'Built 15+ production REST APIs in Node.js/Express; reduced average API latency ~30% (420ms → 290ms). Designed multi-role JWT + RBAC auth with access/refresh rotation, added Redis caching and BullMQ, cutting DB queries by ~35%. Re-engineered MongoDB schemas with compound indexes, cutting read latency ~25%. Containerized with Docker and automated deploys via GitHub Actions to AWS EC2.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Full Stack Development Journey',
    detail: 'Built multiple React and MERN applications with responsive interfaces, protected routes, dashboards, API integration, and deployment-ready frontend flows.',
    icon: Layers3,
  },
  {
    title: 'Backend Engineering',
    detail: 'Focused on authentication, role-based access, REST API design, MongoDB/PostgreSQL data modeling, validation, and scalable service patterns.',
    icon: ServerCog,
  },
  {
    title: 'Practical GenAI Engineering',
    detail: 'Created focused AI workflows with OpenAI APIs, OCR extraction, structured prompt outputs, validation loops, and useful automation features.',
    icon: BrainCircuit,
  },
  {
    title: 'DSA & Problem Solving',
    detail: 'Solved 450+ DSA problems across arrays, graphs, dynamic programming, trees, and core interview patterns.',
    icon: GraduationCap,
  },
  {
    title: 'Shipping and DevOps Basics',
    detail: 'Deployed projects on Vercel/Netlify, used Git/GitHub, and practiced CI/CD, GitHub Actions, and basic Docker workflows where useful.',
    icon: Rocket,
  },
];

export const resumeHighlights = [
  { label: 'Full Stack Engineer', icon: Layers3 },
  { label: 'Backend Development', icon: ServerCog },
  { label: 'Practical GenAI Features', icon: BrainCircuit },
  { label: 'MERN Stack', icon: ShieldCheck },
  { label: 'CI/CD and Docker Basics', icon: Workflow },
];
