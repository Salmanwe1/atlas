'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: "01",
    title: "Apply",
    duration: "2 minutes",
    description: "Fill the simple 4-field application form below."
  },
  {
    step: "02",
    title: "Verification Call",
    duration: "Within 1 working day",
    description: "We'll confirm your details and talk about your brand."
  },
  {
    step: "03",
    title: "Upload Catalog",
    duration: "We do it with you",
    description: "Our partner success managers upload your existing inventory."
  },
  {
    step: "04",
    title: "Go Live",
    duration: "[N] days",
    description: "Start receiving orders from active Pakistani shoppers."
  }
];

export default function OnboardingSteps() {
  return (
    <section id="onboarding-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            05 // HOW ONBOARDING WORKS
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Four simple steps. <br />
            <span className="font-serif italic text-gold-light">Minimal time cost.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[180px] hover:border-gold-accent/15 transition-all"
            >
              <div>
                {/* Step badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-gold-accent font-bold">
                    {item.step} {"//"}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-sm font-semibold tracking-wide text-white uppercase font-mono mb-2">
                  {item.title}
                </h3>
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
