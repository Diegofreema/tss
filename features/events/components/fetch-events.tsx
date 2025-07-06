import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { useAuth } from '@/features/shared/store/use-auth';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useFetchEvents } from '../api/use-get-events';
type Props = {
  page?: number;
  pageSize?: number;
  horizontal?: boolean;
};
export const FetchEvents = ({
  page = 1,
  pageSize = 5,
  horizontal = false,
}: Props) => {
  const token = useAuth((state) => state.user?.token!);
  const { width } = useWindowDimensions();
  const { data, isError, isPending } = useFetchEvents({
    page,
    pageSize,
    token,
  });

  //   if (isError) {
  //     throw new Error('Failed to get data');
  //   }

  const _width = width * 0.7 - 30;
  if (true) {
    return (
      <LoadingLists
        horizontal
        renderItem={() => <LoadingCard width={_width} height={200} />}
      />
    );
  }
};
