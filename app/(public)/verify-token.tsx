import { useRequestPasswordReset } from '@/features/auth/api/use-request-reset-password';
import { useVerifyOtp } from '@/features/auth/api/use-verify';
import { AuthTitle } from '@/features/auth/components/auth-title';
import { AppleOTPInput } from '@/features/auth/components/form/otp';
import { LoadingModal } from '@/features/shared/components/modal/loading-modal';
import { Spacer } from '@/features/shared/components/spacer';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
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

  const { mutateAsync, isPending } = useRequestPasswordReset();
  const { mutateAsync: verifyToken, isPending: isVerifying } = useVerifyOtp();
  const onComplete = async (code: string) => {
    await verifyToken({ email, otp: code });
  };

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const startTimer = useCallback(() => {
    setTimeLeft(60); // Reset to 60 seconds
  }, []);
  const resend = () => {
    mutateAsync(
      { email },
      {
        onSuccess: () => {
          startTimer();
        },
      }
    );
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
  const disabled = isPending || timeLeft > 0;
  const buttonText = isPending
    ? 'Resending...'
    : timeLeft > 0
    ? `Wait ${timeLeft}s`
    : 'Resend';
  return (
    <Wrapper>
      <LoadingModal visible={isVerifying} />
      <Header />
      <Spacer size={10} />
      <AuthTitle
        title={'Enter code'}
        subTitle={`We have sent code to ${email}`}
      />
      <Stack mt={30} gap={20}>
        <AppleOTPInput onComplete={onComplete} />
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
      </Stack>
    </Wrapper>
  );
};

export default VerifyToken;
