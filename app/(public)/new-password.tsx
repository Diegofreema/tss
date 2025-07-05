import { AuthTitle } from '@/features/auth/components/auth-title';
import { NewPasswordForm } from '@/features/auth/components/form/new-password-form';
import { Spacer } from '@/features/shared/components/spacer';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';

const NewPasswordScreen = () => {
  return (
    <Wrapper>
      <Header />
      <Spacer size={30} />
      <AuthTitle
        title="Create New password"
        subTitle="Create a strong password for your account"
      />
      <NewPasswordForm />
    </Wrapper>
  );
};

export default NewPasswordScreen;
