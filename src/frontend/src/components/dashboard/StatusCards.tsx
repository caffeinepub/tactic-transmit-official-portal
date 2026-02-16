import { useDashboardStatus } from '../../hooks/useDashboardStatus';
import { Activity, Clock } from 'lucide-react';

export default function StatusCards() {
  const { data: status, isLoading, error } = useDashboardStatus();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map((i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl animate-pulse">
            <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
            <div className="h-10 bg-white/10 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-panel p-8 rounded-2xl mb-8 border border-red-500/30">
        <p className="text-red-400">Failed to load dashboard status</p>
      </div>
    );
  }

  const uptimeSeconds = status ? Number(status.uptime) / 1_000_000_000 : 0;
  const uptimeMinutes = Math.floor(uptimeSeconds / 60);
  const uptimeHours = Math.floor(uptimeMinutes / 60);
  const uptimeDays = Math.floor(uptimeHours / 24);

  const formatUptime = () => {
    if (uptimeDays > 0) return `${uptimeDays}d ${uptimeHours % 24}h`;
    if (uptimeHours > 0) return `${uptimeHours}h ${uptimeMinutes % 60}m`;
    if (uptimeMinutes > 0) return `${uptimeMinutes}m`;
    return `${Math.floor(uptimeSeconds)}s`;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="glass-panel p-8 rounded-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-neon-blue" />
          </div>
          <h3 className="text-xl font-bold text-white">Live Uptime</h3>
        </div>
        <p className="text-4xl font-bold text-neon-blue">{formatUptime()}</p>
        <p className="text-gray-400 text-sm mt-2">System operational time</p>
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <Activity className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">NTP Status</h3>
        </div>
        <p className="text-4xl font-bold text-green-400">{status?.ntpStatus || 'Unknown'}</p>
        <p className="text-gray-400 text-sm mt-2">Network time synchronization</p>
      </div>
    </div>
  );
}
