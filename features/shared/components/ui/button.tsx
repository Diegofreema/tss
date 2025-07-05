import { ExpandableButton } from '@/features/shared/components/button/ExpandableButton';
import { colors } from '@/features/shared/constants';
import { useWindowDimensions } from 'react-native';

type Props = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  w?: number;
};

export const Button = ({
  title,
  isLoading = false,
  onPress,
  disabled,
  w = 30,
}: Props) => {
  const { width } = useWindowDimensions();
  return (
    <ExpandableButton
      disabled={disabled}
      title={title}
      borderRadius={5}
      width={width - w}
      height={55}
      isLoading={isLoading}
      onPress={onPress}
      style={{ backgroundColor: colors.purple }}
    />
  );
};
