import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchCA } from '../services';
import { FetchCAType } from '../types';

export const useGetCA = ({ regnum, term, classname, session }: FetchCAType) => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['ca', token, regnum, term, session, classname],
    queryFn: async () => {
      return await fetchCA({ token, regnum, term, classname, session });
    },
    retry: 3,
  });
};
