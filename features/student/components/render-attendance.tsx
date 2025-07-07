import { CustomSelect } from '@/features/shared/components/custom-select';
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
  console.log({ term });

  return (
    <Stack backgroundColor="transparent" gap={10}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Title title="Attendance" />
        <CustomSelect
          value={term}
          data={data.map((item) => item.term)}
          onSelect={(value) => setTerm(value as TermSingleType)}
        />
      </Stack>

      <ThemedView style={{ minHeight: 250 }}></ThemedView>
    </Stack>
  );
};
