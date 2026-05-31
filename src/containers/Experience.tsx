'use client';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '../styles/animations';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      {/* wala nang content */}
    </motion.section>
  );
};

export default Experience;