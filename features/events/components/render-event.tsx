import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { Spacer } from '@/features/shared/components/spacer';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { format } from 'date-fns';
import React from 'react';
import { EventTypes } from '../types';

type Props = {
  item: EventTypes;
  width: number;
  height: number;
};

export const RenderEvent = ({ item, height, width }: Props) => {
  return (
    <Card style={{ height, width }}>
      <CardContent>
        <Spacer size={20} />
        <CardHeader style={{ flex: 1 }}>
          <MediumText>{item.events}</MediumText>
        </CardHeader>
        <Spacer size={20} />
        <CardFooter>
          <NormalText>{format(item.date1, 'PPP')}</NormalText>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
