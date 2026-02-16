export default function LegalTechnicalDocsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Legal & Technical Documentation
          </h1>
          <p className="text-xl text-gray-300">
            Authoritative documentation for Tactic Transmit
          </p>
        </div>

        {/* Terms of Service / IP Ownership */}
        <section className="glass-panel-strong p-8 md:p-12 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Terms of Service & IP Ownership</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Tactic Transmit TT-1 Time Transmitter system, including all hardware designs,
              software code, documentation, branding, and intellectual property, is owned jointly
              and exclusively by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-white font-semibold">Johann G. Thekkel</li>
              <li className="text-white font-semibold">Joel Abraham</li>
              <li className="text-white font-semibold">Dejon Justine</li>
              <li className="text-white font-semibold">Nandhukrishna Biju</li>
            </ul>
            <p className="mt-6">
              All rights reserved. Unauthorized reproduction, distribution, or modification of any
              component of the Tactic Transmit system is strictly prohibited without written
              consent from all four founders.
            </p>
            <p>
              By accessing this portal or using any Tactic Transmit services, you agree to respect
              the intellectual property rights of the founders and comply with all applicable laws
              and regulations.
            </p>
          </div>
        </section>

        {/* Safety Audit */}
        <section className="glass-panel-strong p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Electrical Safety Audit</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              The TT-1 Time Transmitter has been thoroughly audited for electrical safety and
              compliance with institutional deployment standards. This audit confirms that the
              system is safe for use in school environments and meets all necessary safety
              requirements.
            </p>

            <div className="bg-black/30 p-6 rounded-xl border border-neon-blue/20">
              <h3 className="text-xl font-bold text-white mb-4">Safety Certification</h3>
              <p className="mb-4">
                We, the undersigned, certify that the TT-1 Time Transmitter has been designed,
                tested, and verified to operate safely within the electrical specifications of
                standard school public address systems.
              </p>
              <p className="mb-6">
                The 1kΩ impedance protection circuit provides galvanic isolation and prevents DC
                offset damage to connected amplification equipment. All components meet or exceed
                industry safety standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="/assets/generated/sig-dejon.dim_600x200.png"
                      alt="Dejon Justine Signature"
                      className="h-16 w-auto"
                    />
                  </div>
                  <p className="text-white font-bold">Dejon Justine</p>
                  <p className="text-sm text-gray-400">Treasurer & Safety Auditor</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="/assets/generated/sig-johann.dim_600x200.png"
                      alt="Johann G. Thekkel Signature"
                      className="h-16 w-auto"
                    />
                  </div>
                  <p className="text-white font-bold">Johann G. Thekkel</p>
                  <p className="text-sm text-gray-400">Lead Architect</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Document Date: February 16, 2026
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
