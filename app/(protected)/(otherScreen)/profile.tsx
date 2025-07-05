import { ProfileCard } from '@/features/more/components/profile-card';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';

const ProfileScreen = () => {
  return (
    <Wrapper>
      <Header />
      <ProfileCard />
    </Wrapper>
  );
};

export default ProfileScreen;
