'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { assetPath } from '@/lib/assets';


interface Moment {
  id: number;
  title: string;
  tag: string;
  images: string[];
  description?: string;
  meta?: string;
  link?: string;
  linkLabel?: string;
}

export default function Memories() {
  const moments: Moment[] = [
    {
      id: 1,
      title: "2nd Prize — Researchers' Day (OralSense AI)",
      tag: 'Research Presentation',
      images: [
        '/memories/researchers-day-1.jpg',
        '/memories/researchers-day-2.jpg',
        '/memories/researchers-day-3.jpg',
      ],
      meta: 'Vishnu Institute of Technology',
      description:
        "Presented OralSense AI — an AI and Machine Learning solution designed to assist pathologists in the early detection and grading of oral cancer through medical image analysis, potentially reducing analysis time from 30+ minutes to around 2–5 minutes. Won 2nd Prize along with a cash prize at the Department-Level Researchers' Day.",
      link: 'https://lnkd.in/p/g8nJCbBJ',
      linkLabel: 'View on LinkedIn',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Back button & title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">
          Memories & Milestones
        </span>
      </div>

      {/* Moments List */}
      <div className="space-y-16">
        {moments.map((moment, index) => (
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 space-y-8 border border-white/10 hover:border-sky-500/30"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3.5 py-1 glass text-[9px] uppercase tracking-[0.2em] font-black rounded-full text-lime-400 border border-white/10">
                  {moment.tag}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight pt-2 text-white">{moment.title}</h3>
                {moment.meta && (
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">{moment.meta}</p>
                )}
              </div>
              {moment.link && (
                <a
                  href={moment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-black text-[10px] uppercase tracking-widest font-black hover:bg-lime-300 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(163,230,53,0.25)]"
                >
                  <span>{moment.linkLabel || 'View Details'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {moment.description && (
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl opacity-90">
                {moment.description}
              </p>
            )}

            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {moment.images.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10 bg-slate-900">
                  <img src={assetPath(img)} alt={moment.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
