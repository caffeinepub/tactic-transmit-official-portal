export default function ExecutiveBoardSection() {
  const executives = [
    {
      name: 'Johann G. Thekkel',
      role: 'Lead Architect',
      description: 'Code & PCB Authority.',
    },
    {
      name: 'Joel Abraham',
      role: 'Chief Designer',
      description: 'UX & Lead Presenter.',
    },
    {
      name: 'Dejon Justine',
      role: 'Treasurer',
      description: 'Investor & Resource Lead.',
    },
    {
      name: 'Nandhu',
      role: 'Ad Handler',
      description: 'Brand & Marketing Strategist.',
    },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="glass-panel p-12 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          The Executive Board
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          The minds behind TACTIC TRANSMIT
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="glass-panel-light p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue/30 to-purple-500/30 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {exec.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{exec.name}</h3>
              <p className="text-neon-blue font-semibold mb-2">{exec.role}</p>
              <p className="text-gray-400 text-sm">{exec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
