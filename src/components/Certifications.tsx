'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 text-center space-y-4 hover-glow transition-all duration-700 border border-white/10 hover:border-lime-400/30"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[9px] uppercase tracking-[0.25em] font-black text-lime-400 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span>In Progress</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          Certifications & Specialized Coursework
        </h3>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto opacity-90">
          Actively undertaking technical coursework in Machine Learning, modern frontend architecture, and AI tooling. Verified credentials will appear here upon completion.
        </p>
      </motion.div>
    </div>
  );
}
