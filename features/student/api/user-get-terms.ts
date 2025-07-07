import { useAuth } from '@/features/shared/store/use-auth';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchTerm } from '../services';

export const useGetTerms = () => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['terms', token],
    queryFn: async () => {
      return await fetchTerm({ token });
    },
    retry: 3,
    placeholderData: keepPreviousData,
  });
};
