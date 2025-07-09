import { LoadingCard } from '@/features/shared/components/loading-card';
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
  const { data, isPending, isError, error } = useGetTest({
    regnum: student?.regnum!,
  });
  const { width } = useWindowDimensions();
  console.log(error?.message);

  if (isError) {
    console.log('Failed to fetch assignments data');
  }
  if (isPending) {
    return <LoadingCard height={200} width={width - 30} />;
  }

  console.log({ data });

  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Title title="Assignments" />
        <Link
          href="/assignments"
          style={{ color: colors.purple, fontSize: RFValue(9) }}
        >
          See All &gt;
        </Link>
      </Stack>
      {carousel ? (
        <AssignmentsCarousel
          data={[
            {
              testid: 'MVNKWNSELEPI',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
            {
              testid: 'MVNKWNSELEPIe',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
            {
              testid: 'MVNKWNSELEPIee',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
          ]}
        />
      ) : (
        <RenderAssignments
          data={[
            {
              testid: 'MVNKWNSELEPI',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
            {
              testid: 'MVNKWNSELEPI',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
            {
              testid: 'MVNKWNSELEPI',
              assesment: 'First CA',
              date1: '2025-07-07T16:45:00.000Z',
              date2: '2025-07-09T16:40:00.000Z',
              subjectName: 'TECH',
              regnum: 'LTS-2025-3202K',
              studentName: 'david freeman',
            },
          ]}
        />
      )}
    </Stack>
  );
};
