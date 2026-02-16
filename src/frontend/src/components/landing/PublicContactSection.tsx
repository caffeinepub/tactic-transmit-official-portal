import { Mail } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function PublicContactSection() {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">Public contact channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:tactic.transmit@gmail.com"
            className="glass-panel-strong p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
              <Mail className="w-6 h-6 text-neon-blue" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="text-white font-semibold">tactic.transmit@gmail.com</p>
            </div>
          </a>

          <a
            href="https://instagram.com/tactic_transmit"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-strong p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
              <SiInstagram className="w-6 h-6 text-neon-blue" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Instagram</p>
              <p className="text-white font-semibold">@tactic_transmit</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
