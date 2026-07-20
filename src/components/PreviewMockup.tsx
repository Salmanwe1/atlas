'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, CreditCard, BarChart2, CheckCircle2, Circle } from 'lucide-react';

export default function PreviewMockup() {
  const [activeTab, setActiveTab] = useState<'storefront' | 'orders' | 'analytics'>('storefront');

  return (
    <section className="relative w-full px-6 py-24 md:px-16 md:py-36 bg-[#0c0c0c] border-t border-white/5">
      {/* Title */}
      <div className="mb-16 max-w-3xl md:mb-24">
        <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
          03 // THE STOREFRONT & CONSOLE
        </span>
        <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
          Crafted for premium aesthetics. <br />
          <span className="font-serif italic text-gold-light">Optimized</span> for absolute conversion.
        </h2>
        <p className="mt-6 max-w-xl text-xs font-light leading-relaxed text-neutral-400">
          Say goodbye to manual order forms. Give your buyers a high-speed, frictionless shopping interface that mirrors the premium nature of your clothing and accessories.
        </p>
      </div>

      {/* Main mockup panel */}
      <div className="grid gap-12 lg:grid-cols-12 items-center">
        {/* Tab triggers (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            onClick={() => setActiveTab('storefront')}
            className={`flex items-center gap-4 p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'storefront'
                ? 'bg-white/5 border-gold-accent/40 shadow-[0_0_20px_rgba(197,168,128,0.05)]'
                : 'bg-transparent border-white/5 hover:border-white/10'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'storefront' ? 'bg-gold-accent/10 text-gold-accent' : 'bg-white/5 text-neutral-500'}`}>
              <Layout className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white tracking-wide font-mono uppercase">Editorial Storefront</h4>
              <p className="mt-1 text-[11px] font-light text-neutral-400">A beautiful, distraction-free home for your collection.</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-4 p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'orders'
                ? 'bg-white/5 border-gold-accent/40 shadow-[0_0_20px_rgba(197,168,128,0.05)]'
                : 'bg-transparent border-white/5 hover:border-white/10'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'orders' ? 'bg-gold-accent/10 text-gold-accent' : 'bg-white/5 text-neutral-500'}`}>
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white tracking-wide font-mono uppercase">Order Flow Console</h4>
              <p className="mt-1 text-[11px] font-light text-neutral-400">Accept card payments, track sizing, and process dispatch.</p>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-4 p-6 rounded-2xl border text-left transition-all ${
              activeTab === 'analytics'
                ? 'bg-white/5 border-gold-accent/40 shadow-[0_0_20px_rgba(197,168,128,0.05)]'
                : 'bg-transparent border-white/5 hover:border-white/10'
            }`}
          >
            <div className={`p-3 rounded-xl ${activeTab === 'analytics' ? 'bg-gold-accent/10 text-gold-accent' : 'bg-white/5 text-neutral-500'}`}>
              <BarChart2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white tracking-wide font-mono uppercase">Visual Demand Chart</h4>
              <p className="mt-1 text-[11px] font-light text-neutral-400">Understand conversion rates and customer demographics.</p>
            </div>
          </button>
        </div>

        {/* Mockup Display (Right) */}
        <div className="lg:col-span-8 flex justify-center items-center">
          <div className="glass-card w-full max-w-2xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
            
            {/* Window control header */}
            <div className="flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/5">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                {activeTab === 'storefront' ? 'brand_preview.config' : activeTab === 'orders' ? 'order_dispatcher.log' : 'analytics_panel.json'}
              </span>
              <div className="w-10" />
            </div>

            {/* Mockup Body Content */}
            <div className="p-8 min-h-[400px] flex items-center justify-center bg-black/20">
              <AnimatePresence mode="wait">
                
                {/* 1. EDITORIAL STOREFRONT PREVIEW */}
                {activeTab === 'storefront' && (
                  <motion.div
                    key="storefront"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full grid md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Simulated mobile view of product */}
                    <div className="relative mx-auto w-full max-w-[240px] aspect-[9/16] rounded-[2rem] border-4 border-neutral-800 bg-[#0d0d0d] overflow-hidden p-2 flex flex-col justify-between">
                      {/* Dynamic luxury mockup placeholder */}
                      <div className="h-[65%] w-full rounded-2xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden group">
                        {/* Elegant minimalist gold hanger icon representing clothes */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <span className="text-[9px] font-mono tracking-widest text-gold-accent/70 uppercase z-20 absolute top-4">
                          ATLAS MODEL
                        </span>
                        
                        {/* Silk geometric rendering */}
                        <div className="w-24 h-24 rounded-full bg-gold-accent/15 blur-xl absolute" />
                        <div className="w-12 h-12 rounded-full border border-gold-accent/40 flex items-center justify-center z-20">
                          <span className="text-[9px] font-serif italic text-gold-accent">A</span>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                          <span className="text-[10px] font-light text-white block tracking-wider uppercase font-mono">
                            Noir Velvet Silk
                          </span>
                          <span className="text-[9px] text-neutral-400">
                            PKR 18,500
                          </span>
                        </div>
                      </div>

                      {/* Product details and Checkout button */}
                      <div className="px-2 py-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-neutral-400 font-light">Select Size</span>
                          <div className="flex gap-1.5 font-mono">
                            <span className="text-[8px] border border-white/10 px-1 rounded-sm text-neutral-300">S</span>
                            <span className="text-[8px] border border-gold-accent/40 px-1 rounded-sm text-gold-accent font-bold">M</span>
                            <span className="text-[8px] border border-white/10 px-1 rounded-sm text-neutral-300">L</span>
                          </div>
                        </div>
                        <button className="w-full bg-white text-black py-2 rounded-xl text-[9px] font-semibold tracking-widest uppercase hover:bg-gold-light transition-all">
                          Instant checkout
                        </button>
                      </div>
                    </div>

                    {/* Storefront descriptor text */}
                    <div className="flex flex-col gap-4 text-left">
                      <span className="text-[9px] font-mono tracking-[0.2em] text-gold-accent uppercase">
                        Storefront Engine
                      </span>
                      <h3 className="text-xl font-light text-white leading-snug">
                        Your brand. <br />Your identity. <br />No third-party clutter.
                      </h3>
                      <p className="text-xs font-light leading-relaxed text-neutral-400">
                        A beautiful editorial landing page customized with your signature fonts and colors. High-converting sizing tools make checking out quicker than waiting for a DM reply.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 2. ORDER CONSOLE PREVIEW */}
                {activeTab === 'orders' && (
                  <motion.div
                    key="orders"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex flex-col gap-6 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium tracking-wider text-white font-mono uppercase">
                        Direct Sales Inbox
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">
                        3 PENDING DISPATCH
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Order Row 1 */}
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-accent/20 transition-all">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-gold-accent" />
                          <div>
                            <span className="text-[11px] font-mono font-medium text-white block">ORD-2026-9481</span>
                            <span className="text-[9px] text-neutral-400">Zahra Khan • Velvet Silk (M)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-white block">PKR 18,500</span>
                          <span className="text-[8px] bg-gold-accent/10 border border-gold-accent/20 text-gold-accent px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                            Paid (Card)
                          </span>
                        </div>
                      </div>

                      {/* Order Row 2 */}
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-accent/20 transition-all">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-gold-accent" />
                          <div>
                            <span className="text-[11px] font-mono font-medium text-white block">ORD-2026-9480</span>
                            <span className="text-[9px] text-neutral-400">Omar Ali • Linen Kurta (L)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-white block">PKR 12,000</span>
                          <span className="text-[8px] bg-gold-accent/10 border border-gold-accent/20 text-gold-accent px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                            Paid (Bank Link)
                          </span>
                        </div>
                      </div>

                      {/* Order Row 3 */}
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                        <div className="flex items-center gap-3">
                          <Circle className="h-4 w-4 text-neutral-600" />
                          <div>
                            <span className="text-[11px] font-mono font-medium text-neutral-300 block">ORD-2026-9479</span>
                            <span className="text-[9px] text-neutral-500">Aisha Bilal • Chiffon Dupatta</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-neutral-300 block">PKR 6,500</span>
                          <span className="text-[8px] bg-white/5 border border-white/5 text-neutral-400 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                            Shipped
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. ANALYTICS PREVIEW */}
                {activeTab === 'analytics' && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex flex-col gap-6 text-left"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Monthly Revenue</span>
                        <span className="text-lg font-light text-white block mt-1 font-mono">PKR 842k</span>
                        <span className="text-[9px] text-gold-accent font-mono">+18.4% vs last month</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Avg. Order Value</span>
                        <span className="text-lg font-light text-white block mt-1 font-mono">PKR 15,200</span>
                        <span className="text-[9px] text-neutral-400 font-mono">Based on 55 sales</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">Conversion Rate</span>
                        <span className="text-lg font-light text-white block mt-1 font-mono">4.12%</span>
                        <span className="text-[9px] text-gold-accent font-mono">2x industry average</span>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-4">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">Customer Locations</span>
                      
                      <div className="space-y-2">
                        {/* Karachi bar */}
                        <div>
                          <div className="flex justify-between text-[10px] text-neutral-300 font-mono mb-1">
                            <span>Karachi</span>
                            <span>45%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ duration: 1 }} className="h-full bg-gold-accent" />
                          </div>
                        </div>

                        {/* Lahore bar */}
                        <div>
                          <div className="flex justify-between text-[10px] text-neutral-300 font-mono mb-1">
                            <span>Lahore</span>
                            <span>35%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '35%' }} transition={{ duration: 1 }} className="h-full bg-gold-accent" />
                          </div>
                        </div>

                        {/* Islamabad bar */}
                        <div>
                          <div className="flex justify-between text-[10px] text-neutral-300 font-mono mb-1">
                            <span>Islamabad</span>
                            <span>20%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ duration: 1 }} className="h-full bg-gold-light" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
