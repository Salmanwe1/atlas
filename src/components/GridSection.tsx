'use client';

import { motion } from 'framer-motion';
import { Shield, Smartphone, Zap, BarChart3, Repeat, MessageCircle } from 'lucide-react';

const comparisonData = [
  {
    icon: MessageCircle,
    label: "Customer Discovery",
    instagram: "Drowning in algorithmic Feeds. Customers scroll endlessly, get distracted by competing ads, and leave before finding you.",
    atlas: "Curated Luxury Showcase. Your brand is placed in an editorial, high-intent space alongside Pakistan's finest designers."
  },
  {
    icon: Shield,
    label: "The Trust Equation",
    instagram: "Manual screenshots of bank transfers. Customers hesitate, wait for manual verification, and lose purchasing confidence.",
    atlas: "Verified Storefront & Instant Pay. Direct card payments, trusted checkout routing, and immediate order receipts increase cart conversion."
  },
  {
    icon: Smartphone,
    label: "Order Management",
    instagram: "Scattered DMs and WhatsApp chats. Orders get lost, sizes get mismatched, and manual notebook logs lead to fulfillment chaos.",
    atlas: "Unified Operations. A single, dedicated portal for processing orders, managing customer sizes, and tracking shipping labels."
  },
  {
    icon: BarChart3,
    label: "Business Intelligence",
    instagram: "Zero analytics. Counting likes and DMs manually to guess which dress design will sell out next.",
    atlas: "Sartorial Analytics. Real-time graphs showing exactly which items are trending, average order values, and repeat customer rates."
  },
  {
    icon: Zap,
    label: "Customer Support",
    instagram: "Endless 'Price please?' replies. Business owners lose hours replying to repetitive queries in DMs.",
    atlas: "Frictionless Checkout. Sizing charts, clear pricing, and automated status tracking eliminate 90% of support questions."
  },
  {
    icon: Repeat,
    label: "Retention & Scale",
    instagram: "No customer database. Re-marketing requires blasting Instagram stories and hoping previous buyers see them.",
    atlas: "Founding Circle Ecosystem. Automatic customer profile generation and curated newsletter triggers to boost repeat buying."
  }
];

export default function GridSection() {
  return (
    <section className="relative w-full px-6 py-24 md:px-16 md:py-36 bg-black border-t border-white/5">
      {/* Title block */}
      <div className="mb-20 max-w-3xl md:mb-28">
        <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
          02 // THE FRICTION & THE FUTURE
        </span>
        <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
          Instagram is for building a community. <br />
          <span className="font-serif italic text-gold-light">Atlas</span> is for running your business.
        </h2>
      </div>

      {/* Grid container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {comparisonData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
              className="glass-card flex flex-col justify-between p-8 rounded-2xl group transition-all duration-300 hover:border-gold-accent/25"
            >
              <div>
                {/* Icon header */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gold-accent group-hover:bg-gold-accent/5 group-hover:border-gold-accent/20 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="text-lg font-medium text-white mb-6 font-mono tracking-wide uppercase">
                  {item.label}
                </h3>
                
                {/* Contrast columns */}
                <div className="space-y-6">
                  <div className="border-l-2 border-neutral-800 pl-4">
                    <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase block mb-1">
                      Status Quo
                    </span>
                    <p className="text-xs font-light leading-relaxed text-neutral-400">
                      {item.instagram}
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-gold-accent/30 pl-4">
                    <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block mb-1">
                      With Atlas
                    </span>
                    <p className="text-xs font-light leading-relaxed text-neutral-200">
                      {item.atlas}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
