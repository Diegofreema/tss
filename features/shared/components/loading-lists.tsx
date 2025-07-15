import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

type Props = {
  length?: number;
  renderItem: ListRenderItem<unknown>;
  horizontal?: boolean;
};

export const LoadingLists = ({
  renderItem,
  length = 4,
  horizontal = false,
}: Props) => {
  const data = Array.from({ length });
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      renderItem={renderItem}
      contentContainerStyle={{ gap: 20 }}
      horizontal={horizontal}
      showsVerticalScrollIndicator={false}
    />
  );
};
