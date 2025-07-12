import { Text, View } from 'react-native';
import { Score } from '../types';

type Props = {
  scores: Score[];
};

export const RenderScores = ({ scores }: Props) => {
  return (
    <View>
      <Text> render-scores</Text>
    </View>
  );
};
