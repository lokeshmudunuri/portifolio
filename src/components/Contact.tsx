'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lokeshpersonal147@gmail.com',
      href: 'mailto:lokeshpersonal147@gmail.com',
      copyValue: 'lokeshpersonal147@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhimavaram, India',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Narrative Side */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 space-y-8"
      >
        <div className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 glass rounded-full ring-1 ring-black/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Open for Opportunities</span>
             </div>
             <div className="h-px w-20 bg-black/10" />
          </div>

          <h3 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[1] text-black mb-4">
             LET&apos;S <br />
             <span className="text-zinc-300">CONNECT</span>
          </h3>
          
          <p className="text-2xl md:text-3xl text-secondary max-w-xl font-medium leading-relaxed italic">
            &quot;Interested in building practical full-stack and AI-powered applications. <span className="text-black font-bold">Let&apos;s discuss projects, ideas, and collaborations.</span>&quot;
          </p>
        </div>

        {/* Quick Social Access */}
        <div className="flex flex-wrap gap-4 pt-4">
          {[
            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/lokesh-varma-mudunuri-b10a74375' },
            { icon: Github, label: 'GitHub', href: 'https://github.com/lokeshmudunuri' }
           ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-2 px-5 py-3 glass rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  {social.label}
                </span>
              </a>
           ))}
        </div>
      </motion.div>

      {/* Info Cards Side */}
      <div className="lg:col-span-5 space-y-4">
        {contactItems.map((item) => {
          const Content = (
            <div className="group glass p-6 md:p-8 rounded-[2rem] flex items-center justify-between hover-glow transition-all duration-500">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-black text-zinc-400">
                    {item.label}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-black group-hover:text-gradient transition-all break-all">
                    {item.value}
                  </p>
                </div>
              </div>

              {item.copyValue && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard(item.copyValue!, item.label);
                  }}
                  className="p-3 glass rounded-xl hover:bg-black hover:text-white transition-all duration-300 shrink-0"
                  aria-label={"Copy " + item.label}
                >
                  {copied === item.label ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} className="block">
              {Content}
            </a>
          ) : (
            <div key={item.label}>{Content}</div>
          );
        })}
      </div>
    </div>
  );
}
