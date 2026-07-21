'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

const categories = [
  'Clothing',
  'Footwear',
  'Perfume',
  'Jewelry',
  'Bags',
  'Accessories',
  'Other'
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    brandName: '',
    instagram: '',
    category: '',
    whatsapp: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlistNumber, setWaitlistNumber] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleInstagramBlur = () => {
    // Automatically prepend '@' if the user forgot it
    const handle = formData.instagram.trim();
    if (handle && !handle.startsWith('@')) {
      setFormData((prev) => ({
        ...prev,
        instagram: `@${handle}`,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Frontend validations (no email)
    if (!formData.brandName || !formData.instagram || !formData.category || !formData.whatsapp) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setWaitlistNumber(data.waitlistNumber);
      setSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-black border-t border-white/5 scroll-mt-20">
      
      {/* Decorative vertical separator */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2 pointer-events-none hidden md:block" />

      <div className="relative z-10 mx-auto max-w-xl">
        <AnimatePresence mode="wait">
          
          {/* SUCCESS SCREEN */}
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-gold p-8 md:p-12 rounded-3xl text-center flex flex-col items-center gap-6"
            >
              <div className="h-16 w-16 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent">
                <Check className="h-6 w-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-accent uppercase block mb-2">
                  Application Accepted
                </span>
                <h3 className="text-2xl font-light text-white tracking-wide">
                  Welcome to Atlas
                </h3>
              </div>

              <div className="my-4 py-4 px-8 border-y border-white/5 w-full">
                <span className="text-[10px] font-mono text-neutral-350 uppercase tracking-widest block font-medium">
                  Seller Member ID
                </span>
                <span className="text-4xl font-light text-white font-mono block mt-2">
                  #{waitlistNumber}
                </span>
              </div>

              <p className="text-xs font-light leading-relaxed text-neutral-300">
                A Project Atlas partner will review your Instagram profile and contact you via WhatsApp within 1 working day to schedule your catalog upload and shop onboarding.
              </p>

              <button
                onClick={() => {
                  setSuccess(false);
                  setFormData({ brandName: '', instagram: '', category: '', whatsapp: '' });
                }}
                className="mt-4 text-[10px] font-mono uppercase text-neutral-300 hover:text-white tracking-widest transition-colors font-medium"
              >
                Submit another brand
              </button>
            </motion.div>
          ) : (
            
            // FORM SCREEN
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card p-8 md:p-12 rounded-3xl"
            >
              <div className="text-center mb-10">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
                  09 // APPLY IN 2 MINUTES
                </span>
                <h3 className="mt-3 text-2xl font-light text-white tracking-tight sm:text-3xl">
                  Join as a Seller
                </h3>
                <p className="mt-3 text-xs font-light text-neutral-300 leading-relaxed">
                  We are launching with a select group of independent Pakistani brands. Apply now to lock in free onboarding and start selling.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Brand Name */}
                <div>
                  <label htmlFor="brandName" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="e.g. Noir Pret"
                    className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-gold-accent/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all"
                    required
                  />
                </div>

                {/* Instagram Handle */}
                <div>
                  <label htmlFor="instagram" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    onBlur={handleInstagramBlur}
                    placeholder="e.g. @noir.pret"
                    className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-gold-accent/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all"
                    required
                  />
                </div>

                {/* Category Dropdown */}
                <div>
                  <label htmlFor="category" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                    Brand Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-gold-accent/40 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="bg-black text-neutral-400">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#0c0c0c] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                    {/* Select Dropdown arrow icon decoration */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-300">
                      <span className="text-[8px] font-mono">▼</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsapp" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-gold-accent/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all"
                    required
                  />
                </div>

                {/* Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 text-[11px]"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Submit button & Urdu sub-label & Reassurance */}
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black py-4 rounded-xl text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:bg-gold-light hover:shadow-[0_0_20px_rgba(229,197,131,0.15)] flex flex-col items-center justify-center gap-1 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2">
                      <span>{loading ? 'Submitting Application...' : 'Join as a Seller'}</span>
                      {!loading && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block font-normal group-hover:text-black/60 transition-colors">
                      Apna brand ab Pakistan ke har sheher tak.
                    </span>
                  </button>
                  
                  <div className="text-center text-[10px] font-mono tracking-widest text-neutral-350 uppercase leading-relaxed">
                    No fee. No contract. We&apos;ll WhatsApp you within one working day.
                  </div>
                </div>

              </form>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}
