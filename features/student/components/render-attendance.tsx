import { Colors } from '@/constants/Colors';
import { CustomSelect } from '@/features/shared/components/custom-select';
import { ThemedView } from '@/features/shared/components/ThemedView';
import { Title } from '@/features/shared/components/title';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import { AttendanceType, TermSingleType } from '../types';

// Define attendance status colors
const ATTENDANCE_COLORS = {
  PRESENT: '#8B5CF6',
  ABSENT: '#EF4444',
  CLASS_DAY: '#87CEEB',
  NO_CLASS: '#d9e1e8',
} as const;

// Define legend items
interface LegendItem {
  color: string;
  label: string;
}
interface AttendanceCalendarProps {
  attendanceData?: AttendanceType[];
  title?: string;
  subtitle?: string;
}

// Define the marked date configuration
interface MarkedDateConfig {
  selected: boolean;
  selectedColor: string;
  selectedTextColor: string;
}
const LEGEND_ITEMS: LegendItem[] = [
  { color: ATTENDANCE_COLORS.PRESENT, label: 'Present' },
  { color: ATTENDANCE_COLORS.ABSENT, label: 'Absent' },
  { color: ATTENDANCE_COLORS.CLASS_DAY, label: 'Class Day (No Data)' },
  { color: ATTENDANCE_COLORS.NO_CLASS, label: 'No Class' },
];

type Props = {
  data: AttendanceType[];
  term: TermSingleType;
  setTerm: (term: TermSingleType) => void;
  currentDate?: string;
};

export const RenderAttendance = ({
  data,
  setTerm,
  term,
  currentDate = new Date().toISOString().split('T')[0],
}: Props) => {
  console.log({ term });
  const dataToUse: AttendanceType[] = data.length > 0 ? data : [];
  const colorScheme = useColorScheme();
  const bg = Colors[colorScheme ?? 'light'].card;
  const textColor = Colors[colorScheme ?? 'light'].text;
  // Function to convert attendance data to marked dates format
  const formatAttendanceData = (data: AttendanceType[]): any => {
    const markedDates: any = {};

    data.forEach((record: AttendanceType) => {
      const date: string = new Date(record.date).toISOString().split('T')[0];

      const config: MarkedDateConfig = {
        selected: true,
        selectedTextColor: 'white',
        selectedColor: record.present
          ? ATTENDANCE_COLORS.PRESENT
          : ATTENDANCE_COLORS.ABSENT,
      };

      markedDates[date] = config;
    });

    return markedDates;
  };

  const markedDates: any = formatAttendanceData(dataToUse);
  const calendarTheme: Theme = {
    backgroundColor: bg,
    calendarBackground: bg,
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: bg,
    todayTextColor: '#00adf5',
    dayTextColor: textColor,
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: bg,
    arrowColor: colors.purple,
    disabledArrowColor: '#d9e1e8',
    monthTextColor: colors.purple,
    indicatorColor: 'blue',
    textDayFontFamily: 'System',
    textMonthFontFamily: 'System',
    textDayHeaderFontFamily: 'System',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 13,
  };
  return (
    <Stack backgroundColor="transparent" gap={10}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Title title="Attendance" />
        <CustomSelect
          value={term}
          data={data.map((item) => item.term)}
          onSelect={(value) => setTerm(value as TermSingleType)}
          flex={0}
        />
      </Stack>

      <ThemedView style={{ minHeight: 250 }}>
        <Calendar
          markedDates={markedDates}
          markingType="multi-dot"
          theme={calendarTheme}
          disableAllTouchEventsForDisabledDays={true}
          disableArrowLeft={false}
          disableArrowRight={false}
          style={styles.calendar}
        />
      </ThemedView>
    </Stack>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
    // 40% of screen height
    borderRadius: 8,
  },
});
