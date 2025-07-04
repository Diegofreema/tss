import { Toast, ToastType } from '@/components/toast';

export const toast = (title: string, type: ToastType) => {
  Toast.show(title, {
    type,
    position: 'top',
    action: undefined,
  });
};
