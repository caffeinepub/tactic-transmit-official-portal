import Interactive3DComponentCard from '../components/product/Interactive3DComponentCard';

export default function ProductDeepDivePage() {
  const components = [
    {
      name: 'ESP32 Dual-Core (240MHz)',
      title: 'The Brain',
      image: '/assets/generated/tt1-macro-esp32.dim_1400x900.png',
      description:
        'Utilizes "Task Pinning" logic. Core 0 manages the Wi-Fi/NTP cloud synchronization, while Core 1 handles real-time audio interrupts to ensure zero-latency bells.',
    },
    {
      name: 'DS3231 High-Precision RTC',
      title: 'The Heart',
      image: '/assets/generated/tt1-macro-ds3231.dim_1400x900.png',
      description:
        'Includes a temperature-compensated crystal oscillator. This ensures that even in extreme heat or total power failure, the system time remains accurate to within ±2ppm.',
    },
    {
      name: '24-bit Hi-Fi DAC',
      title: 'The Voice',
      image: '/assets/generated/tt1-macro-dfplayer.dim_1400x900.png',
      description:
        'The auditory engine features an 85dB Signal-to-Noise ratio, delivering studio-quality prayers and announcements directly to the school\'s PA system.',
    },
    {
      name: '1kΩ Impedance Shield',
      title: 'The Safeguard',
      image: '/assets/generated/tt1-macro-protection.dim_1400x900.png',
      description:
        'A custom safety manifold designed by Dejon Justine. This protective buffer prevents electrical feedback and ensures the longevity of expensive campus amplifiers.',
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
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              THE TT-1 ECOSYSTEM
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            TT-1 Time Transmitter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive 3D component breakdown: Click to reveal technical specifications
          </p>
        </div>

        <div className="space-y-20">
          {components.map((component, index) => (
            <Interactive3DComponentCard
              key={index}
              {...component}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
