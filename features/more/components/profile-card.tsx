import {
  Card,
  CardContent,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { FlexText } from '@/features/shared/components/flex-text';
import { Stack } from '@/features/shared/components/ui/stack';
import { useAuth } from '@/features/shared/store/use-auth';
import React from 'react';

export const ProfileCard = () => {
  const { user } = useAuth();
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <Stack gap={10}>
            <FlexText leftText="Name" rightText={user?.name!} />
            <FlexText leftText="Email" rightText={user?.email!} />
          </Stack>
        </CardHeader>
        {/* <CardFooter>

        </CardFooter> */}
      </CardContent>
    </Card>
  );
};
