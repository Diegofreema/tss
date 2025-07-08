import { ThemedView } from '@/features/shared/components/ThemedView';
import { Title } from '@/features/shared/components/title';
import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { router } from 'expo-router';

type Props = {
  horizontal?: boolean;
};

export const RenderAssignments = ({ horizontal }: Props) => {
  return (
    <Stack backgroundColor="transparent" gap={10}>
      <Title title="Assignments" />
      <ThemedView style={{ minHeight: 200 }}>
        <Button
          title="Assignment details"
          onPress={() => router.push('/assignment-detail')}
        />
      </ThemedView>
    </Stack>
  );
};
