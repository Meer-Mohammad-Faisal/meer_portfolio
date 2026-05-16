import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl"
      animate={{ x: position.x - 88, y: position.y - 88 }}
      transition={{ type: 'spring', stiffness: 180, damping: 32, mass: 0.4 }}
    />
  );
};

export default CursorGlow;
