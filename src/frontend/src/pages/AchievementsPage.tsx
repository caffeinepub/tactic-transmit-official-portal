export default function AchievementsPage() {
  const achievements = [
    {
      title: 'ARS Alpha Deployment',
      description: 'Successful 100% automation of the prayer and period cycle.',
      span: 'md:col-span-2',
    },
    {
      title: 'Zero-Drift Standard',
      description: 'Certified 30-day millisecond-perfect timing accuracy.',
      span: 'md:col-span-1',
    },
    {
      title: 'Hi-Fi Integration',
      description: 'Achievement of crystal-clear 24-bit audio across all campus nodes.',
      span: 'md:col-span-1',
    },
    {
      title: 'Dual-Core Optimization',
      description: 'Successful implementation of multi-threaded logic on the ESP32 platform.',
      span: 'md:col-span-2',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
            <span className="text-neon-blue font-bold tracking-wider text-sm">
              MILESTONES
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Wall of Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering achievements that define precision automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-panel-strong p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 ${achievement.span}`}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed flex-grow">
                  {achievement.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-green-400 font-semibold tracking-wide">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
