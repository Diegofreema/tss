import { NormalText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { CommentsType } from '../types';

type Props = {
  comments: CommentsType;
};
export const RenderComment = ({ comments }: Props) => {
  return (
    <Stack>
      <NormalText>Form Teacher: {comments.formTeacher || 'N/A'}</NormalText>
      <NormalText>Head Teacher: {comments.headTeacher}</NormalText>
    </Stack>
  );
};
