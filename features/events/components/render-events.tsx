import { MediumText } from '@/features/shared/components/typography';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import React from 'react';
import { View } from 'react-native';
import { EventSuccessResponseType, EventTypes } from '../types';
import { RenderEvent } from './render-event';

type Props = {
  data: EventSuccessResponseType;
  horizontal?: boolean;
  width: number;
  height: number;
};

export const RenderEvents = ({ data, horizontal, height, width }: Props) => {
  const renderItem = ({ item }: LegendListRenderItemProps<EventTypes>) => (
    <RenderEvent item={item} height={height} width={width} />
  );

  const isHorizontal = !!horizontal && data.data.length > 0;

  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={data.data}
        renderItem={renderItem}
        horizontal={isHorizontal}
        keyExtractor={(item, i) => item.ref}
        contentContainerStyle={{ gap: 15 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        recycleItems
        ListEmptyComponent={() => (
          <MediumText style={{ textAlign: 'center' }}>No events yet</MediumText>
        )}
      />
    </View>
  );
};
