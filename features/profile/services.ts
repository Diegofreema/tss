import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { UpdateProfileType, UpdateProfileTypeResponse } from './types';

export const updateProfile = async ({
  token,
  address,
  city,
  phone,
  profesion,
  states,
  address2,
}: UpdateProfileType & { token: string }) => {
  console.log({ token });

  const { data } = await axios.put<UpdateProfileTypeResponse>(
    `${baseUrl}/parents/me`,
    {
      phone,
      profesion,
      address,
      city,
      states,
      address2,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
