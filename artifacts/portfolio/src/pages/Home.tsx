import { lazy, Suspense } from "react";
import Hero from "@/components/blocks/Hero";
import Marquee from "@/components/blocks/Marquee";
import SplineScene from "@/components/blocks/SplineScene";
import CursorGlow from "@/components/blocks/CursorGlow";

const WorkShowcase = lazy(() => import("@/components/blocks/WorkShowcase"));
const Services = lazy(() => import("@/components/blocks/Services"));
const Process = lazy(() => import("@/components/blocks/Process"));
const CTA = lazy(() => import("@/components/blocks/CTA"));
const Footer = lazy(() => import("@/components/blocks/Footer"));

const SectionFallback = () => <div className="min-h-[300px]" />;

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-neon-pink/30 relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <SplineScene />
        </div>
        <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      </div>

      <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_select]:pointer-events-auto [&_nav]:pointer-events-auto [&_form]:pointer-events-auto [&_[role=button]]:pointer-events-auto">
        <Hero />
        <Marquee />
        <Suspense fallback={<SectionFallback />}>
          <WorkShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
        <CursorGlow />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-container { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}} />
    </main>
  );
}
