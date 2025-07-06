import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { EventFetchType, EventSuccessResponseType } from './types';

export const fetchEvents = async ({
  page,
  pageSize,
  token,
}: EventFetchType) => {
  const { data } = await axios.get<EventSuccessResponseType>(
    `${baseUrl}parents/events?page=${page}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
