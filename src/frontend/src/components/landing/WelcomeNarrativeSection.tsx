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
          <p className="text-xl italic border-l-4 border-neon-blue pl-6">
            "At Tactic Transmit, we don't just measure time; we command it. We have engineered a standard where human error is obsolete, and institutional synchronization is absolute."
          </p>
          <p className="text-right text-sm text-gray-400">
            — Nandhu Krishna Biju, Brand Strategist
          </p>
          <div className="pt-6 mt-6 border-t border-white/10">
            <p className="text-center text-xl font-semibold text-white">
              Bridging the gap between legacy school systems and the digital future of ARS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
