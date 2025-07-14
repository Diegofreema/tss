import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { MediumText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Dimensions, FlatList } from 'react-native';
import { useGetStudent } from '../api/use-get-student';
import { useStudent } from '../store/useStudent';
import { SummaryType } from '../types';
import { RenderSummary } from './render-summary';
import { StudentMenu } from './student-menu';

type Props = {
  data: SummaryType[];
  refreshing: boolean;
  onRefresh: () => void;
  navigate?: boolean;
};
const { width } = Dimensions.get('window');
export const RenderAssignments = ({
  data,
  onRefresh,
  refreshing,
  navigate = true,
}: Props) => {
  const student = useStudent((state) => state.student);
  const { data: studentData, isPending, isError } = useGetStudent();
  if (isError) {
    throw new Error('Failed to get student data');
  }
  if (isPending) {
    return (
      <LoadingLists
        renderItem={() => <LoadingCard height={150} width={width - 30} />}
      />
    );
  }
  return (
    <FlatList
      data={data}
      style={{ flex: 1 }}
      keyExtractor={(item, i) => item.testid}
      contentContainerStyle={{ gap: 20, flexGrow: 1 }}
      renderItem={({ item }) => (
        <RenderSummary item={item} navigate={navigate} />
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={() => (
        <Stack
          flex={1}
          alignItems="center"
          justifyContent="center"
          width={'100%'}
        >
          <MediumText style={{ textAlign: 'center' }}>
            No assignments yet for {student?.fname}
          </MediumText>
          <Stack
            style={{
              borderWidth: 0.5,
              borderColor: colors.grey,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <StudentMenu students={studentData?.data || []} />
          </Stack>
        </Stack>
      )}
    />
  );
};
