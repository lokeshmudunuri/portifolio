'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { assetPath } from '@/lib/assets';
import GithubActivity from './GithubActivity';


export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Software Development',
  ];

  const projects = [
    {
      id: 1,
      title: 'SmartMind Care',
      category: 'AI Guidance Platform',
      group: 'AI & Machine Learning',
      description: 'A project concept focused on helping people experiencing mental stress access structured guidance and wellness support. Designed around accessible user interaction, personalized guidance, and organized support resources.',
      image: '/projects/smartmind-care.jpg',
      github: 'https://github.com/lokeshmudunuri/smart-mind-care-ai.git',
      demo: '#',
      technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      id: 2,
      title: 'Dev Assistant',
      category: 'Developer Assistant',
      group: 'Software Development',
      description: 'A project concept to help developers understand unfamiliar or older codebases and improve productivity on existing projects. Uses AI assistance to explain code, understand project structure, and provide contextual guidance while developers work.',
      image: '',
      github: 'https://github.com/lokeshmudunuri',
      demo: '#',
      technologies: ['Python', 'JavaScript', 'REST APIs', 'Git'],
    },
    {
      id: 3,
      title: 'Retail Sales Inventory Co-Pilot',
      category: 'Operations Analytics',
      group: 'Software Development',
      description: 'A deterministic retail analytics dashboard providing real-time revenue audits, emergency stock alerts, profit margin tracking, and automated inventory forecasting.',
      image: '/projects/retail-sales.png',
      github: 'https://github.com/lokeshmudunuri/retail-sales-inventory-copilot.git',
      demo: '#',
      technologies: ['Python', 'FastAPI', 'Pandas', 'SQLite', 'React.js'],
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.group === filter);

  return (
    <div className="space-y-24">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={"px-4 py-2.5 md:px-8 md:py-3.5 rounded-full md:rounded-[1.25rem] text-[9px] sm:text-[10px] md:text-xs uppercase font-bold tracking-[0.1em] md:tracking-[0.15em] transition-all duration-500 " + (filter === cat ? 'bg-lime-400 text-black font-black shadow-[0_10px_30px_rgba(163,230,53,0.25)] scale-100 md:scale-105' : 'glass text-neutral-300 hover:text-white border border-white/10')}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-10 items-stretch">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="group relative flex flex-col h-full"
            >
              <div className="glass rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between h-full border border-white/10 hover-glow transition-all duration-700 overflow-hidden hover:border-lime-400/30">
                
                {/* Visual Header / Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden mb-6 bg-black/60 border border-white/10 flex-shrink-0">
                  {project.image ? (
                    <>
                      <img 
                        src={assetPath(project.image)} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black/60 via-[#101510] to-black/80 relative select-none">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-lime-400 group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10 mb-2">
                        <Code2 className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.25em] font-black text-neutral-400 group-hover:text-lime-400 transition-colors">
                        Architecture & Context Engine
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.2] to-transparent pointer-events-none" />
                    </div>
                  )}
                  
                  {/* Floating Category Badge inside image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 glass rounded-full text-[9px] uppercase tracking-[0.2em] font-black text-lime-400 backdrop-blur-md bg-black/80 border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-lime-300 transition-all duration-500 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-neutral-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-5 min-h-[3.25rem]">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 glass text-[9px] font-bold tracking-wider rounded-lg text-neutral-300 group-hover:text-lime-400 transition-colors border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      {project.github && project.github !== '#' ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-black text-[10px] uppercase tracking-widest font-black hover:bg-lime-300 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(163,230,53,0.25)]"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-neutral-400 text-[10px] uppercase tracking-widest font-bold border border-white/10">
                          <Github className="w-3.5 h-3.5" />
                          <span>Concept Code</span>
                        </span>
                      )}

                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Repository CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center pt-4"
      >
        <a
          href="https://github.com/lokeshmudunuri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 px-6 py-3 glass rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
            View All Repositories on GitHub
          </span>
        </a>
      </motion.div>

      {/* Embedded GitHub Activity Section */}
      <GithubActivity />
    </div>
  );
}
