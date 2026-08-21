import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { projects } from '../data/portfolio';

const SectionBlock = ({ title, children }) => (
  <div className="border-t border-white/10 pt-4">
    <h4 className="text-sm font-semibold text-white">{title}</h4>
    <div className="mt-2 text-sm leading-6 text-slate-400">{children}</div>
  </div>
);

const TextList = ({ items }) => (
  <ul className="grid gap-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TechStack = ({ stack }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {Object.entries(stack).map(([category, items]) => (
      <div key={category} className="rounded-2xl border border-white/10 bg-black/15 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">{category}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="rounded-full bg-white/[0.065] px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured projects"
          title="Projects presented like products, not assignments."
          copy="Each build is framed around the real problem, product decision, architecture, technical challenges, and recruiter signal."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ title, subtitle, description, features, tech, github, demo, icon: Icon, metric, featured, caseStudy, metrics }, index) => (
            <article
              key={title}
              className={featured ? 'xl:col-span-1' : ''}
              style={{ animationDelay: `${Math.min(index * 55, 350)}ms` }}
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

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">{subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                  {metrics ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {metrics.map((m) => (
                        <span key={m.label} className="rounded-full bg-white/[0.03] px-3 py-1 text-sm text-slate-300 ring-1 ring-white/6">
                          <strong className="text-white">{m.value}</strong>
                          <span className="ml-2 text-slate-400">{m.label}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Core product value</p>
                  <div className="mt-3 grid gap-2">
                    {features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.slice(0, 6).map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.065] px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {github ? (
                    <a href={github} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={17} />
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link opacity-70">
                      <Github size={17} />
                      GitHub pending
                    </span>
                  )}
                  <a href={demo} target="_blank" rel="noreferrer" className="project-link">
                    <ArrowUpRight size={17} />
                    {demo.includes('github.com') ? 'Repo demo' : 'Live demo'}
                  </a>
                </div>

                <details className="group mt-6 rounded-2xl border border-white/10 bg-black/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-semibold text-white">
                    Product case study
                    <ChevronDown size={17} className="transition group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-5 px-4 pb-5">
                    {caseStudy.assumption ? (
                      <p className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">
                        {caseStudy.assumption}
                      </p>
                    ) : null}

                    <SectionBlock title="1. Elevator Pitch">
                      <p>{caseStudy.pitch}</p>
                    </SectionBlock>
                    <SectionBlock title="2. Problem Statement">
                      <TextList items={caseStudy.problem} />
                    </SectionBlock>
                    <SectionBlock title="3. Existing Solutions and Limitations">
                      <TextList items={caseStudy.limitations} />
                    </SectionBlock>
                    <SectionBlock title="4. Our Solution">
                      <TextList items={caseStudy.solution} />
                    </SectionBlock>
                    <SectionBlock title="5. Key Innovations">
                      <TextList items={caseStudy.innovations} />
                    </SectionBlock>
                    <SectionBlock title="6. Core Features">
                      <TextList items={caseStudy.features} />
                    </SectionBlock>
                    <SectionBlock title="7. Technical Architecture">
                      <TextList items={caseStudy.architecture} />
                    </SectionBlock>
                    <SectionBlock title="8. Challenges Solved">
                      <TextList items={caseStudy.challenges} />
                    </SectionBlock>
                    <SectionBlock title="9. Real-World Impact">
                      <TextList items={caseStudy.impact} />
                    </SectionBlock>
                    <SectionBlock title="10. Why Recruiters Should Care">
                      <TextList items={caseStudy.recruiter} />
                    </SectionBlock>
                    <SectionBlock title="11. Future Roadmap">
                      <TextList items={caseStudy.roadmap} />
                    </SectionBlock>
                    <SectionBlock title="12. Tech Stack">
                      <TechStack stack={caseStudy.techStack} />
                    </SectionBlock>
                    <SectionBlock title="13. Resume Description">
                      <TextList items={caseStudy.resume} />
                    </SectionBlock>
                    <SectionBlock title="14. GitHub README Summary">
                      <p>{caseStudy.readme}</p>
                    </SectionBlock>
                    <SectionBlock title="15. Portfolio Summary">
                      <p>{caseStudy.portfolio}</p>
                    </SectionBlock>
                  </div>
                </details>
              </SpotlightCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
