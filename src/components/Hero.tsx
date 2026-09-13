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
    <div ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-100 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Typography */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-400">
                  Frontend Developer • Aspiring AI & ML Engineer
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-[-0.03em] leading-[0.9] text-white">
                  MUDUNURI <br />
                  <span className="text-neutral-400">LOKESH VARMA</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed">
                  I am a <span className="text-lime-400 font-semibold">Frontend Developer</span> and an <span className="text-white font-semibold">aspiring AI & ML Engineer</span>, crafting responsive, modern web experiences and exploring intelligent data-driven applications.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
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
                      className="group flex items-center justify-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-lime-400 hover:text-black text-neutral-300 transition-all duration-300 border border-white/10"
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                        {social.label}
                      </span>
                    </a>
                 ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a 
                href="#projects" 
                className="group relative px-10 py-5 bg-lime-400 text-black rounded-[2rem] font-black overflow-hidden transition-all hover:bg-lime-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(163,230,53,0.25)]"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">My Projects</span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-10 py-5 glass text-neutral-200 rounded-[2rem] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-2xl hover:text-white hover:border-lime-400/40 border border-white/10"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Contact</span>
              </a>
            </motion.div>

            {/* Quick Milestone Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {[
                { label: "2nd Prize — Researchers' Day", icon: '🏆' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass rounded-full text-[10px] font-bold text-neutral-300 tracking-wide border border-white/10 hover:border-lime-400/30 hover:text-white transition-all"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Visual Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            style={{ y: y2, rotate }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{ rotateX: springTiltX, rotateY: springTiltY, transformPerspective: 1200 }}
              className="relative aspect-[4/5] w-full max-w-[500px] mx-auto group"
            >
              <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-b from-sky-500/20 via-indigo-500/10 to-transparent p-px">
                <div className="absolute inset-0 rounded-[4rem] bg-slate-900 shadow-2xl border border-white/10">
                  {/* Photo layer — clipped to the rounded frame */}
                  <div className="absolute inset-0 rounded-[4rem] overflow-hidden">
                    {/* Decorative Elements inside slot */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.05] z-10 pointer-events-none text-white">
                      <span className="text-[120px] font-black leading-none uppercase select-none">MLV</span>
                    </div>

                    {/* Portrait */}
                    <img
                      src={assetPath("/profile.jpg")}
                      alt="Mudunuri Lokesh Varma"
                      className="absolute inset-0 w-full h-full object-cover object-top contrast-[1.05] scale-[1.03] group-hover:scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* Status Pill */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full shadow-xl backdrop-blur-xl bg-black/60 border border-white/15"
                    >
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-[0.25em] font-black text-white">Open to Opportunities</span>
                    </motion.div>

                    {/* Name plate */}
                    <div className="absolute bottom-6 left-6 right-6 md:hidden">
                      <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black">Mudunuri Lokesh Varma</p>
                    </div>
                  </div>

                  {/* Glass Card floating on top — outside the clip so it isn't cropped */}
                  <motion.div
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-6 -right-6 w-52 p-6 glass rounded-3xl shadow-2xl hidden md:block z-20 border border-white/10"
                  >
                     <div className="space-y-3">
                        <div className="h-1 w-8 bg-lime-400 rounded-full" />
                        <p className="text-[10px] leading-relaxed font-bold text-neutral-200">Currently Pursuing: <br /> <span className="text-lime-400">AI & ML, Vishnu Institute of Technology</span></p>
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-lime-400 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] font-black [writing-mode:vertical-lr] text-neutral-400">Scroll</span>
      </motion.div>
    </div>
  );
}
