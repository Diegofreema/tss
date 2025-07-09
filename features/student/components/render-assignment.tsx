import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { View } from 'react-native';
import { SummaryType } from '../types';
import { RenderSummary } from './render-summary';

type Props = {
  data: SummaryType[];
};

export const RenderAssignments = ({ data }: Props) => {
  const renderItem = ({ item }: LegendListRenderItemProps<SummaryType>) => (
    <RenderSummary item={item} />
  );
  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={data}
        keyExtractor={(item, i) => item.testid + i}
        contentContainerStyle={{ gap: 20 }}
        renderItem={renderItem}
        recycleItems
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
