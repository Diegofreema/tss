import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchAttendance } from '../services';
import { FetchAttendanceType } from '../types';

export const useGetAttendance = ({ regnum, term }: FetchAttendanceType) => {
  const token = useAuth((state) => state.user?.token!);

  return useQuery({
    queryKey: ['attendance', token, regnum, term],
    queryFn: async () => {
      return await fetchAttendance({ token, regnum, term });
    },
    retry: 3,
  });
};
