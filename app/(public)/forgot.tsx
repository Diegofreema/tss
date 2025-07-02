import { AuthTitle } from '@/features/auth/components/auth-title';
import { ForgotPassword } from '@/features/auth/components/form/forgot-password-form';
import { Spacer } from '@/features/shared/components/spacer';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';

const ForgotPasswordScreen = () => {
  return (
    <Wrapper>
      <Header />
      <Spacer size={10} />
      <AuthTitle
        title="Forgot Password"
        subTitle="Remember Password? "
        linkText="Log in"
        href={'/login'}
      />
      <ForgotPassword />
    </Wrapper>
  );
};

export default ForgotPasswordScreen;
