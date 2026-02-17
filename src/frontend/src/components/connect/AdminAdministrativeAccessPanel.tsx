import { Shield, LogIn, LogOut } from 'lucide-react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export default function AdminAdministrativeAccessPanel() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const isAuthenticated = !!identity;
  const disabled = loginStatus === 'logging-in' || isLoggingIn;

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login();
      // Navigate to admin after successful login
      navigate({ to: '/admin' });
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.message === 'User is already authenticated') {
        await clear();
        setTimeout(() => handleLogin(), 300);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await clear();
    // Clear all cached data on logout
    window.location.reload();
  };

  return (
    <div className="glass-panel-strong p-8 rounded-2xl border border-neon-blue/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-neon-blue/20 rounded-lg">
          <Shield className="w-6 h-6 text-neon-blue" />
        </div>
        <h3 className="text-2xl font-bold text-white">ADMINISTRATIVE ACCESS</h3>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {isAuthenticated
          ? 'You are currently authenticated. Access the admin dashboard or log out.'
          : 'Secure login for authorized personnel only. Authentication via Internet Identity.'}
      </p>

      {isAuthenticated ? (
        <div className="space-y-4">
          <button
            onClick={() => navigate({ to: '/admin' })}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all"
          >
            <Shield className="w-5 h-5" />
            Open Admin Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          disabled={disabled}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogIn className="w-5 h-5" />
          {disabled ? 'Authenticating...' : 'Login with Internet Identity'}
        </button>
      )}

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="text-xs text-gray-400 leading-relaxed">
          This portal uses Internet Identity for secure, privacy-preserving authentication.
          Only authorized administrators can access the dashboard.
        </p>
      </div>
    </div>
  );
}
