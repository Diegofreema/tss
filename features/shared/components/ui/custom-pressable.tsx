import { PropsWithChildren } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export const CustomPressable = ({
  children,
  onPress,
  style,
  disabled,
}: PropsWithChildren<Props>) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      hitSlop={20}
      onPress={onPress}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );
};
