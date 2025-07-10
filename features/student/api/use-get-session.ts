import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchSession } from '../services';

export const useGetSession = () => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['session', token],
    queryFn: async () => {
      return await fetchSession({ token });
    },
    retry: 3,
  });
};
