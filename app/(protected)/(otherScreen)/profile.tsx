import { ProfileCard } from '@/features/more/components/profile-card';
import { Spacer } from '@/features/shared/components/spacer';
import { BoldText } from '@/features/shared/components/typography';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';

const ProfileScreen = () => {
  return (
    <Wrapper>
      <Header />
      <BoldText>Profile</BoldText>
      <Spacer />
      <ProfileCard />
    </Wrapper>
  );
};

export default ProfileScreen;
