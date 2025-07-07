import {
  Card,
  CardContent,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { FlexText } from '@/features/shared/components/flex-text';
import { Stack } from '@/features/shared/components/ui/stack';
import { CAType } from '../types';

type Props = {
  ca: CAType;
};
export const Ca = ({ ca }: Props) => {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <Stack gap={10}>
            <FlexText leftText="Subject" rightText={ca.subjectName} />
            <FlexText leftText="Session" rightText={ca.sessions.toString()} />
            <FlexText leftText="Term" rightText={ca.terms.toString()} />
            <FlexText leftText="First CA" rightText={ca.ca1.toString()} />
            <FlexText leftText="Second CA" rightText={ca.ca2.toString()} />
            <FlexText leftText="Third CA" rightText={ca.ca3.toString()} />
            <FlexText leftText="Class" rightText={ca.classes.toString()} />
            <FlexText leftText="Exam" rightText={ca.exam.toString()} />
            <FlexText leftText="Total" rightText={ca.total.toString()} />
          </Stack>
        </CardHeader>
      </CardContent>
    </Card>
  );
};
