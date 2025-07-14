import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { Stack } from '@/features/shared/components/ui/stack';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useGetTest } from '../api/use-get-test';
import { useStudent } from '../store/useStudent';
import { RenderAssignments } from './render-assignment';

type Props = {
  status: 'pending' | 'completed' | 'elapsed';
  navigate?: boolean;
};

export const FetchAssignments = ({ status, navigate }: Props) => {
  const student = useStudent((state) => state.student);
  const { data, isPending, isError, refetch, isRefetching, isRefetchError } =
    useGetTest({
      regnum: student?.regnum!,
      status,
    });
  const { width } = useWindowDimensions();

  if (isError || isRefetchError) {
    console.log('Failed to fetch assignments data');
  }
  if (isPending) {
    return (
      <LoadingLists
        renderItem={() => <LoadingCard height={200} width={width - 30} />}
        length={4}
      />
    );
  }

  const dataToRender = data?.data || [];

  return (
    <Stack flex={1}>
      <RenderAssignments
        data={dataToRender}
        onRefresh={refetch}
        refreshing={isRefetching}
        navigate={navigate}
      />
    </Stack>
  );
};
