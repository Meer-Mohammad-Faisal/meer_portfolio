import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { heroBadges, profile, socials } from '../data/portfolio';
import RotatingRole from './RotatingRole';

const stats = [
  ['450+', 'DSA problems'],
  ['9', 'Portfolio builds'],
  ['MERN', 'Primary stack'],
];

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen px-6 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-[rgba(161,161,170,0.9)]">Hello — I'm</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-3">
            <RotatingRole roles={["Software Engineer", "Full Stack Developer", "Backend Developer", "Frontend Developer", "GenAI Engineer"]} />
          </div>

          <p className="mt-4 text-2xl font-medium text-slate-200">
            Software Engineer building reliable full‑stack products.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-[rgba(161,161,170,0.95)]">
            Full Stack Engineer with production experience building REST APIs (Node.js/Express), React frontends, and MongoDB/PostgreSQL data layers. Strong in authentication (JWT, RBAC), schema design, query optimization, Docker, and GitHub Actions CI/CD. GenAI is an applied specialization.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-secondary">
              Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noreferrer'}
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:-translate-y-0.5 hover:border-white/15 hover:text-white"
              >
                <Icon size={14} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0B0B0B] p-6">
            <h4 className="text-sm font-semibold text-slate-300">Core expertise</h4>
            <h3 className="mt-2 text-xl font-semibold text-white">Backend & Full-stack systems</h3>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-400">
              <li>15+ production REST APIs (Node.js / Express) with modular middleware and structured logging</li>
              <li>Auth & Security: JWT (access/refresh rotation), RBAC, Redis caching and refresh-token flows</li>
              <li>Databases: MongoDB (indexes, projection) & PostgreSQL — schema design and query optimization</li>
              <li>Cloud & CI/CD: Docker, GitHub Actions, AWS EC2; containerized deployments</li>
              <li>Applied GenAI: RAG pipelines, OpenAI/Groq integrations (secondary specialization)</li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1 text-sm text-slate-300">15+ APIs</span>
              <span className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1 text-sm text-slate-300">420ms → 290ms</span>
              <span className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1 text-sm text-slate-300">Redis & BullMQ</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
