'use client';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full px-6 py-12 md:px-16 md:py-20 bg-black border-t border-white/5 mt-auto">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl">
        
        {/* Branding & trademark */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-mono tracking-[0.25em] text-white">ATLAS</span>
          <span className="text-[10px] font-light tracking-wide text-neutral-500">
            © {new Date().getFullYear()} Project Atlas. Pakistan's independent fashion gateway.
          </span>
        </div>

        {/* Links / Back to top */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:partners@project-atlas.pk"
            className="text-[10px] font-mono tracking-widest text-neutral-400 hover:text-gold-accent transition-colors uppercase"
          >
            Contact Partner Desk
          </a>
          <button
            onClick={handleScrollToTop}
            className="text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
      
      {/* Editorial aesthetic credit line */}
      <div className="mt-12 text-center text-[9px] font-mono tracking-widest text-neutral-700 uppercase">
        Designed for designers. Built for growth.
      </div>
    </footer>
  );
}
