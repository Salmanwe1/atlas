'use client';

import { motion } from 'framer-motion';

const offerData = [
  {
    value: "[X]%",
    label: "Commission",
    description: "For your first [N] months"
  },
  {
    value: "48-Hour",
    label: "Payouts",
    description: "Money in your account, not stuck"
  },
  {
    value: "[X]%",
    label: "COD Supported",
    description: "Of Pakistani orders are cash on delivery"
  },
  {
    value: "[Courier]",
    label: "Booked For You",
    description: "[TCS / Leopards / M&P / PostEx]"
  }
];

export default function TheOffer() {
  return (
    <section id="offer-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-[#080808] border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            02 // THE FOUNDING SELLER OFFER
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Plain numbers. <br />
            <span className="font-serif italic text-gold-light">Zero operational friction</span>.
          </h2>
        </div>

        {/* 4-Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
              className="glass-card flex flex-col justify-between p-6 rounded-2xl group transition-all duration-300 hover:border-gold-accent/25 min-h-[160px]"
            >
              <div>
                {/* Big Number / Accent header */}
                <div className="text-3xl font-light text-white font-mono tracking-tight mb-2 group-hover:text-gold-light transition-colors">
                  {item.value}
                </div>
                
                {/* Label */}
                <h3 className="text-xs font-medium text-neutral-300 mb-2 font-mono tracking-wide uppercase">
                  {item.label}
                </h3>
              </div>
              
              {/* Supporting info */}
              <p className="text-xs font-light leading-relaxed text-neutral-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
