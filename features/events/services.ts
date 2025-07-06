import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { EventFetchType, EventSuccessResponseType } from './types';

export const fetchEvents = async ({
  page,
  pageSize,
  token,
}: EventFetchType) => {
  console.log({ page, pageSize, token });

  const { data } = await axios.get<EventSuccessResponseType>(
    `${baseUrl}parents/events?page=${page}&pageSize=${2}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
