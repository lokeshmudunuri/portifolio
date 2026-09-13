'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { assetPath } from '@/lib/assets';


export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Pointer-reactive tilt for the portrait card
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20, mass: 0.5 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 16);
    tiltX.set(py * -16);
  };

  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <div ref={containerRef} className="relative min-h-[92vh] flex items-center justify-center pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-lime-500/[0.04] rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 glass rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime-400">
                  Frontend Developer • Aspiring AI & ML Engineer
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight leading-[1.05] text-white">
                  MUDUNURI <br />
                  <span className="text-neutral-400 font-bold">LOKESH VARMA</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed">
                  I am a <span className="text-lime-400 font-semibold">Frontend Developer</span> and an <span className="text-white font-semibold">aspiring AI & ML Engineer</span>, crafting responsive, modern web experiences and exploring intelligent data-driven applications.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
              >
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/lokesh-varma-mudunuri-b10a74375' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com/lokeshmudunuri' }
                 ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center justify-center gap-2 px-4 py-2 glass rounded-full hover:bg-lime-400 hover:text-black hover:border-lime-400 text-neutral-300 transition-all duration-300 border border-white/10"
                    >
                      <social.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                        {social.label}
                      </span>
                    </a>
                 ))}
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-lime-400 text-black rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-lime-300 hover:scale-[1.03] active:scale-95 shadow-[0_4px_25px_rgba(163,230,53,0.25)]"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] font-extrabold">My Projects</span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 glass text-neutral-200 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:text-white hover:border-lime-400/40 border border-white/10"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] font-bold">Contact</span>
              </a>
            </motion.div>

            {/* Quick Milestone Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {[
                { label: "2nd Prize — Researchers' Day", icon: '🏆' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass rounded-full text-[10px] font-semibold text-neutral-300 tracking-wide border border-white/10 hover:border-lime-400/30 hover:text-white transition-all"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Portrait Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            style={{ y: y2, rotate }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{ rotateX: springTiltX, rotateY: springTiltY, transformPerspective: 1200 }}
              className="relative aspect-[4/5] w-full max-w-[420px] mx-auto group"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/10 via-transparent to-lime-400/10 p-px">
                <div className="absolute inset-0 rounded-[2.5rem] bg-neutral-950 shadow-2xl border border-white/10">
                  {/* Photo layer — clipped to the rounded frame */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                    {/* Portrait */}
                    <img
                      src={assetPath("/profile.jpg")}
                      alt="Mudunuri Lokesh Varma"
                      className="absolute inset-0 w-full h-full object-cover object-top contrast-[1.03] scale-[1.02] group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />

                    {/* Status Pill */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xl bg-black/60 border border-white/15"
                    >
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white">Open to Opportunities</span>
                    </motion.div>

                    {/* Name plate on small screens */}
                    <div className="absolute bottom-5 left-5 right-5 md:hidden">
                      <p className="text-white text-[10px] uppercase tracking-[0.25em] font-bold">Mudunuri Lokesh Varma</p>
                    </div>
                  </div>

                  {/* Glass Card floating on top */}
                  <motion.div
                    animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-5 -right-5 w-52 p-4 glass rounded-2xl shadow-xl hidden md:block z-20 border border-white/10"
                  >
                     <div className="space-y-2">
                        <div className="h-1 w-6 bg-lime-400 rounded-full" />
                        <p className="text-[10px] leading-relaxed font-semibold text-neutral-200">
                          Currently Pursuing: <br /> 
                          <span className="text-lime-400 font-bold">AI & ML, Vishnu Institute of Technology</span>
                        </p>
                     </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-lime-400 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.3em] font-semibold text-neutral-400">Scroll</span>
      </motion.div>
    </div>
  );
}
