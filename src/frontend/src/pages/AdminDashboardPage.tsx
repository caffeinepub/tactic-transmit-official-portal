import { useGetCallerUserProfile } from '../hooks/useCurrentUserProfile';
import StatusCards from '../components/dashboard/StatusCards';
import ContactModule from '../components/dashboard/ContactModule';

export default function AdminDashboardPage() {
  const { data: userProfile } = useGetCallerUserProfile();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-panel p-8 rounded-3xl mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Welcome back, {userProfile?.name || 'Administrator'}
          </p>
        </div>

        <StatusCards />
        <ContactModule />
      </div>
    </div>
  );
}
