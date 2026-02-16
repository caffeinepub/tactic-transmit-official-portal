import { Volume2, Clock, Shield } from 'lucide-react';

export default function CoreValuesGrid() {
  const values = [
    {
      icon: Volume2,
      title: 'High Fidelity',
      description: '24-bit audio clarity.',
    },
    {
      icon: Clock,
      title: 'Zero Drift',
      description: 'NTP-synced timekeeping.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: '1kΩ circuit protection.',
    },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Values</h2>
        <p className="text-gray-400 text-lg">The foundation of our engineering philosophy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="glass-panel-strong p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-blue/20 rounded-full mb-6">
                <Icon className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
