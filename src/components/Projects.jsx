import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured projects"
          title="AI-powered products with recruiter-friendly depth."
          copy="Each project highlights backend architecture, AI integration, authentication, analytics, and user-facing polish."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, description, features, tech, github, demo, icon: Icon, metric }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-300/20 text-cyan-100 ring-1 ring-white/10">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {metric}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Key features</p>
                  <div className="mt-3 grid gap-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.065] px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-7">
                  <a href={github} target="_blank" rel="noreferrer" className="project-link">
                    <Github size={17} />
                    GitHub
                  </a>
                  <a href={demo} className="project-link">
                    <ArrowUpRight size={17} />
                    Live demo
                  </a>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
