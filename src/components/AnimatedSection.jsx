import { motion } from 'framer-motion';

const AnimatedSection = ({ id, className = '', children }) => {
  return (
    <motion.section
      id={id}
      className={`relative px-5 py-20 sm:px-6 lg:px-8 lg:py-28 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
