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
  const { data } = await axios.put<UpdateProfileTypeResponse>(
    `${baseUrl}/parent/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      phone,
      profesion,
      address,
      city,
      states,
      address2,
    }
  );
  return data;
};
