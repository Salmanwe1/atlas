'use client';

import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const handleScrollToWaitlist = () => {
    const target = document.getElementById('waitlist-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between px-6 py-8 md:px-16 md:py-12 overflow-hidden bg-transparent">
      {/* 3D background element */}
      <Hero3D />

      {/* Header bar / Logo */}
      <header className="relative z-10 flex w-full items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-lg font-mono tracking-[0.25em] text-white"
        >
          ATLAS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="rounded-full border border-gold-accent/20 bg-gold-accent/5 px-4 py-1 text-xs tracking-wider text-gold-accent font-mono uppercase"
        >
          Founding Cohort v1.0
        </motion.div>
      </header>

      {/* Main typographic body */}
      <div className="relative z-10 my-auto flex max-w-4xl flex-col items-start pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-accent animate-ping" />
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            Now Accepting Applications
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
        >
          Elevating <br />
          <span className="font-serif italic text-gold-light">Independent</span> <br className="hidden sm:block" />
          Fashion Houses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed tracking-wide text-neutral-400 md:text-lg"
        >
          Moving beyond Instagram DMs and manual transfers. We build the premium storefront, unified checkout, and automated ecosystem your brand deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={handleScrollToWaitlist}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(229,197,131,0.25)]"
          >
            <span>Request Invitation</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Footer hint */}
      <div className="relative z-10 flex w-full items-end justify-between border-t border-white/5 pt-6 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Scroll to explore the operating system
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          01 // THE SYSTEM
        </motion.span>
      </div>
    </section>
  );
}
