export default function WelcomeNarrativeSection() {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              THE VISION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to the Pulse
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Tactic Transmit is the bridge between institutional chaos and chronometric order. We
            provide the heartbeat that keeps ARS running perfectly.
          </p>
          <p className="text-right text-sm text-gray-400 italic">
            — Nandhukrishna Biju, Brand Strategist
          </p>
        </div>
      </div>
    </section>
  );
}
