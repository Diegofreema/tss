import { CardHeader } from '@/components/card';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/features/shared/components/custom-card';
import { MediumText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Answer, QuestionType } from '../types';

type Props = {
  item: QuestionType;
  answers: Answer[];
};
export const PreviewQuestion = ({ item, answers }: Props) => {
  const isOptionSelected = (option: string) => {
    const selectedIndex = answers.findIndex(
      (answer) => answer.numberz === item.numberz
    );
    const formattedOption = option.split('n')[0] + 'n ' + option.split('n')[1];
    return answers[selectedIndex]?.yourAnswer === formattedOption;
  };
  const renderOption = (
    option: string,
    optionText: string
  ): React.ReactElement => {
    const isSelected = isOptionSelected(option);

    return (
      <MediumText
        style={[
          styles.labelRequired,
          { color: isSelected ? colors.purple : colors.black },
        ]}
      >
        {optionText}
      </MediumText>
    );
  };
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <MediumText>{item.question}</MediumText>
        </CardHeader>
        <CardFooter>
          <Stack gap={15} mt={10}>
            {['OptionA', 'OptionB', 'OptionC'].map((option) =>
              renderOption(option, item[option as keyof QuestionType] as string)
            )}
          </Stack>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  labelRequired: {
    fontSize: RFValue(13),
    fontFamily: 'PublicSans-Medium',
    lineHeight: 20,
  },
});
