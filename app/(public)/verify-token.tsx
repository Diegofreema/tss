import { AuthTitle } from '@/features/auth/components/auth-title';
import { AppleOTPInput } from '@/features/auth/components/form/otp';
import { Spacer } from '@/features/shared/components/spacer';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { Button } from '@/features/shared/components/ui/button';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { Header } from '@/features/shared/components/ui/header';
import { Stack } from '@/features/shared/components/ui/stack';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { colors } from '@/features/shared/constants';
import { useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const VerifyToken = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onPress = () => {};

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const startTimer = useCallback(() => {
    setTimeLeft(60); // Reset to 60 seconds
  }, []);
  const resend = () => {
    setIsSubmitting(true);
    startTimer();
  };
  useEffect(() => {
    if (timeLeft <= 0) return; // Stop if timer reaches 0

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId); // Clear interval when timer reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    // Cleanup interval on unmount or when timeLeft changes
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  const disabled = isSubmitting || timeLeft > 0;
  const buttonText = isSubmitting
    ? 'Resending...'
    : timeLeft > 0
    ? `Wait ${timeLeft}s`
    : 'Resend';
  return (
    <Wrapper>
      <Header />
      <Spacer size={10} />
      <AuthTitle
        title={'Enter code'}
        subTitle={`We have sent code to ${email}`}
      />
      <Stack mt={30} gap={20}>
        <AppleOTPInput />
        <NormalText style={{ lineHeight: 20 }}>
          Didn&apos;t receive code?
        </NormalText>
        <CustomPressable onPress={resend} disabled={disabled}>
          <MediumText
            style={{
              fontSize: RFValue(10),
              color: colors.purple,
              opacity: disabled ? 0.5 : 1,
            }}
          >
            {buttonText}
          </MediumText>
        </CustomPressable>
        <Button title="Next" onPress={onPress} disabled={disabled} />
      </Stack>
    </Wrapper>
  );
};

export default VerifyToken;
