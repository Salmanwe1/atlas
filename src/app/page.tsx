import HeroSection from '@/components/HeroSection';
import GridSection from '@/components/GridSection';
import PreviewMockup from '@/components/PreviewMockup';
import Philosophy from '@/components/Philosophy';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* 3D Hero section */}
      <HeroSection />

      {/* Comparison Grid section */}
      <GridSection />

      {/* Interactive Mockups section */}
      <PreviewMockup />

      {/* Typography Philosophy Quote section */}
      <Philosophy />

      {/* Founding Member waitlist form section */}
      <WaitlistForm />

      {/* Premium minimal Footer */}
      <Footer />
    </main>
  );
}
