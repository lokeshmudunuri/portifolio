'use client';

import { motion } from 'framer-motion';

export default function About() {
  const categories = [
    {
      title: 'AI & Machine Learning',
      description: 'Building machine learning foundations, data preprocessing routines, and predictive models using Python.',
      tag: 'Machine Intel',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Frontend Engineering',
      description: 'Crafting responsive, dynamic, and intuitive web interfaces using modern HTML, CSS, and React.js.',
      tag: 'Frontend UI',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Data & Preprocessing',
      description: 'Cleaning, transforming, and preparing structured datasets using Python and Pandas for robust analysis.',
      tag: 'Data Science',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'AI Workflows & Developer Tools',
      description: 'Actively learning Claude / AI-assisted workflows and exploring beginner Agentic AI concepts through modern AI developer tools.',
      tag: 'AI Workflows',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <div className="space-y-24 md:space-y-28">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-neutral-100">
            I am a passionate <span className="text-lime-400 font-bold">Frontend Developer</span> and an <span className="text-white font-bold">aspiring AI & ML Engineer</span> currently pursuing my B.Tech at <span className="text-neutral-200">Vishnu Institute of Technology</span>, with hands-on experience building modern, responsive web applications and AI-driven solutions.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 font-normal max-w-3xl leading-relaxed">
            Focused on crafting intuitive user interfaces with React and modern web technologies, while actively learning to master AI tools like Claude, diving into the fundamentals of Agentic AI, and exploring data preprocessing with Python and Pandas.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group p-8 sm:p-10 glass rounded-3xl hover-glow relative overflow-hidden flex flex-col items-start gap-6 hover:border-lime-400/30 border border-white/10 transition-all duration-500"
          >
             <div className="w-12 h-12 glass shrink-0 rounded-2xl flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500 shadow-lg border border-white/10">
                <div className="w-6 h-6 flex items-center justify-center">
                  {cat.icon}
                </div>
             </div>
             
             <div className="space-y-4">
                <span className="inline-block px-3.5 py-1 glass text-[9px] uppercase font-bold tracking-[0.25em] rounded-full text-lime-400 group-hover:text-white transition-colors border border-white/10">
                  {cat.tag}
                </span>
                
                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-lime-300 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
                    {cat.description}
                  </p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
