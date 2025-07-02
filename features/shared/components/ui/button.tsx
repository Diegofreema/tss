import { ExpandableButton } from '@/features/shared/components/button/ExpandableButton';
import { colors } from '@/features/shared/constants';
import { useWindowDimensions } from 'react-native';

type Props = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({
  title,
  isLoading = false,
  onPress,
  disabled,
}: Props) => {
  const { width } = useWindowDimensions();
  return (
    <ExpandableButton
      disabled={disabled}
      title={title}
      borderRadius={5}
      width={width - 30}
      height={55}
      isLoading={isLoading}
      onPress={onPress}
      style={{ backgroundColor: colors.purple }}
    />
  );
};
