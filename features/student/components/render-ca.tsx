import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { MediumText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { Dimensions, View } from 'react-native';
import { useGetStudent } from '../api/use-get-student';
import { useStudent } from '../store/useStudent';
import { CAType } from '../types';
import { Ca } from './ca';
import { StudentMenu } from './student-menu';

type Props = {
  data: CAType[];
  isRefetching?: boolean;
  refetch: () => void;
};
const { width } = Dimensions.get('window');
export const RenderCAs = ({ data, refetch, isRefetching }: Props) => {
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
  const renderItem = ({ item }: LegendListRenderItemProps<CAType>) => (
    <Ca ca={item} />
  );
  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={data}
        onRefresh={refetch}
        refreshing={isRefetching}
        renderItem={renderItem}
        recycleItems
        contentContainerStyle={{ paddingBottom: 50, gap: 15 }}
        keyExtractor={(item, i) => item.subjectName + i}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Stack
            flex={1}
            alignItems="center"
            justifyContent="center"
            width={'100%'}
          >
            <MediumText style={{ textAlign: 'center', marginTop: 50 }}>
              No Continuous Assessment data found for {student?.fname}
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
    </View>
  );
};
