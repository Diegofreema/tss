import { toast } from '@/features/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { requestPasswordReset } from '../services';

export const useRequestPasswordReset = () => {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const data = await requestPasswordReset(email);
      return data;
    },
    onSuccess: (data) => {
      toast(data.message, 'success');
    },
    onError: (error) => {
      console.log(error.message);

      if (error.message === 'Request failed with status code 404') {
        toast(`Email not found, Please try a different email`, 'error');
      } else {
        toast(`An error occurred, Please try again later`, 'error');
      }
    },
  });
};
