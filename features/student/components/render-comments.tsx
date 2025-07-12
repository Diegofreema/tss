import { Stack } from '@/features/shared/components/ui/stack';
import { Text } from 'react-native';
import { CommentsType } from '../types';

type Props = {
  comments: CommentsType;
};
export const RenderComment = ({ comments }: Props) => {
  return (
    <Stack>
      <Text>Form Teacher: {comments.formTeacher || 'N/A'}</Text>
      <Text>Head Teacher: {comments.headTeacher}</Text>
    </Stack>
  );
};
