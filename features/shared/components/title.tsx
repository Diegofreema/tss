import { RFValue } from 'react-native-responsive-fontsize';
import { MediumText } from './typography';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return <MediumText style={{ fontSize: RFValue(11) }}>{title}</MediumText>;
};
