export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-panel p-12 rounded-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                TACTIC TRANSMIT collects information necessary to provide and improve our time transmission services.
                This includes authentication data through Internet Identity, system usage logs, and administrative
                access records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authenticate and authorize administrative access</li>
                <li>Monitor system performance and uptime</li>
                <li>Maintain security and prevent unauthorized access</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Internet Identity</h2>
              <p>
                TACTIC TRANSMIT uses Internet Identity for authentication. We do not store passwords or personal
                identification information. Your identity is managed securely through the Internet Computer's
                decentralized authentication system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. All administrative
                access is logged and monitored. Our TT-1 transmitter includes Dejon's 1kΩ protection shield to
                ensure system integrity and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p>
                System logs and operational data are retained for the duration necessary to maintain service quality
                and security. Administrative access records are maintained in accordance with institutional policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
              <p>
                TACTIC TRANSMIT integrates with NTP (Network Time Protocol) servers for time synchronization. No
                personal information is shared with these services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your authentication and profile information</li>
                <li>Request deletion of your administrative account</li>
                <li>Opt out of non-essential data collection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify administrators of any significant
                changes through the admin dashboard or official communication channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                For privacy-related questions or concerns, please contact the TACTIC TRANSMIT team through the
                administrative contact module in the dashboard.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
