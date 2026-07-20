'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Load the 3D canvas dynamically with SSR disabled to prevent server hydration mismatches
const Hero3DCanvas = dynamic(() => import('./Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center bg-transparent">
      {/* Minimal luxury loading spinner */}
      <div className="h-6 w-6 animate-pulse rounded-full border border-gold-accent/40 border-t-gold-accent" />
    </div>
  ),
});

export default function Hero3D() {
  return (
    <Suspense fallback={null}>
      <Hero3DCanvas />
    </Suspense>
  );
}
