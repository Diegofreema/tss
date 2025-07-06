import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { StudentSuccessResponseType } from './types';

export const fetchEvents = async ({ token }: { token: string }) => {
  const { data } = await axios.get<StudentSuccessResponseType>(
    `${baseUrl}parents/parents/my-students`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
