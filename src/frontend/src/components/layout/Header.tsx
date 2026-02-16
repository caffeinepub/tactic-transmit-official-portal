import { useNavigate } from '@tanstack/react-router';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { LOGO_PATH } from '../../constants/brand';

export default function Header() {
  const navigate = useNavigate();
  const { identity, clear } = useInternetIdentity();
  const queryClient = useQueryClient();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthenticated = !!identity;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Product', path: '/product' },
    { label: 'Board', path: '/board' },
    { label: 'Connect', path: '/connect' },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
    navigate({ to: '/' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <button
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="TACTIC TRANSMIT Home"
        >
          <div className="relative w-12 h-12">
            <img
              src={LOGO_PATH}
              alt="TT Logo"
              className="w-full h-full object-contain pulse-logo"
            />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-wider group-hover:text-neon-blue transition-colors">
            TACTIC TRANSMIT
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-neon-blue hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-red-400 hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-neon-blue transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-strong border-t border-white/10">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="px-4 py-3 text-left text-sm font-medium text-white/80 hover:text-neon-blue hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-4 py-3 text-left text-sm font-medium text-white/80 hover:text-red-400 hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
