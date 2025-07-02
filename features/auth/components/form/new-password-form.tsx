import { NormalText } from '@/features/shared/components/typography';
import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CustomInput } from './input';
import { newPasswordSchema } from './validator';

export const NewPasswordForm = () => {
  const [secure, setSecure] = useState<boolean>(true);
  const toggleSecure = () => setSecure(!secure);
  const [secure2, setSecure2] = useState<boolean>(true);
  const toggleSecure2 = () => setSecure2(!secure);

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
    console.log(values);
    reset();
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '', color: '' };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = [
      'bg-red-500',
      'bg-orange-500',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-green-500',
    ];

    return {
      strength,
      label: labels[strength - 1] || '',
      color: colors[strength - 1] || '',
    };
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
