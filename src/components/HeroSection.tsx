'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const handleScrollToWaitlist = () => {
    const target = document.getElementById('waitlist-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToOffer = () => {
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between px-6 py-6 md:px-16 md:py-8 overflow-hidden bg-[#080808]">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none z-0" />

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

      {/* Main typographic body & Mockup container */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 md:pt-20 pb-8">
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-accent animate-ping" />
            <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
              Applications open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            Sell to buyers who came to <span className="font-serif italic text-gold-light">shop</span>. <br />
            Not to scroll.
          </motion.h1>

          {/* Roman Urdu sub-line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-3 text-xs font-mono tracking-widest text-neutral-300 uppercase"
          >
            Apna brand ab Pakistan ke har sheher tak.
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-6 max-w-xl text-base font-light leading-relaxed tracking-wide text-neutral-300 md:text-lg"
          >
            Pakistan&apos;s fashion marketplace. You list your products — we bring the customers, handle COD, and book the courier. Free for founding sellers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            {/* Primary CTA */}
            <button
              onClick={handleScrollToWaitlist}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(229,197,131,0.25)] cursor-pointer"
            >
              <span>Join as a Seller</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary CTA (ghost) */}
            <button
              onClick={handleScrollToOffer}
              className="px-8 py-4 rounded-full border border-white/15 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              How it works
            </button>
          </motion.div>
        </div>

        {/* Right Side: Phone Mockup Container */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full max-w-[280px] aspect-[9/18] rounded-[2.5rem] border-[6px] border-neutral-800 bg-[#0c0c0c] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2.5 flex flex-col justify-between"
          >
            {/* TODO: Replace this CSS placeholder with the actual marketplace product grid app screenshot when available */}
            
            {/* Phone Screen UI */}
            <div className="w-full h-full flex flex-col justify-between text-left">
              {/* Phone Notch/Speaker bar */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-800 rounded-full flex items-center justify-center z-30">
                <span className="w-2 h-2 rounded-full bg-neutral-900 absolute right-2" />
              </div>

              {/* App Header */}
              <div className="mt-2 pt-2 border-b border-white/5 pb-2 flex justify-between items-center px-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-white font-bold">ATLAS</span>
                <div className="flex gap-1.5 text-[8px] font-mono text-gold-accent bg-gold-accent/5 px-2 py-0.5 rounded-full border border-gold-accent/15">
                  Marketplace Mode
                </div>
              </div>

              {/* Product Grid Mockup */}
              <div className="flex-1 my-3 overflow-hidden">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {/* Item 1 */}
                  <div className="border border-white/5 rounded-lg p-1.5 bg-black/40 flex flex-col justify-between">
                    <div className="w-full aspect-square bg-neutral-900/80 rounded-md relative overflow-hidden flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold-accent/5 blur-md absolute" />
                      <span className="text-[8px] font-mono text-neutral-350 tracking-wider font-light">Khaadi</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[9px] font-mono text-neutral-250 block truncate font-light">Lawn Suit</span>
                      <span className="text-[8px] text-gold-accent font-mono font-medium">PKR 6,500</span>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="border border-white/5 rounded-lg p-1.5 bg-black/40 flex flex-col justify-between">
                    <div className="w-full aspect-square bg-neutral-900/80 rounded-md relative overflow-hidden flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold-accent/5 blur-md absolute" />
                      <span className="text-[8px] font-mono text-neutral-350 tracking-wider font-light">Zara S.</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[9px] font-mono text-neutral-250 block truncate font-light">Silk Kurti</span>
                      <span className="text-[8px] text-gold-accent font-mono font-medium">PKR 14,500</span>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="border border-white/5 rounded-lg p-1.5 bg-black/40 flex flex-col justify-between opacity-80">
                    <div className="w-full aspect-square bg-neutral-900/80 rounded-md relative overflow-hidden flex items-center justify-center">
                      <span className="text-[8px] font-mono text-neutral-350 tracking-wider font-light">Sana S.</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[9px] font-mono text-neutral-250 block truncate font-light">Velvet Kaftan</span>
                      <span className="text-[8px] text-gold-accent font-mono font-medium">PKR 18,000</span>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="border border-white/5 rounded-lg p-1.5 bg-black/40 flex flex-col justify-between opacity-80">
                    <div className="w-full aspect-square bg-neutral-900/80 rounded-md relative overflow-hidden flex items-center justify-center">
                      <span className="text-[8px] font-mono text-neutral-350 tracking-wider font-light">J.</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[9px] font-mono text-neutral-250 block truncate font-light">Kurta Shalwar</span>
                      <span className="text-[8px] text-gold-accent font-mono font-medium">PKR 12,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom app bar */}
              <div className="border-t border-white/5 pt-2 flex justify-around text-[7px] text-neutral-350 font-mono tracking-widest uppercase">
                <span className="text-gold-accent font-bold">Catalog</span>
                <span>Brands</span>
                <span>Cart</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="relative z-10 flex w-full items-end justify-between border-t border-white/5 pt-4 text-neutral-300 font-mono text-[10px] tracking-widest uppercase">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Applications open · Launching [MONTH] · [N] brands onboarded
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          01 // THE SYSTEM
        </motion.span>
      </div>
    </section>
  );
}
