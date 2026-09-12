'use client';

import { motion } from 'framer-motion';
import { assetPath } from '@/lib/assets';


export default function Experience() {
  const experiences = [
    {
      id: 1,
      position: 'Research Presentation — OralSense AI',
      company: "Researchers' Day / Academic Activity",
      period: 'Academic Milestone',
      location: 'Vishnu Institute of Technology',
      logo: '/vishnu.jpg',
      description: "Presented OralSense AI — an AI-based solution designed to assist pathologists and reduce pathology-related processing time from 30+ minutes to approximately 2–4 minutes, earning 2nd Prize at Researchers' Day.",
      skills: ['AI / ML', 'Healthcare AI', 'Research'],
    },
    {
      id: 2,
      position: 'Technical Project & Hackathon Development',
      company: 'Hands-on Engineering & Projects',
      period: 'Third-Year B.Tech',
      location: 'Academic & Self-Directed',
      logo: '/vishnu.jpg',
      description: 'Hands-on experience developing AI and software projects through hackathons, research activities, and personal projects, focusing on building practical full-stack and AI-powered applications.',
      skills: ['Full Stack', 'Problem Solving', 'Teamwork'],
    },
  ];

  return (
    <div className="relative">
      {/* Central timeline line */}
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent -translate-x-1/2" />

      <div className="space-y-12 sm:space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={"flex flex-col " + (index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse') + " items-center justify-between gap-8 sm:gap-0 group"}
          >
            {/* Content card */}
            <div className="w-full sm:w-[45%]">
              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] relative hover-glow transition-all duration-700 group/card">
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-3.5 py-1 glass text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full text-black">
                      {exp.period}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl p-2 flex items-center justify-center border border-black/5 shadow-md group-hover/card:scale-110 transition-transform duration-500 shrink-0">
                      <img src={assetPath(exp.logo)} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold group-hover/card:text-black transition-colors leading-tight break-words">{exp.position}</h3>
                      <p className="text-accent text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed opacity-80 italic group-hover/card:opacity-100 transition-opacity">
                    &quot;{exp.description}&quot;
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 sm:px-4 sm:py-1.5 glass border-black/5 text-secondary text-[8px] sm:text-[9px] md:text-[10px] rounded-xl font-bold uppercase tracking-widest group-hover/card:text-black group-hover/card:border-black/30 transition-all font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Spacing for layout */}
            <div className="hidden sm:block sm:w-[10%]" />
            <div className="hidden sm:block sm:w-[35%] px-10">
               <div className="opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 select-none pointer-events-none scale-125 origin-center">
                  <span className="text-[120px] font-black font-display text-black leading-none">0{index + 1}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
