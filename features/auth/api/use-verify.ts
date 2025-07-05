import { toast } from '@/features/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { verifyOtp } from '../services';
import { VerifyOtpType } from '../types';

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: async ({ email, otp }: VerifyOtpType) => {
      const data = await verifyOtp({ email, otp });
      return data;
    },
    onSuccess: (data) => {
      if (data.message === 'OTP verified') {
        toast('Otp verified successfully', 'success');
        router.push('/new-password');
      }
    },
    onError: (error) => {
      if (error.message === 'Request failed with status code 401') {
        toast(`Invalid credentials`, 'error');
      } else {
        toast(`An error occurred, Please try again later`, 'error');
      }
    },
  });
};
