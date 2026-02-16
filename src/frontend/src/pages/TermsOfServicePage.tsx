export default function TermsOfServicePage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="glass-panel-strong p-8 md:p-12 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Ownership</h2>
              <p className="mb-4">
                The Tactic Transmit TT-1 Time Transmitter system, including all hardware designs,
                software code, documentation, branding, and intellectual property, is owned jointly
                and exclusively by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li className="text-white font-semibold">Johann G. Thekkel</li>
                <li className="text-white font-semibold">Joel Abraham</li>
                <li className="text-white font-semibold">Dejon Justine</li>
                <li className="text-white font-semibold">Nandhukrishna Biju</li>
              </ul>
              <p>
                All rights reserved. Unauthorized reproduction, distribution, or modification of any
                component of the Tactic Transmit system is strictly prohibited without written
                consent from all four founders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using this portal, you acknowledge that you have read, understood,
                and agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Service</h2>
              <p>
                This portal is provided for informational purposes and to facilitate communication
                with the Tactic Transmit team. You agree to use this service only for lawful
                purposes and in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                The Tactic Transmit team shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to use
                this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Continued use of
                the service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <a
                  href="mailto:tactic.transmit@gmail.com"
                  className="text-neon-blue hover:underline"
                >
                  tactic.transmit@gmail.com
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last updated: February 16, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
