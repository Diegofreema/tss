import { useFirstTime } from '@/hooks/use-first-time';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const PublicLayout = () => {
  const isFirstTime = useFirstTime((state) => state.isFirstTime);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isFirstTime}>
          <Stack.Screen name="index" />
        </Stack.Protected>
      </Stack>
    </SafeAreaView>
  );
};
export default PublicLayout;
