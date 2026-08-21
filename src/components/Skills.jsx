import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A practical engineering toolkit"
          copy="Focused on production-ready system design, backend reliability, frontend polish, data & caching, CI/CD, testing, and pragmatic GenAI features."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map(({ title, icon: Icon, skills, accent }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <SpotlightCard className="h-full p-5">
                <div className={`mb-5 h-1.5 rounded-full bg-gradient-to-r ${accent}`} />
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <div className="mt-6 grid gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-black/15 px-3 py-2 text-sm text-slate-300 transition group-hover:border-white/15"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
