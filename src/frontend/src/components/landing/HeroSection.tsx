import CircuitryPulseBackground from './CircuitryPulseBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <CircuitryPulseBackground />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="glass-panel-strong max-w-4xl mx-auto p-12 rounded-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight break-words hyphens-auto">
            PRECISION. AUTOMATED.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The future of school infrastructure at ARS. High-fidelity audio meets millisecond-perfect scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
