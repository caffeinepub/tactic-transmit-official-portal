import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { MessageTerminalEntry } from '../backend';

export function useSubmitMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { from: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitMessageTerminalEntry(data.from, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messageTerminalEntries'] });
    },
  });
}

export function useGetAllMessages() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<MessageTerminalEntry[]>({
    queryKey: ['messageTerminalEntries'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllMessageTerminalEntries();
    },
    enabled: !!actor && !actorFetching,
  });
}
