import { ArrowRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function ExecutiveBoardSection() {
  const navigate = useNavigate();

  const executives = [
    {
      name: 'Jeswin Miss',
      role: 'Chief Institutional Mentor',
      preview: 'Guiding force behind the Tactic Transmit integration',
    },
    {
      name: 'Johann G. Thekkel',
      role: 'Lead Architect',
      preview: 'Final authority on firmware architecture and circuit integrity',
    },
    {
      name: 'Joel Abraham',
      role: 'Chief Designer',
      preview: 'Architect of the visual ecosystem and hardware housing',
    },
    {
      name: 'Dejon Justine',
      role: 'Treasurer & Safety Auditor',
      preview: 'Chief of capital management and hardware safety certification',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              LEADERSHIP & MENTORSHIP
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Executive Board
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The minds behind Tactic Transmit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="glass-panel-strong p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer"
              onClick={() => navigate({ to: '/board' })}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{exec.name}</h3>
              <div className="inline-block px-3 py-1 bg-neon-blue/20 rounded-full mb-4">
                <span className="text-neon-blue text-xs font-semibold tracking-wide">
                  {exec.role.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{exec.preview}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate({ to: '/board' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all group"
          >
            View Full Board
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
