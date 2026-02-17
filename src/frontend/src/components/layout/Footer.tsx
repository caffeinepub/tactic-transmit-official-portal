import { useNavigate } from '@tanstack/react-router';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'tactic-transmit');

  const primaryNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Technical Data', path: '/legal' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="relative z-10 glass-panel border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {primaryNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className="hover:text-neon-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="status-indicator-green"></div>
              <span className="text-green-400 font-semibold tracking-wide">SYSTEM STATUS: ● OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-indicator-green"></div>
              <span className="text-green-400 font-semibold tracking-wide">NETWORK: ● UNRESTRICTED</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <button
              onClick={() => navigate({ to: '/privacy' })}
              className="hover:text-neon-blue transition-colors"
            >
              Privacy
            </button>
          </div>

          <div className="text-sm text-gray-400">
            Built with <span className="text-red-400">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {currentYear} Tactic Transmit. All designs are the joint intellectual property of the Founders.
        </div>
      </div>
    </footer>
  );
}
