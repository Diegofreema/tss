import { NormalText } from '@/features/shared/components/typography';
import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface SubTitleProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const SubTitle: React.FC<SubTitleProps> &
  React.FunctionComponent<SubTitleProps> = ({
  children,
  style = {},
}): React.ReactNode & React.JSX.Element => {
  return (
    <NormalText style={[style as StyleProp<TextStyle>]}>
      {children as string}
    </NormalText>
  );
};
