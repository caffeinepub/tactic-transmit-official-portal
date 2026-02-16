import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';

export default function AccessDeniedScreen() {
  const navigate = useNavigate();
  const { clear } = useInternetIdentity();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
    navigate({ to: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="glass-panel p-12 rounded-3xl max-w-2xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-4xl">🔒</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
        <p className="text-gray-300 mb-8 text-lg">
          You are authenticated but do not have administrative privileges to access this area.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate({ to: '/' })}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
          >
            Return Home
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-gradient-to-r from-neon-blue to-purple-500 hover:from-neon-blue/80 hover:to-purple-500/80 text-white font-bold rounded-xl transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
