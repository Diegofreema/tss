import { FlexText } from '@/features/shared/components/flex-text';
import { NormalText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { TermSummaryType } from '../types';

type Props = {
  termSummary: TermSummaryType;
  classTermAverage: number;
};
export const RenderTermSummary = ({ termSummary, classTermAverage }: Props) => {
  return (
    <Stack gap={10}>
      <NormalText>Cumulative Summary</NormalText>
      <FlexText
        leftText="Student Term Total"
        rightText={termSummary.termTotal}
      />
      <FlexText
        leftText="Student Term Average"
        rightText={termSummary.termAverage}
      />
      <FlexText leftText="Term Grade" rightText={termSummary.termGrade} />
      <FlexText
        leftText="Class Term Total"
        rightText={termSummary.classTermTotal}
      />
      <FlexText
        leftText="Class Term Average"
        rightText={Math.round(classTermAverage)}
      />
      <FlexText
        leftText="Class Population"
        rightText={termSummary.classPopulation}
      />
      <FlexText
        leftText="Class Session Average"
        rightText={Math.round(termSummary.classSessionAvg)}
      />
      <FlexText
        leftText="Student Session Average"
        rightText={termSummary.studentSessionAvg}
      />
      <FlexText leftText="Session Grade" rightText={termSummary.sessionGrade} />
      <FlexText leftText="Next term fees" rightText={termSummary.fees} />
    </Stack>
  );
};
