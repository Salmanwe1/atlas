import HeroSection from '@/components/HeroSection';
import TheOffer from '@/components/TheOffer';
import FoundersLetter from '@/components/FoundersLetter';
import GridSection from '@/components/GridSection';
import OnboardingSteps from '@/components/OnboardingSteps';
import OperationsInfo from '@/components/OperationsInfo';
import MoneyDetails from '@/components/MoneyDetails';
import FAQ from '@/components/FAQ';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* 01 Hero Section */}
      <HeroSection />

      {/* 02 The Founding Seller Offer */}
      <TheOffer />

      {/* 03 A Note From The Founders */}
      <FoundersLetter />

      {/* 04 Instagram vs Atlas */}
      <GridSection />

      {/* 05 How Onboarding Works */}
      <OnboardingSteps />

      {/* 06 Operations Info */}
      <OperationsInfo />

      {/* 07 Money Details */}
      <MoneyDetails />

      {/* 08 FAQ Accordion */}
      <FAQ />

      {/* 09 Apply Waitlist Form */}
      <WaitlistForm />

      {/* 10 Premium Minimal Footer */}
      <Footer />

      {/* Sticky Bottom CTA for Mobile */}
      <StickyCTA />
    </main>
  );
}
