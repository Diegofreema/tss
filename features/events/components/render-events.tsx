import { MediumText } from '@/features/shared/components/typography';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import React from 'react';
import { View } from 'react-native';
import { EventSuccessResponseType, EventTypes } from '../types';
import { RenderEvent } from './render-event';

type Props = {
  data: EventSuccessResponseType;
  horizontal?: boolean;
};

export const RenderEvents = ({ data, horizontal }: Props) => {
  const renderItem = ({ item }: LegendListRenderItemProps<EventTypes>) => (
    <RenderEvent item={item} />
  );

  console.log({ data });

  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={data.data}
        renderItem={renderItem}
        horizontal={horizontal}
        recycleItems
        ListEmptyComponent={() => (
          <MediumText style={{ textAlign: 'center' }}>No events yet</MediumText>
        )}
      />
    </View>
  );
};
