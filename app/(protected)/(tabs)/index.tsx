import { ThemedText } from '@/features/shared/components/ThemedText';
import { Button } from '@/features/shared/components/ui/button';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { useAuth } from '@/features/shared/store/use-auth';

export default function HomeScreen() {
  const { user, clearUser } = useAuth();
  console.log({ user });

  return (
    <Wrapper>
      <ThemedText>{user?.name}</ThemedText>
      <Button title="Logout" onPress={clearUser} />
    </Wrapper>
  );
}
