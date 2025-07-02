import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProtectedLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};
export default ProtectedLayout;
