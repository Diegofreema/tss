import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../constants';
import { NormalText } from './typography';
import { CustomPressable } from './ui/custom-pressable';

type Props = {
  onPress: () => void;
  buttonText: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
export const NormalButton = ({
  onPress,
  buttonText,
  disabled,
  textStyle,
  style,
}: Props) => {
  return (
    <CustomPressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: colors.purple, opacity: disabled ? 0.5 : 1 },
        style,
      ]}
      disabled={disabled}
    >
      <NormalText style={[{ color: colors.white }, textStyle]}>
        {buttonText}
      </NormalText>
    </CustomPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
});
