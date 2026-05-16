import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { aboutKeywords, focusAreas } from '../data/portfolio';

const About = () => {
  return (
    <AnimatedSection id="about" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Backend-minded full stack engineer with an AI product edge."
          copy="I am focused on building clean, recruiter-visible products that combine reliable application engineering with practical GenAI workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, copy }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <SpotlightCard className="h-full p-6">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-cyan-200 ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <SpotlightCard className="mt-6 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200/80">Engineering map</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">From API foundations to AI-integrated workflows.</h3>
              <p className="mt-4 leading-7 text-slate-400">
                My strongest direction is building backend-heavy products where authentication, data models, REST APIs, and AI workflows meet a polished user experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {aboutKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </AnimatedSection>
  );
};

export default About;
