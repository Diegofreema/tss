import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { View } from 'react-native';
import { CAType } from '../types';
import { Ca } from './ca';

type Props = {
  data: CAType[];
};
export const RenderCAs = ({ data }: Props) => {
  const renderItem = ({ item }: LegendListRenderItemProps<CAType>) => (
    <Ca ca={item} />
  );
  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={data}
        renderItem={renderItem}
        recycleItems
        contentContainerStyle={{ paddingBottom: 50, gap: 15 }}
        keyExtractor={(item, i) => item.subjectName + i}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
