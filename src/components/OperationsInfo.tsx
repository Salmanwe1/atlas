'use client';

import { motion } from 'framer-motion';

const operationsData = [
  {
    title: "Who pays delivery?",
    policy: "[Delivery Payment Policy]",
    description: "Undecided details about whether the shopper pays flat courier fees, or if shipping is built into listing prices."
  },
  {
    title: "What about RTO / refused orders?",
    policy: "[RTO / Refusal Policy]",
    description: "Undecided guidelines regarding who covers courier return charges when cash-on-delivery buyers refuse orders."
  },
  {
    title: "Which couriers do we use?",
    policy: "[Courier Operations Policy]",
    description: "We handle bookings. Partners like TCS, Leopards, M&P, and PostEx will be assigned depending on coverage areas."
  }
];

export default function OperationsInfo() {
  return (
    <section id="operations-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-[#080808] border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            06 // OPERATIONS
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            COD, couriers, and returns. <br />
            <span className="font-serif italic text-gold-light">Handled by us.</span>
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {operationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[180px] hover:border-gold-accent/15 transition-all"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase font-mono mb-2">
                  {item.title}
                </h3>
                
                {/* Policy marker in brackets */}
                <div className="text-xs text-gold-accent font-mono mb-3 uppercase tracking-wider">
                  {item.policy}
                </div>
              </div>

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
