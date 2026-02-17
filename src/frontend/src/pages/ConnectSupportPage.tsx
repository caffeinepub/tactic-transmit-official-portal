import MessagingTerminalForm from '../components/connect/MessagingTerminalForm';
import DirectContactRegistry from '../components/connect/DirectContactRegistry';

export default function ConnectSupportPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              THE GATEWAY
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Connect & Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Direct access to the Tactic Transmit team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Zone A: Public Messaging Terminal */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Messaging Terminal</h2>
              <p className="text-gray-400">Send us a message. We'll respond via email.</p>
            </div>
            <MessagingTerminalForm />
          </div>

          {/* Zone B: Direct Contact Registry (Public) */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Direct Contact Registry</h2>
              <p className="text-gray-400">Immediate access to our official contact channels.</p>
            </div>
            <DirectContactRegistry />
          </div>
        </div>
      </div>
    </div>
  );
}
