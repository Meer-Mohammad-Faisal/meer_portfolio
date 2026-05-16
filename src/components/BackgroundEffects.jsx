import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(168,85,247,0.13),transparent_30%),linear-gradient(180deg,#05070d_0%,#060914_52%,#05070d_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        className="absolute left-[-12rem] top-24 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl"
        animate={{ x: [0, 90, 20], y: [0, 40, 110], scale: [1, 1.12, 0.96] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-[-10rem] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ x: [0, -70, -10], y: [0, -80, -20], scale: [1, 0.92, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default BackgroundEffects;
