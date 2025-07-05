import { ToastProviderWithViewport } from '@/components/toast';
import { useAuth } from '@/features/shared/store/use-auth';
import { useColorScheme } from '@/hooks/useColorScheme';
import NetInfo from '@react-native-community/netinfo';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import 'react-native-reanimated';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const { user } = useAuth();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PublicSansBold: require('../assets/fonts/PublicSans-Bold.ttf'),
    PublicSansMedium: require('../assets/fonts/PublicSans-Medium.ttf'),
    PublicSansRegular: require('../assets/fonts/PublicSans-Regular.ttf'),
  });
  useEffect(() => {
    Appearance.setColorScheme(colorScheme === 'dark' ? 'dark' : 'light');
  }, [colorScheme]);
  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  const isLoggedIn = !!user;
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <ToastProviderWithViewport>
          <Stack>
            <Stack.Protected guard={isLoggedIn}>
              <Stack.Screen
                name="(protected)"
                options={{ headerShown: false }}
              />
            </Stack.Protected>
            <Stack.Protected guard={!isLoggedIn}>
              <Stack.Screen name="(public)" options={{ headerShown: false }} />
            </Stack.Protected>
          </Stack>
        </ToastProviderWithViewport>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
