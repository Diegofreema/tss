import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchSession } from '../services';
import { useStudent } from '../store/useStudent';

export const useGetSession = () => {
  const token = useAuth((state) => state.user?.token!);
  const student = useStudent((state) => state.student!);

  return useQuery({
    queryKey: ['session', token, student.regnum],
    queryFn: async () => {
      return await fetchSession({ token, regnum: student.regnum });
    },
    retry: 3,
  });
};
