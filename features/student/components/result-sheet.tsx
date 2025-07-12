import { CustomSelect } from '@/features/shared/components/custom-select';
import { NormalText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useGetClasses } from '../api/use-get-classes';
import { useGetResultSheet } from '../api/use-get-result-sheet';
import { useGetSession } from '../api/use-get-session';
import { useGetTerms } from '../api/user-get-terms';
import { useStudent } from '../store/useStudent';
import { TermSingleType } from '../types';
import { LoadingResultSheet } from './loading-result-sheet';
import { RenderResultSheet } from './render-result-sheet';

export const ResultSheet = () => {
  const student = useStudent((state) => state.student);
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
  const {
    data: terms,
    isPending: isPendingTerms,
    isError: isErrorTerms,
  } = useGetTerms({ regnum: student?.regnum as string });
  const [term, setTerm] = useState<TermSingleType>(
    (terms?.data[0] as TermSingleType) ?? 'First Term'
  );
  const [singleClass, setSingleClass] = useState(classData?.data[0] || '');
  const { isError, isPending, data } = useGetResultSheet({
    term,
    session,
    classname: singleClass,
  });
  if (isSessionError || isClassError || isErrorTerms || isError) {
    throw new Error('Error fetching session or class');
  }
  if (isSessionPending || isClassPending || isPendingTerms || isPending) {
    return <LoadingResultSheet />;
  }

  console.log({
    comment: data.data.comments,
    school: data.data.school,
    student: data.data.student,
    termInfo: data.data.termInfo,
    scores: data.data.scores,
    termSummary: data.data.termSummary,
  });
  console.log(JSON.stringify(data.data, null, 2));

  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, gap: 20 }}
      >
        <View>
          <Stack gap={5}>
            <NormalText>Academic session</NormalText>
            <CustomSelect
              data={sessionData?.data || []}
              onSelect={setSession}
              value={session.substring(0, 13) + '...'}
              flex={1}
            />
          </Stack>
          <Stack gap={5}>
            <NormalText>Class</NormalText>
            <CustomSelect
              data={classData?.data || []}
              onSelect={setSingleClass}
              value={singleClass}
              flex={1}
            />
          </Stack>
          <Stack gap={5}>
            <NormalText style={{ color: 'white' }}>Term</NormalText>
            <CustomSelect
              data={terms?.data || []}
              onSelect={setTerm}
              value={term}
            />
          </Stack>
        </View>
        <RenderResultSheet data={data.data} />
      </ScrollView>
    </Wrapper>
  );
};
