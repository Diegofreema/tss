import { FlexText } from '@/features/shared/components/flex-text';
import { Stack } from '@/features/shared/components/ui/stack';
import { ResultStudentType } from '../types';

type Props = {
  student: ResultStudentType;
};
export const RenderStudent = ({ student }: Props) => {
  return (
    <Stack>
      {/* <Image
        source={{ uri: student.image }}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
        contentFit="cover"
      /> */}
      <FlexText leftText="Name" rightText={student.name} />
      <FlexText leftText="Class" rightText={student.class} />
      <FlexText leftText="Arm" rightText={student.arm} />
      <FlexText leftText="Regnum" rightText={student.regnum} />
      <FlexText leftText="Attendance" rightText={student.attendance} />
    </Stack>
  );
};
