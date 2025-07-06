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

  return (
    <View style={{ flex: 1 }}>
      <LegendList
        data={[
          {
            events: 'Exam start',
            date1: '2024-07-15T00:00:00.000Z',
            ref: 'DDSWYEHRHT',
          },
          {
            events: 'INTER-HOUSE SPORT',
            date1: '2024-03-09T00:00:00.000Z',
            ref: 'EQWIBXADTG',
          },
        ]}
        renderItem={renderItem}
        horizontal={horizontal}
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
