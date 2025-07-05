import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/features/shared/components/ThemedView';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export const Header = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].icon;
  const onPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <ThemedView style={styles.container}>
      <CustomPressable onPress={onPress} style={styles.button}>
        <Feather name="chevrons-left" size={24} color={iconColor} />
      </CustomPressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  button: {
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
