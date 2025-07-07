import { ThemedView } from '@/features/shared/components/ThemedView';
import { Title } from '@/features/shared/components/title';
import { Stack } from '@/features/shared/components/ui/stack';
import { AttendanceType, TermSingleType } from '../types';

type Props = {
  data: AttendanceType[];
  term: TermSingleType;
  setTerm: (term: TermSingleType) => void;
};

export const RenderAttendance = ({ data, setTerm, term }: Props) => {
  console.log('Attendance Data:', data);

  return (
    <Stack backgroundColor="transparent" gap={10}>
      <Title title="Attendance" />
      <ThemedView style={{ minHeight: 250 }}></ThemedView>
    </Stack>
  );
};
