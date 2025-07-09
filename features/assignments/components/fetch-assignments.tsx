import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { useStudent } from '@/features/student/store/useStudent';
import { useLocalSearchParams } from 'expo-router';
import { useWindowDimensions } from 'react-native';
import { useGetAssignments } from '../api/use-get-assignments';
import { RenderAssignments } from './render-assignments';

export const FetchAssignments = () => {
  const student = useStudent((state) => state.student);
  const { testid } = useLocalSearchParams<{ testid: string }>();
  const { data, isError, isPending, error } = useGetAssignments({
    regnum: student?.regnum!,
    testid,
  });
  console.log({ error });
  const { width } = useWindowDimensions();
  if (isError) {
    console.log('Error fetching assignments:', error);
  }
  if (isPending) {
    return (
      <LoadingLists
        horizontal={false}
        renderItem={() => <LoadingCard height={200} width={width - 30} />}
      />
    );
  }
  console.log(data);
  return <RenderAssignments data={data?.data!} />;
};
