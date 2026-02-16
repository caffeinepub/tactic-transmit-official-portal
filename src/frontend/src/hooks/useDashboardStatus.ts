import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { DashboardStatus } from '../backend';

export function useDashboardStatus() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<DashboardStatus>({
    queryKey: ['dashboardStatus'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getDashboardStatus();
    },
    enabled: !!actor && !actorFetching,
    refetchInterval: 30000, // Refresh every 30 seconds
  });
}
