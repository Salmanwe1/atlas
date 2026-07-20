'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="relative w-full px-6 py-32 md:px-16 md:py-48 bg-black flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/5">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2 pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        {/* Number badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase mb-8"
        >
          04 // THE CODE
        </motion.div>

        {/* Large quote */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight"
        >
          We are not building software. <br />
          We are building <span className="font-serif italic text-gold-light">confidence</span>.
        </motion.h3>

        {/* Philosophy explanation paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-8 max-w-lg text-sm font-light leading-relaxed tracking-wide text-neutral-300"
        >
          Every pixel has intent. We treat your digital storefront with the same reverence and meticulous care as you treat your fabric selections, pattern files, and packaging boxes.
        </motion.p>
      </div>

    </section>
  );
}
