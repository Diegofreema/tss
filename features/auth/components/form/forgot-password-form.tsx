import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRequestPasswordReset } from '../../api/use-request-reset-password';
import { CustomInput } from './input';
import { forgotPasswordSchema } from './validator';

export const ForgotPassword = () => {
  const router = useRouter();
  const { mutateAsync } = useRequestPasswordReset();
  const {
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    await mutateAsync(
      { email: values.email },
      {
        onSuccess: () => {
          router.push(`/verify-token?email=${values.email}`);
          reset();
        },
      }
    );
  };
  return (
    <Stack gap={30} mt={30}>
      <CustomInput
        control={control}
        errors={errors}
        name="email"
        placeholder="Johndoe@gmail.com"
        label="Email"
        type="email-address"
        leftIcon={
          <Feather name="mail" color={colors.placeholderGrey} size={20} />
        }
      />
      <Button
        title={'Next'}
        onPress={handleSubmit(onSubmit)}
        isLoading={isSubmitting}
      />
    </Stack>
  );
};
