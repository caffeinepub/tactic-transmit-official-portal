import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useGetCallerUserProfile } from '../../hooks/useCurrentUserProfile';
import ProfileSetupModal from '../auth/ProfileSetupModal';

export default function ConnectGatewaySection() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showProfileSetup, setShowProfileSetup] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched) {
      if (userProfile === null) {
        setShowProfileSetup(true);
      } else {
        navigate({ to: '/admin' });
      }
    }
  }, [isAuthenticated, userProfile, profileLoading, isFetched, navigate]);

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      setShowProfileSetup(false);
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
    navigate({ to: '/admin' });
  };

  return (
    <>
      <section className="py-20 container mx-auto px-6">
        <div className="glass-panel p-12 rounded-3xl max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            The Connect Gateway
          </h2>
          <p className="text-gray-400 text-center mb-8 text-lg">
            Secure access for authorized personnel
          </p>

          <div className="glass-panel-strong p-8 rounded-2xl border-2 border-neon-blue/30">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-neon-blue/20 rounded-full mb-4">
                <span className="text-neon-blue font-bold tracking-wider text-sm">
                  ADMINISTRATIVE ACCESS
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                {isAuthenticated
                  ? 'You are authenticated. Access the dashboard or logout.'
                  : 'Authenticate with Internet Identity to access the admin dashboard.'}
              </p>
            </div>

            <button
              onClick={handleAuth}
              disabled={isLoggingIn}
              className="w-full py-4 px-6 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-neon-blue/30"
            >
              {isLoggingIn ? 'Authenticating...' : isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </section>

      <ProfileSetupModal
        open={showProfileSetup}
        onComplete={handleProfileComplete}
      />
    </>
  );
}
