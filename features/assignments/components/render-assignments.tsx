import { LoadingModal } from '@/features/shared/components/modal/loading-modal';
import { Header } from '@/features/shared/components/ui/header';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSubmitAssignment } from '../api/use-submit-assignment';
import { Answer, AssignmentType } from '../types';
import { AssignmentComponent } from './assignmentComponent';
import { RenderResult } from './render-result';

type Props = {
  data: AssignmentType;
};

export const RenderAssignments = ({ data }: Props) => {
  const { data: responseData, mutateAsync, isPending } = useSubmitAssignment();
  const [showResult, setShowResult] = useState(true);
  const handleSubmit = async (answers: Answer[]) => {
    await mutateAsync(
      {
        answers,
        regnum: data.regnum,
        testid: data.testid,
      },
      {
        onSuccess: () => {
          setShowResult(true);
        },
      }
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 20 }}
    >
      <LoadingModal visible={isPending} />
      <Header title={data.subjectName} />
      {showResult ? (
        <RenderResult data={responseData?.data!} />
      ) : (
        <AssignmentComponent
          onSubmit={handleSubmit}
          questions={data.questions}
          totalQuestions={data.totalQuestions}
        />
      )}
    </ScrollView>
  );
};
