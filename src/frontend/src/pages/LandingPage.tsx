import HeroSection from '../components/landing/HeroSection';
import WelcomeNarrativeSection from '../components/landing/WelcomeNarrativeSection';
import CoreValuesGrid from '../components/landing/CoreValuesGrid';
import ProductSection from '../components/landing/ProductSection';
import ExecutiveBoardSection from '../components/landing/ExecutiveBoardSection';
import ConnectGatewaySection from '../components/landing/ConnectGatewaySection';
import PublicContactSection from '../components/landing/PublicContactSection';

export default function LandingPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <WelcomeNarrativeSection />
      <CoreValuesGrid />
      <ProductSection />
      <ExecutiveBoardSection />
      <ConnectGatewaySection />
      <PublicContactSection />
    </div>
  );
}
