'use client';

export default function MoneyDetails() {
  return (
    <section id="money-section" className="relative w-full px-6 py-16 md:px-16 md:py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.2em] text-gold-accent uppercase">
            07 // MONEY
          </span>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Clear fees. <br />
            <span className="font-serif italic text-gold-light">Fast payouts.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Financial details */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="border-l-2 border-gold-accent/40 pl-4">
              <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block mb-1">
                Commission Fee
              </span>
              <span className="text-2xl font-mono text-white block">[X]%</span>
              <p className="text-xs font-light text-neutral-350 mt-1 leading-relaxed">
                Zero setup fees. Zero listing fees. You only pay when you make a sale.
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4">
              <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                Payout Cycle
              </span>
              <span className="text-2xl font-mono text-white block">[X] Hours</span>
              <p className="text-xs font-light text-neutral-350 mt-1 leading-relaxed">
                Money settles directly into your registered bank account. No waiting weeks for couriers to release your cash.
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4">
              <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
                Hidden Fees
              </span>
              <span className="text-2xl font-mono text-white block">[X] PKR</span>
              <p className="text-xs font-light text-neutral-350 mt-1 leading-relaxed">
                We believe in absolute transparency. No recurring developer subscriptions, platform taxes, or checkout fees.
              </p>
            </div>
          </div>

          {/* Right Column: Dashboard screenshot slot */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-white/5 bg-[#0c0c0c] overflow-hidden shadow-2xl relative">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-800" />
                  <span className="h-2 w-2 rounded-full bg-neutral-800" />
                  <span className="h-2 w-2 rounded-full bg-neutral-800" />
                </div>
                <span className="text-[8px] font-mono tracking-widest text-neutral-450 uppercase">
                  console_payouts_v1.0
                </span>
                <div className="w-6" />
              </div>

              {/* Placeholder Content */}
              <div className="p-8 aspect-video bg-black/20 flex flex-col items-center justify-center text-center gap-3">
                {/* TODO: Replace this placeholder with an actual seller dashboard payout screenshot when the app feature goes live */}
                <div className="w-10 h-10 rounded-full border border-gold-accent/20 flex items-center justify-center">
                  <span className="text-xs font-serif italic text-gold-accent">$</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-300 uppercase block">
                    [DASHBOARD PREVIEW]
                  </span>
                  <span className="text-[8px] font-mono text-neutral-450 uppercase block mt-1">
                    TODO: Supply dashboard screenshot asset
                  </span>
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mt-4 text-center">
              Your actual payout screen.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
