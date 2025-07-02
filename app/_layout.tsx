import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import {useEffect} from "react";


SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PublicSansBold: require('../assets/fonts/PublicSans-Bold.ttf'),
    PublicSansMedium: require('../assets/fonts/PublicSans-Medium.ttf'),
    PublicSansRegular: require('../assets/fonts/PublicSans-Regular.ttf'),
  });


    useEffect(() => {
        if(loaded) {
          void SplashScreen.hideAsync()
        }
    }, [loaded]);
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
const isLoggedIn = false
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
          <Stack.Protected guard={isLoggedIn}>

        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(public)" options={{ headerShown: false }} />

          </Stack.Protected>

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
