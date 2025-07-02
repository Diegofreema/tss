import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CustomInput } from './input';
import { loginSchema } from './validator';

export const LoginForm = () => {
  const [secure, setSecure] = useState<boolean>(true);
  const toggleSecure = () => setSecure(!secure);
  const {
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      password: '',
      email: '',
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    reset();
  };
  return (
    <Stack mt={20} gap={5}>
      <CustomInput
        control={control}
        errors={errors}
        name="email"
        placeholder="Johndoe@gmail.com"
        label="Email"
        type="email-address"
      />
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
      />
      <Button
        title={'Login'}
        onPress={handleSubmit(onSubmit)}
        isLoading={isSubmitting}
      />
    </Stack>
  );
};
