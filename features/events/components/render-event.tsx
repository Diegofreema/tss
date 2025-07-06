import React from 'react';
import { Text, View } from 'react-native';
import { EventTypes } from '../types';

type Props = {
  item: EventTypes;
};

export const RenderEvent = ({ item }: Props) => {
  return (
    <View>
      <Text>RenderEvent</Text>
    </View>
  );
};
