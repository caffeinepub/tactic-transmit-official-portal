import MessagingTerminalForm from '../components/connect/MessagingTerminalForm';
import FoundersVault from '../components/connect/FoundersVault';

export default function ConnectSupportPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Connect & Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Gateway: Public messaging and secure founder contact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Zone A: Public Messaging Terminal */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">The Messaging Terminal</h2>
              <p className="text-gray-400">Send us a message. We'll respond via email.</p>
            </div>
            <MessagingTerminalForm />
          </div>

          {/* Zone B: Secure Founders' Vault */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">The Founders' Vault</h2>
              <p className="text-gray-400">Direct contact lines for authenticated users.</p>
            </div>
            <FoundersVault />
          </div>
        </div>
      </div>
    </div>
  );
}
