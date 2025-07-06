import { LoadingBar } from '@/features/shared/components/loading-bar';
import { MediumText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { useAuth } from '@/features/shared/store/use-auth';
import React, { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetStudent } from '../api/use-get-student';
import { useStudent } from '../store/useStudent';
import { StudentMenu } from './student-menu';

export const FetchStudent = () => {
  const fname = useAuth((state) => state.user?.fname!);
  const getStudent = useStudent((state) => state.getStudent);
  const { data, isPending, isError } = useGetStudent();

  useEffect(() => {
    if (!isError && !isPending && Array.isArray(data?.data)) {
      getStudent(data?.data[0]);
    }
  }, [isError, isPending, data?.data, getStudent]);
  if (isError) {
    throw new Error('Failed to get data');
  }
  if (isPending) {
    return <LoadingBar />;
  }

  return (
    <Stack direction="row" justifyContent="space-between" mt={5}>
      <MediumText
        style={{ fontSize: RFValue(14), flex: 1 }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {fname}
      </MediumText>
      <StudentMenu students={data.data} />
    </Stack>
  );
};
