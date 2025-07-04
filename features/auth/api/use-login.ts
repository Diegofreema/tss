import { useAuth } from '@/features/shared/store/use-auth';
import { toast } from '@/features/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { login } from '../services';
import { LoginType } from '../types';

export const useLogin = () => {
  const getUser = useAuth((state) => state.getUser);
  return useMutation({
    mutationFn: async ({ email, password }: LoginType) => {
      const data = await login({ email, password });
      return data;
    },
    onSuccess: (data) => {
      getUser(data);
      toast(`Success, welcome back ${data.name} `, 'success');
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
