import { CardHeader } from '@/components/card';
import { Colors } from '@/constants/Colors';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/features/shared/components/custom-card';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Entypo } from '@expo/vector-icons';
import { format } from 'date-fns';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SummaryType } from '../types';

type Props = {
  item: SummaryType;
};

export const RenderSummary = ({ item }: Props) => {
  const monthDay = format(item.date1, 'MMM');
  const day = format(item.date1, 'd');

  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].icon;
  const onPress = () => {
    router.push(`/assignment-detail?testid=${item.testid}`);
  };
  return (
    <CustomPressable onPress={onPress}>
      <Card>
        <CardContent>
          <CardHeader>
            <Stack direction="row" gap={10} alignItems="center">
              <Stack>
                <NormalText>{monthDay}</NormalText>
                <MediumText style={styles.day}>{day}</MediumText>
              </Stack>
              <Stack flex={1}>
                <NormalText style={styles.text}>Home work</NormalText>
                <MediumText style={styles.subject}>
                  {item.subjectName}
                </MediumText>
              </Stack>
              <Entypo name="chevron-right" color={iconColor} size={25} />
            </Stack>
          </CardHeader>
          <CardFooter>
            <Stack
              backgroundColor={colors.purple}
              p={10}
              flex={1}
              style={{ borderRadius: 10 }}
            >
              <NormalText style={{ color: colors.white }}>
                Submission
              </NormalText>
              <MediumText
                style={{ color: colors.white, fontSize: RFValue(15) }}
              >
                {format(item.date2, 'PPP')}
              </MediumText>
            </Stack>
          </CardFooter>
        </CardContent>
      </Card>
    </CustomPressable>
  );
};

const styles = StyleSheet.create({
  day: {
    fontSize: RFValue(20),
  },
  month: {
    fontSize: RFValue(15),
  },
  subject: {
    fontSize: RFValue(18),
  },
  text: {
    fontSize: RFValue(9),
    fontFamily: 'PublicSans-Medium',
  },
});
