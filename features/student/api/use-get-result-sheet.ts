import { useAuth } from '@/features/shared/store/use-auth';
import { useQuery } from '@tanstack/react-query';
import { fetchResultSheet } from '../services';
import { useStudent } from '../store/useStudent';

export const useGetResultSheet = ({
  term,
  session,
  classname,
}: {
  term: string;
  session: string;
  classname: string;
}) => {
  const token = useAuth((state) => state.user?.token!);
  const student = useStudent((state) => state.student!);

  return useQuery({
    queryKey: ['resultSheet', token, student.regnum, term, session, classname],
    queryFn: async () => {
      return await fetchResultSheet({
        token,
        regnum: student.regnum,
        classname,
        session,
        term,
      });
    },
    retry: 3,
  });
};
