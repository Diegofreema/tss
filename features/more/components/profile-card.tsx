import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { FlexText } from '@/features/shared/components/flex-text';
import { Button } from '@/features/shared/components/ui/button';
import { Stack } from '@/features/shared/components/ui/stack';
import { useAuth } from '@/features/shared/store/use-auth';
import { router } from 'expo-router';
import React from 'react';

export const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <Card>
      <CardContent>
        <CardHeader>
          <Stack gap={10}>
            <FlexText leftText="Name" rightText={user?.fname!} />
            <FlexText leftText="Email" rightText={user?.email!} />
            <FlexText leftText="Phone" rightText={user?.phone || 'N/A'} />
            <FlexText leftText="Address" rightText={user?.address!} />
            <FlexText
              leftText="Address 2"
              rightText={user?.address2 || 'N/A'}
            />
            <FlexText leftText="City" rightText={user?.city || 'N/A'} />
            <FlexText leftText="State" rightText={user?.states || 'N/A'} />
            <FlexText
              leftText="Profession"
              rightText={user?.profesion || 'N/A'}
            />
          </Stack>
        </CardHeader>
        <CardFooter style={{ marginTop: 20 }}>
          <Button
            w={60}
            title="Update profile"
            onPress={() => router.push('/update-profile')}
          />
        </CardFooter>
      </CardContent>
    </Card>
  );
};
