import { CustomInput } from '@/features/auth/components/form/input';
import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { useAuth } from '@/features/shared/store/use-auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUpdateProfile } from '../../api/update-profile';
import { updateSchema } from '../../validator';

export const ProfileForm = () => {
  const user = useAuth((state) => state.user);

  const { mutateAsync } = useUpdateProfile();
  const {
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof updateSchema>>({
    defaultValues: {
      ...user,
    },
    resolver: zodResolver(updateSchema),
  });

  const onSubmit = async (data: z.infer<typeof updateSchema>) => {
    await mutateAsync(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <Stack mt={20} gap={20}>
      <CustomInput
        control={control}
        errors={errors}
        name="city"
        placeholder="City"
        label="City"
      />
      <CustomInput
        control={control}
        errors={errors}
        name="phone"
        placeholder="Phone number"
        label="Contact"
      />
      <CustomInput
        control={control}
        errors={errors}
        name="profesion"
        placeholder="Profession"
        label="Profession"
      />
      <CustomInput
        control={control}
        errors={errors}
        name="address"
        placeholder="Address"
        label="Address"
      />
      <CustomInput
        control={control}
        errors={errors}
        name="address2"
        placeholder="Address 2"
        label="Address 2"
      />
      <Button
        title="Update"
        onPress={handleSubmit(onSubmit)}
        isLoading={isSubmitting}
      />
    </Stack>
  );
};
