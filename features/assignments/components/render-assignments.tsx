import { Text, View } from 'react-native';
import { AssignmentType } from '../types';

type Props = {
  data: AssignmentType;
};
export const RenderAssignments = ({ data }: Props) => {
  return (
    <View>
      <Text> render-assignments</Text>
    </View>
  );
};
