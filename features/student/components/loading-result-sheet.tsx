import { LoadingBar } from '@/features/shared/components/loading-bar';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { Stack } from '@/features/shared/components/ui/stack';
import React from 'react';

export const LoadingResultSheet = () => {
  return (
    <Stack flex={1} gap={5} pl={15} pr={15}>
      <Stack direction="row" gap={5}>
        <LoadingBar />

        <LoadingBar />
      </Stack>
      <LoadingLists renderItem={() => <LoadingBar />} length={6} />
    </Stack>
  );
};
