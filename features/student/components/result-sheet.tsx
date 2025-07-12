import { CustomSelect } from '@/features/shared/components/custom-select';
import { NormalText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React, { useState } from 'react';
import { useGetClasses } from '../api/use-get-classes';
import { useGetSession } from '../api/use-get-session';
import { LoadingResultSheet } from './loading-result-sheet';

export const ResultSheet = () => {
  const {
    data: sessionData,
    isError: isSessionError,
    isPending: isSessionPending,
  } = useGetSession();
  const {
    data: classData,
    isError: isClassError,
    isPending: isClassPending,
  } = useGetClasses();
  const [session, setSession] = useState(sessionData?.data[0] || '');
  const [singleClass, setSingleClass] = useState(classData?.data[0] || '');
  if (isSessionError || isClassError) {
    throw new Error('Error fetching session or class');
  }
  if (isSessionPending || isClassPending) {
    return <LoadingResultSheet />;
  }

  return (
    <Wrapper>
      <Stack direction="row" gap={5} alignItems="flex-start" width={'100%'}>
        <Stack gap={5} flex={1}>
          <NormalText>Academic session</NormalText>
          <CustomSelect
            data={sessionData?.data || []}
            onSelect={setSession}
            value={session.substring(0, 13) + '...'}
            flex={1}
          />
        </Stack>
        <Stack gap={5} flex={1}>
          <NormalText>Class</NormalText>
          <CustomSelect
            data={classData?.data || []}
            onSelect={setSingleClass}
            value={singleClass}
            flex={1}
          />
        </Stack>
      </Stack>
    </Wrapper>
  );
};
