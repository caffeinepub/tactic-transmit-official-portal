import { type ReactNode } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { Navigate } from '@tanstack/react-router';

interface RequireAuthProps {
  children: ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { identity, loginStatus, isInitializing } = useInternetIdentity();

  if (isInitializing || loginStatus === 'logging-in') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-panel p-8 rounded-2xl">
          <p className="text-white">Initializing...</p>
        </div>
      </div>
    );
  }

  if (!identity) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
