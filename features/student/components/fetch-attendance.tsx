import { LoadingBar } from '@/features/shared/components/loading-bar';
import { LoadingCard } from '@/features/shared/components/loading-card';
import { Spacer } from '@/features/shared/components/spacer';
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
  } = useGetTerms();
  const { data, isPending, isError } = useGetAttendance({
    regnum: student?.regnum!,
    term: terms?.data[0]!,
  });
  const [term, setTerm] = React.useState<TermSingleType>(
    (terms?.data[0] as TermSingleType) ?? 'First Term'
  );
  const { width } = useWindowDimensions();
  const cardWidth = width - 30; // Assuming a margin of 20 on each side
  if (isError || isErrorTerms) {
    throw new Error('Failed to fetch attendance data');
  }

  if (isPending || isPendingTerms) {
    return (
      <>
        <LoadingBar />
        <Spacer size={8} />
        <LoadingCard height={250} width={cardWidth} />
      </>
    );
  }

  return <RenderAttendance data={data.data} setTerm={setTerm} term={term} />;
};
