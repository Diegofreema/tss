import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';

import { fetchAssignments } from '../service';
import { FetchAssignmentResponseType } from '../types';

export const useGetAssignments = ({
  regnum,
  testid,
}: FetchAssignmentResponseType) => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['assignments', token, regnum, testid],
    queryFn: async () => {
      return await fetchAssignments({ token, regnum, testid });
    },
    retry: 3,
  });
};
