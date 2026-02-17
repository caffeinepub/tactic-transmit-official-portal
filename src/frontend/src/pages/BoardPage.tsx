import { useState } from 'react';

export default function BoardPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const founders = [
    {
      name: 'Jeswin Miss',
      role: 'Chief Institutional Mentor',
      description:
        'The guiding force behind the Tactic Transmit integration. Jeswin Miss provided the institutional vision and administrative oversight necessary to transition the ARS campus into a fully automated environment. Her mentorship bridged the gap between raw engineering and real-world educational utility.',
    },
    {
      name: 'Johann G. Thekkel',
      role: 'Lead Architect',
      description:
        'The final authority on firmware architecture, PCB fabrication, and circuit integrity.',
    },
    {
      name: 'Joel Abraham',
      role: 'Chief Designer',
      description:
        'Architect of the visual ecosystem. Joel ensures the hardware housing and digital interfaces are as sleek as they are functional.',
    },
    {
      name: 'Dejon Justine',
      role: 'Treasurer & Safety Auditor',
      description:
        'Chief of capital management and hardware safety certification. Dejon ensures every component meets industrial standards.',
    },
    {
      name: 'Nandhu Krishna Biju',
      role: 'Ad Handler & Brand Strategist',
      description:
        'The voice of the brand. Nandhu manages the public-facing identity, sonic branding, and institutional communications.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              LEADERSHIP & MENTORSHIP
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Board
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The minds behind Tactic Transmit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass-panel-strong p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{founder.name}</h3>
              <div className="inline-block px-3 py-1 bg-neon-blue/20 rounded-full mb-6">
                <span className="text-neon-blue text-xs font-semibold tracking-wide">
                  {founder.role.toUpperCase()}
                </span>
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed">{founder.description}</p>
              </div>
              
              <div className="md:hidden mt-4 text-sm text-gray-400">
                {hoveredIndex === index ? 'Tap to hide' : 'Tap to reveal details'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
