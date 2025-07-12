import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { FlexText } from '@/features/shared/components/flex-text';
import { NormalButton } from '@/features/shared/components/normal-button';
import { router } from 'expo-router';
import { Answer, SubmitAssignmentType } from '../types';

type RenderResultProps = {
  data: SubmitAssignmentType;
  finalAnswers: Answer[];
};
export const RenderResult = ({ data, finalAnswers }: RenderResultProps) => {
  console.log({ finalAnswers });

  return (
    <Card>
      <CardContent>
        <CardHeader style={{ flexDirection: 'column', gap: 10 }}>
          <FlexText leftText={'Name'} rightText={data.studentName} />
          <FlexText leftText={'Class'} rightText={data.classname} />
          <FlexText leftText={'Session'} rightText={data.session} />
          <FlexText leftText={'Attempted'} rightText={data.attempted} />
          <FlexText leftText={'Correct'} rightText={data.correct} />
          <FlexText leftText={'Summary'} rightText={data.scoreSummary} />
          <FlexText
            leftText={'Total questions'}
            rightText={data.totalQuestions}
          />
        </CardHeader>
        <CardFooter style={{ marginTop: 20 }}>
          <NormalButton
            buttonText="Done"
            onPress={() => router.replace('/assignments')}
          />
        </CardFooter>
      </CardContent>
    </Card>
  );
};
