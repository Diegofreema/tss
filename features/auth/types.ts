import { z } from 'zod';
import { loginSchema } from './scehma';

export type LoginType = z.infer<typeof loginSchema>;
export type LoginResponseType = {
  message: string;
  token: string;
  success: boolean;
};

export type VerifyOtpType = {
  email: string;
  otp: string;
};

export type ResetPasswordType = {
  email: string;
  newPassword: string;
  otp: string;
};
