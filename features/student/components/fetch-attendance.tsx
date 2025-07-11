import { LoadingBar } from '@/features/shared/components/loading-bar';
import { LoadingCard } from '@/features/shared/components/loading-card';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useGetAttendance } from '../api/use-get-attendance';
import { useGetTerms } from '../api/user-get-terms';
import { useStudent } from '../store/useStudent';
import { TermSingleType } from '../types';
import { RenderAttendance } from './render-attendance';

export const FetchAttendance = () => {
  const student = useStudent((state) => state.student);
  const {
    data: terms,
    isPending: isPendingTerms,
    isError: isErrorTerms,
  } = useGetTerms({ regnum: student?.regnum as string });
  console.log({ terms });

  const { data, isPending, isError } = useGetAttendance({
    regnum: student?.regnum!,
    term: terms?.data[0]!,
  });
  const [term, setTerm] = React.useState<TermSingleType>(
    (terms?.data[0] as TermSingleType) || 'First Term'
  );
  const { width } = useWindowDimensions();
  const cardWidth = width - 30; // Assuming a margin of 20 on each side
  if (isError || isErrorTerms) {
    throw new Error('Failed to fetch attendance data');
  }
  console.log({ isPending, isPendingTerms });

  if (isPending || isPendingTerms) {
    return (
      <>
        <LoadingBar />
        <LoadingCard height={250} width={cardWidth} />
      </>
    );
  }

  return <RenderAttendance data={data.data} setTerm={setTerm} term={term} />;
};
