import { useEffect, useState } from 'react';
import SyncingInfrastructureBackground from './SyncingInfrastructureBackground';
import DigitalClock from './DigitalClock';
import { LOGO_PATH } from '../../constants/brand';

export default function HeroSection() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <SyncingInfrastructureBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="glass-panel-strong max-w-5xl mx-auto p-12 rounded-3xl">
          {/* Digital Clock */}
          <div className="mb-8 flex justify-end">
            <DigitalClock />
          </div>

          {/* 3D Logo with Pulse */}
          <div className="mb-8 flex justify-center">
            <div
              className={`transition-all duration-300 ${
                pulse ? 'scale-105 drop-shadow-[0_0_25px_rgba(0,200,255,0.8)]' : 'scale-100'
              }`}
            >
              <img
                src={LOGO_PATH}
                alt="TT Logo 3D"
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>
          </div>

          {/* The Hook */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            PRECISION. AUTOMATED. SYNCHRONIZED.
          </h1>
        </div>
      </div>
    </section>
  );
}
