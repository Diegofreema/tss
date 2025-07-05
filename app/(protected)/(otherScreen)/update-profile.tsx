import { ProfileForm } from '@/features/profile/components/form/profile-form';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';
import { ScrollView } from 'react-native';

const UpdateProfile = () => {
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ProfileForm />
      </ScrollView>
    </Wrapper>
  );
};

export default UpdateProfile;
