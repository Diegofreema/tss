import { ThemedView } from '@/features/shared/components/ThemedView';
import { Title } from '@/features/shared/components/title';
import { Stack } from '@/features/shared/components/ui/stack';

type Props = {};

export const RenderAssignments = ({}: Props) => {
  return (
    <Stack backgroundColor="transparent" gap={10}>
      <Title title="Assignments" />
      <ThemedView style={{ minHeight: 200 }}></ThemedView>
    </Stack>
  );
};
