import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { heroBadges, profile, socials } from '../data/portfolio';

const stats = [
  ['450+', 'DSA problems'],
  ['9', 'Portfolio builds'],
  ['MERN', 'Primary stack'],
];

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-500/10">
            <Sparkles size={16} />
            Fresh graduate building full stack products with practical GenAI
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Full Stack & GenAI Engineer Building Scalable AI-Powered Products
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build full stack web applications with solid backend foundations and focused GenAI features where they create real product value.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-secondary">
              Resume
              <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact
              <Mail size={18} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {heroBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-300 backdrop-blur"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.045 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#080c16]/80 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Engineer profile</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">{profile.name}</h2>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-400 text-xl font-black text-slate-950 shadow-lg shadow-cyan-400/20">
                  {profile.initials}
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Current focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">Full stack products + focused GenAI</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-sm text-slate-300">
                <p><span className="text-emerald-300">const</span> engineer = &#123;</p>
                <p className="pl-4">stack: "MERN + GenAI",</p>
                <p className="pl-4">ships: "full stack products",</p>
                <p className="pl-4">mindset: "scalable and clean"</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
