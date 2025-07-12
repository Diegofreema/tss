import { Text, View } from 'react-native';
import { TermInfoType } from '../types';

type Props = {
  termInfo: TermInfoType;
};

export const RenderInfo = ({ termInfo }: Props) => {
  return (
    <View>
      <Text> render-info</Text>
    </View>
  );
};
