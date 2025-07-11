import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchTestSummary } from '../services';
import { FetchTestSummaryType } from '../types';

export const useGetTest = ({ regnum, status }: FetchTestSummaryType) => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['tests', token, regnum, status],
    queryFn: async () => {
      return await fetchTestSummary({ token, regnum, status });
    },
    retry: 3,
  });
};
