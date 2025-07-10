import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { Title } from '@/features/shared/components/title';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Link } from 'expo-router';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetTest } from '../api/use-get-test';
import { useStudent } from '../store/useStudent';
import { AssignmentsCarousel } from './assignment-carousel';
import { RenderAssignments } from './render-assignment';

type Props = {
  carousel?: boolean;
};
export const FetchAssignments = ({ carousel }: Props) => {
  const student = useStudent((state) => state.student);
  const {
    data,
    isPending,
    isError,

    refetch,
    isRefetching,
    isRefetchError,
  } = useGetTest({
    regnum: student?.regnum!,
  });
  const { width } = useWindowDimensions();

  if (isError || isRefetchError) {
    console.log('Failed to fetch assignments data');
  }
  if (isPending) {
    return (
      <LoadingLists
        renderItem={() => <LoadingCard height={200} width={width - 30} />}
        length={carousel ? 1 : 4}
      />
    );
  }

  const dataToRender = data?.data || [];

  return (
    <Stack flex={1}>
      {carousel && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Title title="Assignments" />
          <Link
            href="/assignments"
            style={{ color: colors.purple, fontSize: RFValue(9) }}
          >
            See All &gt;
          </Link>
        </Stack>
      )}
      {carousel ? (
        <AssignmentsCarousel data={dataToRender.splice(0, 5)} />
      ) : (
        <RenderAssignments
          data={dataToRender}
          onRefresh={refetch}
          refreshing={isRefetching}
        />
      )}
    </Stack>
  );
};
