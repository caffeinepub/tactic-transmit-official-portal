import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../../hooks/useCurrentUserProfile';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Phone, Mail } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import ProfileSetupModal from '../auth/ProfileSetupModal';
import AccessGrantedEmailModal from './AccessGrantedEmailModal';

export default function FoundersVault() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [showAccessGranted, setShowAccessGranted] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isProfileComplete =
    userProfile !== null &&
    userProfile !== undefined &&
    userProfile.name.trim() !== '' &&
    userProfile.email.trim() !== '';

  const isUnlocked = isAuthenticated && isProfileComplete;

  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, userProfile, profileLoading, isFetched]);

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      setShowProfileSetup(false);
      setShowAccessGranted(false);
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const handleProfileComplete = () => {
    setShowProfileSetup(false);
    const hasSeenEmail = localStorage.getItem('tt-access-granted-seen');
    if (!hasSeenEmail) {
      setShowAccessGranted(true);
      localStorage.setItem('tt-access-granted-seen', 'true');
    }
  };

  return (
    <>
      <div className="glass-panel-strong p-8 rounded-2xl border border-white/10">
        {isUnlocked ? (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-4">
                <span className="text-green-400 font-bold tracking-wider text-sm">
                  ACCESS GRANTED
                </span>
              </div>
              <p className="text-gray-300 text-sm">Secure contact details unlocked</p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-xl border border-neon-blue/20 flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Official Phone</p>
                  <p className="text-white font-semibold">+91 7356824245</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-neon-blue/20 flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Official Email</p>
                  <p className="text-white font-semibold">tactic.transmit@gmail.com</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-neon-blue/20 flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <SiInstagram className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Instagram</p>
                  <p className="text-white font-semibold">@tactic_transmit</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleAuth}
              className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full mb-4">
                <span className="text-yellow-400 font-bold tracking-wider text-sm">
                  RESTRICTED ACCESS
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Sign up to unlock the Tactic Transmit direct contact line.
              </p>
            </div>

            <button
              onClick={handleAuth}
              disabled={isLoggingIn}
              className="w-full py-4 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-neon-blue/30"
            >
              {isLoggingIn ? 'Authenticating...' : 'Access Secure Contact Details'}
            </button>
          </div>
        )}
      </div>

      <ProfileSetupModal open={showProfileSetup} onComplete={handleProfileComplete} />
      <AccessGrantedEmailModal
        open={showAccessGranted}
        onClose={() => setShowAccessGranted(false)}
      />
    </>
  );
}
