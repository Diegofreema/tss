import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchTerm } from '../services';

export const useGetTerms = ({ regnum }: { regnum: string }) => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['terms', token, regnum],
    queryFn: async () => {
      return await fetchTerm({ token, regnum });
    },
  });
};
