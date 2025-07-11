import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchClasses } from '../services';
import { useStudent } from '../store/useStudent';

export const useGetClasses = () => {
  const token = useAuth((state) => state.user?.token!);
  const student = useStudent((state) => state.student!);

  return useQuery({
    queryKey: ['classes', token, student.regnum],
    queryFn: async () => {
      return await fetchClasses({ token, regnum: student.regnum });
    },
    retry: 3,
  });
};
