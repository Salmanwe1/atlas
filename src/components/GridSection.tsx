'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    instagram: "You pay for every customer through ads",
    atlas: "Buyers arrive already searching for what you sell"
  },
  {
    instagram: "Hours a day answering 'price?'",
    atlas: "Price, size and stock listed once"
  },
  {
    instagram: "You chase courier, COD and returns",
    atlas: "We book the courier and settle your money"
  }
];

export default function GridSection() {
  return (
    <section id="comparison-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-[#080808] border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Title block */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            04 // INSTAGRAM VS ATLAS
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Where buyers come to buy. <br />
            <span className="font-serif italic text-gold-light">Not to browse.</span>
          </h2>
        </div>

        {/* Comparison Rows */}
        <div className="flex flex-col gap-6">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 grid md:grid-cols-2 gap-6 items-center transition-all duration-300 hover:border-gold-accent/25"
            >
              {/* Instagram column */}
              <div className="border-l-2 border-neutral-700 pl-4 text-left">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                  On Instagram Today
                </span>
                <p className="text-sm font-light text-neutral-300">
                  {item.instagram}
                </p>
              </div>
              
              {/* Atlas column */}
              <div className="border-l-2 border-gold-accent/40 pl-4 text-left">
                <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block mb-1">
                  On Atlas
                </span>
                <p className="text-sm font-light text-white">
                  {item.atlas}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
