import { useNavigate } from '@tanstack/react-router';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'tactic-transmit');

  const publicNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Product', path: '/product' },
    { label: 'Board', path: '/board' },
    { label: 'Connect', path: '/connect' },
  ];

  return (
    <footer className="relative z-10 glass-panel border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {publicNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className="hover:text-neon-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="status-indicator-green"></div>
            <span className="text-green-400 font-semibold tracking-wide">SYSTEM: OPERATIONAL.</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <button
              onClick={() => navigate({ to: '/terms' })}
              className="hover:text-neon-blue transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate({ to: '/privacy' })}
              className="hover:text-neon-blue transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate({ to: '/legal' })}
              className="hover:text-neon-blue transition-colors"
            >
              Legal Docs
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

        <div className="mt-6 text-center text-xs text-gray-500">
          © {currentYear} TACTIC TRANSMIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
