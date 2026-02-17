import { Mail, Instagram } from 'lucide-react';
import AdminAdministrativeAccessPanel from '../connect/AdminAdministrativeAccessPanel';

export default function ConnectGatewaySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              CONNECT WITH US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gateway
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Public contact channels and administrative access
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Public Contact */}
          <div className="glass-panel-strong p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Public Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:tactic.transmit@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
              >
                <div className="p-3 bg-neon-blue/20 rounded-lg group-hover:bg-neon-blue/30 transition-colors">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-white font-medium">tactic.transmit@gmail.com</div>
                </div>
              </a>

              <a
                href="https://instagram.com/tactic_transmit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
              >
                <div className="p-3 bg-neon-blue/20 rounded-lg group-hover:bg-neon-blue/30 transition-colors">
                  <Instagram className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Instagram</div>
                  <div className="text-white font-medium">@tactic_transmit</div>
                </div>
              </a>
            </div>
          </div>

          {/* Administrative Access */}
          <AdminAdministrativeAccessPanel />
        </div>
      </div>
    </section>
  );
}
