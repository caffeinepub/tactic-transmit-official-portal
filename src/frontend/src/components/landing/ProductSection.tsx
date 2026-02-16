export default function ProductSection() {
  const specs = [
    {
      title: 'ESP Logic',
      description: 'Dual-core processing for zero lag.',
    },
    {
      title: 'Hi-Fi DAC',
      description: '24-bit crystal clear audio output.',
    },
    {
      title: 'Security Shield',
      description: "Dejon's 1kΩ protection for PA safety.",
    },
    {
      title: 'Sync',
      description: 'NTP network time integration.',
    },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="glass-panel p-12 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Product: The TT-1 Transmitter
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Johann's architecture meets precision engineering
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/assets/generated/tt1-transmitter-render.dim_1400x900.png"
              alt="TT-1 Time Transmitter"
              className="w-full h-auto rounded-2xl shadow-2xl shadow-neon-blue/20"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="glass-panel-light p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-neon-blue mb-2">{spec.title}</h3>
                <p className="text-gray-300">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
