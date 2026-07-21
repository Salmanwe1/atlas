'use client';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full px-6 py-8 md:px-16 md:py-14 bg-black border-t border-white/5 mt-auto">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl">
        
        {/* Branding & trademark */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-mono tracking-[0.25em] text-white">ATLAS</span>
          <span className="text-[10px] font-light tracking-wide text-neutral-300">
            © {new Date().getFullYear()} Project Atlas. Pakistan&apos;s fashion marketplace.
          </span>
        </div>

        {/* Links / Back to top */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:partners@project-atlas.pk"
            className="text-[10px] font-mono tracking-widest text-neutral-300 hover:text-gold-accent transition-colors uppercase"
          >
            Contact Partner Desk
          </a>
          <button
            onClick={handleScrollToTop}
            className="text-[10px] font-mono tracking-widest text-neutral-300 hover:text-white transition-colors uppercase cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
      
      {/* Editorial aesthetic credit line */}
      <div className="mt-8 text-center text-[9px] font-mono tracking-widest text-neutral-350 uppercase">
        More orders. Less operations. Payouts in 48 hours.
      </div>
    </footer>
  );
}
