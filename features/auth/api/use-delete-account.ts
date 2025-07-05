import { useAuth } from '@/features/shared/store/use-auth';
import { toast } from '@/features/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { deleteAccount } from '../services';

export const useDeleteAccount = () => {
  const user = useAuth((state) => state.user);
  const clearUser = useAuth((state) => state.clearUser);
  return useMutation({
    mutationFn: async () => {
      const data = await deleteAccount({ token: user?.token! });
      return data;
    },
    onSuccess: (data) => {
      clearUser();

      toast(`Account deleted`, 'success');
    },
    onError: (error) => {
      toast(`An error occurred, Please try again later`, 'error');
    },
  });
};
