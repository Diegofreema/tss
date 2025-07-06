import { Colors } from '@/constants/Colors';
import { constantStyles } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
};
export const Wrapper = ({ children, style }: PropsWithChildren<Props>) => {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].wrapper;
  return (
    <View style={[constantStyles.container, { backgroundColor }, style]}>
      {children}
    </View>
  );
};
