export default function ProductDeepDivePage() {
  const components = [
    {
      name: 'ESP32-WROOM-32',
      title: 'The Processing Core',
      image: '/assets/generated/tt1-macro-esp32.dim_1400x900.png',
      description:
        'Features an integrated Dual-Core Xtensa® 32-bit LX6 microprocessor. We utilize "Task Pinning" logic—one core handles the Wi-Fi stack and NTP time-fetching, while the second core runs the time-critical audio interrupts. This prevents the "system stutter" found in cheaper, single-core bell systems.',
    },
    {
      name: 'DS3231 High-Precision RTC',
      title: 'The Chronometric Heart',
      image: '/assets/generated/tt1-macro-ds3231.dim_1400x900.png',
      description:
        'This module uses an Integrated Temperature-Compensated Crystal Oscillator (TCXO). Standard clocks drift as the room temperature changes; the TT-1 stays accurate within ±2 minutes per year, even in extreme conditions.',
    },
    {
      name: 'DFPlayer Mini (FN-M16P)',
      title: 'The Auditory Engine',
      image: '/assets/generated/tt1-macro-dfplayer.dim_1400x900.png',
      description:
        'It decodes FAT16 and FAT32 file systems. By bypassing standard buzzing sounds and using a 24-bit DAC (Digital-to-Analog Converter), we achieve a Signal-to-Noise Ratio (SNR) of 85dB, providing studio-grade announcement quality.',
    },
    {
      name: '1kΩ Impedance Matching Resistors',
      title: 'The Safety Manifold',
      image: '/assets/generated/tt1-macro-protection.dim_1400x900.png',
      description:
        'Engineered by Dejon Justine, this stage acts as a Galvanic-style isolation buffer. It matches the low-voltage output of the microcontroller to the high-impedance input of the campus amplifier, eliminating "Pop" noises and protecting the school\'s hardware from DC offset.',
    },
  ];

  return (
    <div className="pt-20 min-h-screen relative">
      {/* Blueprint Background */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/tt1-blueprint-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            TT-1 Time Transmitter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Hardware Ecosystem: A technical deep-dive into precision engineering
          </p>
        </div>

        <div className="space-y-20">
          {components.map((component, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="glass-panel-strong p-2 rounded-2xl border border-neon-blue/30">
                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-2">
                  <span className="text-neon-blue font-bold tracking-wider text-sm">
                    {component.title.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {component.name}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
