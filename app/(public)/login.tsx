import { AuthTitle } from '@/features/auth/components/auth-title';
import { LoginForm } from '@/features/auth/components/form/login-form';
import { Spacer } from '@/features/shared/components/spacer';
import { Wrapper } from '@/features/shared/components/ui/wrapper';

const Login = () => {
  return (
    <Wrapper>
      <Spacer size={80} />
      <AuthTitle
        title={'Sign in to Parent’s App'}
        subTitle={'Login to the parent app and get access to your account'}
      />

      <LoginForm />
    </Wrapper>
  );
};
export default Login;
