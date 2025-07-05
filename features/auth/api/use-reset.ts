import { toast } from '@/features/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../services';
import { ResetPasswordType } from '../types';

export const useReset = () => {
  return useMutation({
    mutationFn: async ({ email, newPassword, otp }: ResetPasswordType) => {
      const data = await resetPassword({ email, otp, newPassword });
      return data;
    },
    onSuccess: (data) => {
      if (data.message === 'Password reset successful') {
        toast(`Password reset successfully`, 'success');
      }
    },
    onError: () => {
      toast(`An error occurred, Please try again later`, 'error');
    },
  });
};
