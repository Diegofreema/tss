import { useAuth } from '@/features/shared/store/use-auth';
import { toast } from '@/features/shared/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitAssignments } from '../service';
import { SubmitAssignmentsType } from '../types';

export const useSubmitAssignment = () => {
  const token = useAuth((state) => state.user?.token);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ answers, regnum, testid }: SubmitAssignmentsType) => {
      return await submitAssignments({ answers, regnum, testid, token });
    },
    onSuccess: (data) => {
      toast(`${data.data.subject} assignment submitted`, 'success');
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
    onError: (error) => {
      console.log(error.message);

      toast(`An error occurred, Please try again later`, 'error');
    },
  });
};
