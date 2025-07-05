import { Stack } from '@/features/shared/components/ui/stack';
import * as React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> &
  React.FunctionComponent<WrapperProps> = ({
  children,
}): React.ReactNode & React.JSX.Element => {
  return (
    <Stack p={3}>
      <Stack direction="row" alignItems="center" gap={5}>
        {children}
      </Stack>
    </Stack>
  );
};
