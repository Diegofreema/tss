import React from 'react';
import { NormalText } from './typography';
import { Stack } from './ui/stack';

type Props = {
  leftText: string;
  rightText: string | number;
};

export const FlexText = ({ leftText, rightText }: Props) => {
  return (
    <Stack
      width={'100%'}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <NormalText>{leftText}</NormalText>
      <NormalText>{rightText}</NormalText>
    </Stack>
  );
};
