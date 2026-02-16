export default function BoardPage() {
  const founders = [
    {
      name: 'Johann G. Thekkel',
      role: 'Lead Architect & Lead Code',
      description: 'The final authority on all system logic and PCB fabrication.',
      image: '/assets/generated/board-johann.dim_800x1000.png',
    },
    {
      name: 'Joel Abraham',
      role: 'Chief Designer & Chief Presenter',
      description:
        'The visionary responsible for how the system looks, feels, and is presented to the public.',
      image: '/assets/generated/board-joel.dim_800x1000.png',
    },
    {
      name: 'Dejon Justine',
      role: 'Treasurer & Investor',
      description: 'The master of capital allocation and hardware safety auditing.',
      image: '/assets/generated/board-dejon.dim_800x1000.png',
    },
    {
      name: 'Nandhukrishna Biju',
      role: 'Ad Handler & Brand Strategist',
      description:
        'The strategist managing the TT brand, the sonic identity, and this very portal.',
      image: '/assets/generated/board-nandhu.dim_800x1000.png',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Executive Leadership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Board: The minds behind Tactic Transmit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass-panel-strong p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
              <div className="inline-block px-3 py-1 bg-neon-blue/20 rounded-full mb-4">
                <span className="text-neon-blue text-xs font-semibold tracking-wide">
                  {founder.role.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
