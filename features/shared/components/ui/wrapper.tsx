import { Colors } from '@/constants/Colors';
import { constantStyles } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].wrapper;
  return (
    <View style={[constantStyles.container, { backgroundColor }]}>
      {children}
    </View>
  );
};
