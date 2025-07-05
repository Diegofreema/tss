import { NormalText } from '@/features/shared/components/typography';
import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useReset } from '../../api/use-reset';
import { CustomInput } from './input';
import { newPasswordSchema } from './validator';

export const NewPasswordForm = () => {
  const [secure, setSecure] = useState<boolean>(true);
  const { otp, email } = useLocalSearchParams<{ otp: string; email: string }>();
  const { mutateAsync } = useReset();
  const toggleSecure = () => setSecure(!secure);
  const [secure2, setSecure2] = useState<boolean>(true);
  const toggleSecure2 = () => setSecure2(!secure2);

  const {
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
    control,
    watch,
  } = useForm<z.infer<typeof newPasswordSchema>>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(newPasswordSchema),
  });
  const onSubmit = async (values: z.infer<typeof newPasswordSchema>) => {
    await mutateAsync(
      { otp, email, newPassword: values.password },
      {
        onSuccess: () => {
          router.replace('/login');
          reset();
        },
      }
    );
  };

  const password = watch('password');

  return (
    <Stack gap={30} mt={30}>
      <CustomInput
        control={control}
        errors={errors}
        name="password"
        placeholder="********"
        label="Password"
        password
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        autoCapitalize="none"
        leftIcon={
          <Feather name="lock" color={colors.placeholderGrey} size={20} />
        }
      />
      <CustomInput
        control={control}
        errors={errors}
        name="confirmPassword"
        placeholder="********"
        label="Confirm Password"
        password
        secureTextEntry={secure2}
        toggleSecure={toggleSecure2}
        autoCapitalize="none"
        leftIcon={
          <Feather name="lock" color={colors.placeholderGrey} size={20} />
        }
      />

      <Stack>
        <PassWordCheck
          valid={password.length >= 8}
          text={'Use at least 8 Characters'}
        />
        <PassWordCheck valid={/[A-Z]/.test(password)} text={'Use uppercase'} />
        <PassWordCheck
          valid={/[^A-Za-z0-9]/.test(password)}
          text={'Use special Characters'}
        />
      </Stack>

      <Button
        title="Reset Password"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        isLoading={isSubmitting}
      />
    </Stack>
  );
};

const PassWordCheck = ({ valid, text }: { valid: boolean; text: string }) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Feather
        name={valid ? 'check' : 'x'}
        size={20}
        color={valid ? 'green' : 'red'}
      />
      <NormalText style={{ color: valid ? 'black' : colors.placeholderGrey }}>
        {text}
      </NormalText>
    </Stack>
  );
};
