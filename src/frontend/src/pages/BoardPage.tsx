export default function BoardPage() {
  const founders = [
    {
      name: 'Johann G. Thekkel',
      role: 'Lead Architect & Lead Code',
      description:
        'Johann serves as the technical backbone of Tactic Transmit, overseeing all system logic, firmware architecture, and PCB fabrication processes. With deep expertise in embedded systems and hardware design, he ensures every circuit and line of code meets the exacting standards required for precision timing systems. His final authority on technical decisions guarantees that TT-1 delivers uncompromising accuracy and reliability in every deployment.',
    },
    {
      name: 'Joel Abraham',
      role: 'Chief Designer & Chief Presenter',
      description:
        'Joel is the creative force behind Tactic Transmit\'s visual identity and public presence. As Chief Designer, he crafts the aesthetic language of our products and brand, ensuring every touchpoint reflects our commitment to precision and innovation. As Chief Presenter, he translates complex technical concepts into compelling narratives, representing TT to partners, clients, and the broader community with clarity and vision.',
    },
    {
      name: 'Dejon Justine',
      role: 'Treasurer & Investor',
      description:
        'Dejon manages the financial strategy and capital allocation that powers Tactic Transmit\'s growth and innovation. Beyond fiscal stewardship, he leads our hardware safety auditing processes, ensuring every component and assembly meets rigorous safety standards. His dual focus on financial sustainability and operational safety provides the foundation for TT\'s long-term success and trustworthiness in mission-critical applications.',
    },
    {
      name: 'Nandhukrishna Biju',
      role: 'Ad Handler & Brand Strategist',
      description:
        'Nandhukrishna orchestrates Tactic Transmit\'s brand strategy, market positioning, and sonic identity. He manages advertising initiatives, digital presence, and the strategic narrative that defines how TT is perceived in the marketplace. From this portal to our broader communications ecosystem, he ensures every brand touchpoint reinforces our core values of precision, automation, and synchronization, building lasting recognition and trust.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="glass-panel-strong p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{founder.name}</h3>
              <div className="inline-block px-3 py-1 bg-neon-blue/20 rounded-full mb-6">
                <span className="text-neon-blue text-xs font-semibold tracking-wide">
                  {founder.role.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
