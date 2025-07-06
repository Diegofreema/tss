import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../services';
import { EventFetchType } from '../types';

export const useFetchEvents = (values: EventFetchType) => {
  return useQuery({
    queryKey: ['events', values.page, values.token, values.pageSize],
    queryFn: async () => {
      return await fetchEvents(values);
    },
    retry: 3,
  });
};
