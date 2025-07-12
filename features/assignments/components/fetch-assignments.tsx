import { LoadingBar } from '@/features/shared/components/loading-bar';
import { LoadingCard } from '@/features/shared/components/loading-card';
import { Spacer } from '@/features/shared/components/spacer';
import { useStudent } from '@/features/student/store/useStudent';
import { useLocalSearchParams } from 'expo-router';
import { useWindowDimensions } from 'react-native';
import { useGetAssignments } from '../api/use-get-assignments';
import { RenderAssignments } from './render-assignments';

export const FetchAssignments = () => {
  const student = useStudent((state) => state.student);
  const { testid } = useLocalSearchParams<{ testid: string }>();
  const { data, isError, isPending } = useGetAssignments({
    regnum: student?.regnum!,
    testid,
  });

  const { width } = useWindowDimensions();
  if (isError) {
    throw new Error('Failed to get assignment detail');
  }
  if (isPending) {
    return (
      <>
        <LoadingBar />
        <Spacer size={8} />
        <LoadingCard height={200} width={width - 30} />
        <Spacer size={8} />
        <LoadingBar />
      </>
    );
  }

  return <RenderAssignments data={data?.data!} />;
};
