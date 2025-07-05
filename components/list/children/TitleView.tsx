import { Stack } from '@/features/shared/components/ui/stack';
import * as React from 'react';

interface TitleViewProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleViewProps> &
  React.FunctionComponent<TitleViewProps> = ({
  children,
}): React.ReactNode & React.JSX.Element => {
  return (
    <Stack flex={1} justifyContent="center" ml={4}>
      {children}
    </Stack>
  );
};
