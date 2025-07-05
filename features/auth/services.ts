import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { SuccessResponseType, User } from '../shared/types';
import { LoginResponseType, LoginType, VerifyOtpType } from './types';
export const login = async ({ email, password }: LoginType) => {
  const { data } = await axios.post<LoginResponseType>(
    `${baseUrl}/auth/login`,
    {
      email,
      password,
    }
  );

  return currentUser(data.token);
};

export const currentUser = async (token: string) => {
  const { data } = await axios.get<User>(`${baseUrl}/parents/current-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const requestPasswordReset = async (email: string) => {
  const { data } = await axios.post<SuccessResponseType>(
    `${baseUrl}/auth/request-reset`,
    {
      email,
    }
  );
  return data;
};

export const verifyOtp = async ({ email, otp }: VerifyOtpType) => {
  const { data } = await axios.post<SuccessResponseType>(
    `${baseUrl}/auth/verify-otp`,
    {
      email,
      otp,
    }
  );
  return data;
};
