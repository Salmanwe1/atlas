'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Do I have to stop selling on Instagram?",
    answer: "No. You can keep selling on Instagram, Facebook, WhatsApp, or your own website. Atlas is an additional sales channel that connects you to buyers who come specifically to shop, and automates courier bookings and payouts."
  },
  {
    question: "Do I keep my customer data?",
    answer: "[Customer Data Access Policy]. You will have full access to your customer listings, contact numbers, and transaction logs inside your dashboard."
  },
  {
    question: "Do I need a registered business or NTN?",
    answer: "[NTN / Business Registration Requirement]. You do not need a registered company or NTN to join as a founding seller; you can apply as an independent home business or designer."
  },
  {
    question: "What if a buyer refuses the COD order?",
    answer: "[COD Refusal / RTO Policy]. If an order is refused at delivery, it will be returned to you. The exact policy regarding who covers the reverse courier charges is still being finalized."
  },
  {
    question: "How many products do I need to list?",
    answer: "[Minimum Product Listing Count]. There is no minimum product count required to start, though we recommend launching with at least [N] items to give buyers a complete view of your collection."
  },
  {
    question: "Who photographs my products?",
    answer: "You do. [Product photography guidelines]. You can use your existing Instagram content, model photos, or studio catalog flat-lays, provided they are clear and represent the product accurately."
  },
  {
    question: "Do I set my own prices and run my own sales?",
    answer: "Yes. You have absolute control over your pricing structure, size availability, discount runs, and inventory counts at all times."
  },
  {
    question: "When exactly do I get paid?",
    answer: "Money will settle in your account within 48 hours of successful delivery. [Detailed payout cycles for bank transfers]."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-[#080808] border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            08 // FAQ
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-white/5 divide-y divide-white/5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-2 text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-medium text-white group-hover:text-gold-light transition-colors font-mono tracking-wide">
                    {item.question}
                  </span>
                  <div className="ml-4 h-6 w-6 rounded-full border border-white/5 group-hover:border-gold-accent/20 flex items-center justify-center text-neutral-400 group-hover:text-gold-accent transition-all shrink-0">
                    {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pt-2 text-xs font-light leading-relaxed text-neutral-300 pr-12">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
