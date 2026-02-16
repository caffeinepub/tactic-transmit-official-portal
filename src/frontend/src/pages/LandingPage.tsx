import HeroSection from '../components/landing/HeroSection';
import ProductSection from '../components/landing/ProductSection';
import ExecutiveBoardSection from '../components/landing/ExecutiveBoardSection';
import ConnectGatewaySection from '../components/landing/ConnectGatewaySection';

export default function LandingPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ProductSection />
      <ExecutiveBoardSection />
      <ConnectGatewaySection />
    </div>
  );
}
