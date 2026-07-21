'use client';

import { motion } from 'framer-motion';

export default function FoundersLetter() {
  return (
    <section id="founders-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            03 // WHY WE&apos;RE BUILDING THIS
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Founder Photo & Bio */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <div className="relative w-48 h-48 rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden flex flex-col items-center justify-center group hover:border-gold-accent/30 transition-all duration-300">
              {/* TODO: Add actual founder photo asset here when available */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="w-10 h-10 rounded-full border border-gold-accent/20 flex items-center justify-center mb-2 z-20">
                <span className="text-xs font-serif italic text-gold-accent">A</span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-300 uppercase z-20">
                [PHOTO PLACEHOLDER]
              </span>
              <span className="text-[8px] font-mono text-neutral-400 mt-1 z-20">
                TODO: Supply Founder Image
              </span>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white font-mono uppercase">
                Salman & Partners
              </h4>
              <p className="text-[11px] font-light text-neutral-300 mt-1 font-mono uppercase tracking-wide">
                Founders, Project Atlas
              </p>
              <p className="text-[10px] font-light text-neutral-400 font-mono mt-0.5 uppercase tracking-widest">
                Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* Right Column: The Letter */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm font-light leading-relaxed text-neutral-300"
            >
              We spoke to [N] Pakistani fashion sellers before writing a line of code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-sm font-light leading-relaxed text-neutral-300"
            >
              The same four problems came up every time: you pay for every single customer through ads, you lose hours a day to &quot;price?&quot; DMs, RTO on COD eats your margin, and your money sits with a courier for weeks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm font-light leading-relaxed text-neutral-300"
            >
              None of that is a website problem. It&apos;s a demand and operations problem. So we didn&apos;t build you another storefront.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm font-light leading-relaxed text-neutral-300"
            >
              We built one place where buyers come specifically to shop Pakistani fashion, and we run the boring half — payments, courier, returns, payouts.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-light leading-relaxed text-neutral-300"
            >
              Honest position: we&apos;re early. We&apos;re taking [N] founding brands and charging them [X] so the risk of trying us is close to zero. If it doesn&apos;t work for you, you&apos;ve lost an afternoon of catalog upload.
            </motion.p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 pt-4 border-t border-white/5"
            >
              <span className="font-serif italic text-gold-light text-base tracking-wide block">
                Salman & team
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
