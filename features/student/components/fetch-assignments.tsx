import { LoadingCard } from '@/features/shared/components/loading-card';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useGetTest } from '../api/use-get-test';
import { useStudent } from '../store/useStudent';
import { RenderAssignments } from './render-assignment';

type Props = {
  horizontal?: boolean;
};
export const FetchAssignments = ({ horizontal }: Props) => {
  const student = useStudent((state) => state.student);
  const { data, isPending, isError } = useGetTest({
    classname: student?.classname!,
    regnum: student?.regnum!,
  });
  const { width } = useWindowDimensions();
  if (isError) {
    throw new Error('Failed to fetch assignments data');
  }
  if (isPending) {
    return <LoadingCard height={200} width={width - 30} />;
  }

  console.log({ data });

  return <RenderAssignments />;
};
