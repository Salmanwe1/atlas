'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 500px (roughly past the hero fold on mobile)
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const target = document.getElementById('waitlist-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden"
        >
          <button
            onClick={handleScrollToForm}
            className="w-full bg-gold-accent hover:bg-gold-light text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(197,168,128,0.3)] transition-all active:scale-[0.98] cursor-pointer"
          >
            Join as a Seller
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
