import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchStudent } from '../services';

export const useGetStudent = () => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['students', token],
    queryFn: async () => {
      return await fetchStudent({ token });
    },
    retry: 3,
  });
};
