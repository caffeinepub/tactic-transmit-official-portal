import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactInfo() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<string>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getContactInfo();
    },
    enabled: !!actor && !actorFetching,
  });
}
