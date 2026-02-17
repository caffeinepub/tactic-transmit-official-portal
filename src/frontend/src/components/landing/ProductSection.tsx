import { Cpu, Clock, Music, Shield } from 'lucide-react';

export default function ProductSection() {
  const features = [
    {
      icon: Cpu,
      title: 'ESP32 Dual-Core',
      description: 'High-performance microcontroller with dual-core processing for real-time audio synchronization.',
    },
    {
      icon: Clock,
      title: 'DS3231 RTC',
      description: 'Ultra-precise real-time clock with temperature compensation for zero-drift timekeeping.',
    },
    {
      icon: Music,
      title: '24-bit Hi-Fi DAC',
      description: 'Professional-grade digital-to-analog converter delivering crystal-clear audio output.',
    },
    {
      icon: Shield,
      title: '1kΩ Impedance Shield',
      description: 'Industrial-grade protection ensuring safe operation in educational environments.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              THE TT-1 HARDWARE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Precision Engineering
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for automated school bell systems with industrial-grade reliability
          </p>
        </div>

        {/* Hero Poster Image */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="glass-panel-strong p-4 rounded-3xl border border-neon-blue/30">
            <img
              src="/assets/generated/tt1-assembly-hero-poster.dim_1920x1080.png"
              alt="TT-1 Assembly"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Transmitter Render */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="glass-panel p-4 rounded-3xl border border-white/10">
            <img
              src="/assets/generated/tt1-transmitter-render.dim_1400x900.png"
              alt="TT-1 Transmitter"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-panel-strong p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 bg-neon-blue/20 rounded-xl group-hover:bg-neon-blue/30 transition-colors">
                  <Icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
