import { MediumText } from '@/features/shared/components/typography';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { View } from 'react-native';
import { CAType } from '../types';
import { Ca } from './ca';

type Props = {
  data: CAType[];
  isRefetching?: boolean;
  refetch: () => void;
};
export const RenderCAs = ({ data, refetch, isRefetching }: Props) => {
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
          <MediumText style={{ textAlign: 'center', marginTop: 50 }}>
            No Continuous Assessment data found
          </MediumText>
        )}
      />
    </View>
  );
};
