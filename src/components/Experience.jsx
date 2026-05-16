import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { journey } from '../data/portfolio';

const Experience = () => {
  return (
    <AnimatedSection id="journey" className="z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Journey"
          title="The path is deliberately product-focused."
          copy="A timeline of the engineering strengths behind the portfolio: scalable backends, GenAI workflows, and strong problem-solving habits."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-fuchsia-300/0 md:block" />
          <div className="grid gap-5">
            {journey.map(({ title, detail, icon: Icon }, index) => (
              <motion.div
                key={title}
                className="relative md:pl-16"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-[#07101a] text-cyan-100 shadow-lg shadow-cyan-400/10 md:grid">
                  <Icon size={19} />
                </div>
                <SpotlightCard className="p-6">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-100 md:hidden">
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cyan-200/80">0{index + 1}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{detail}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
