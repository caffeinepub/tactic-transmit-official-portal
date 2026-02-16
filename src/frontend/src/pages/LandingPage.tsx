import HeroSection from '../components/landing/HeroSection';
import WelcomeNarrativeSection from '../components/landing/WelcomeNarrativeSection';
import CoreValuesGrid from '../components/landing/CoreValuesGrid';
import PublicContactSection from '../components/landing/PublicContactSection';

export default function LandingPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <WelcomeNarrativeSection />
      <CoreValuesGrid />
      <PublicContactSection />
    </div>
  );
}
