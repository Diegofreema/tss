import { AnimatedCheckbox } from '@/components/check-box/CheckBox';
import { Colors } from '@/constants/Colors';
import { NormalButton } from '@/features/shared/components/normal-button';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { Header } from '@/features/shared/components/ui/header';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { AssignmentType } from '../types';

type Props = {
  data: AssignmentType;
};
export const RenderAssignments = ({ data }: Props) => {
  const colorScheme = useColorScheme();
  const questionColor = Colors[colorScheme ?? 'light'].question;
  const borderColor = Colors[colorScheme ?? 'light'].icon;
  const textColor = Colors[colorScheme ?? 'light'].text;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const _width = width / 2; // Adjust width for padding/margin
  const [selectedAnswers, setSelectedAnswers] = useState<
    Map<number, 'A' | 'B' | 'C'>
  >(new Map());

  // Safely access the current question
  const question = data.questions[currentIndex] || {
    numberz: 0,
    question: '',
    OptionA: '',
    OptionB: '',
    OptionC: '',
    answer: 'A',
  };
  const totalQuestions = data.totalQuestions;

  const current = currentIndex + 1;
  const isFirstQuestion = current === 1;
  const isLastQuestion = current === totalQuestions;
  const selectedOption: 'A' | 'B' | 'C' | undefined = selectedAnswers.get(
    question.numberz
  );

  const handleOptionSelect = (option: 'A' | 'B' | 'C'): void => {
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = new Map(prev);
      newSelectedAnswers.set(question.numberz, option);
      return newSelectedAnswers;
    });
  };

  const handleNext = (): void => {
    if (!selectedOption) {
      Alert.alert(
        'Please select an answer',
        'You must select an answer before proceeding.'
      );
      return;
    }
    if (current < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isLastQuestion) {
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    if (!selectedOption) {
      Alert.alert(
        'Please select an answer',
        'You must select an answer before submitting.'
      );
      return;
    }
    // Calculate results based on correct answers
    const score = data.questions.reduce((acc, q) => {
      const userAnswer = selectedAnswers.get(q.numberz);
      return acc + (userAnswer === q.answer ? 1 : 0);
    }, 0);
    Alert.alert('Quiz Results', `You scored ${score} out of ${totalQuestions}`);
    // Reset to the first question after submission
    setCurrentIndex(0);
    setSelectedAnswers(new Map());
  };

  const renderOption = (
    optionKey: 'A' | 'B' | 'C',
    optionText: string
  ): React.ReactElement => {
    const isSelected = selectedOption === optionKey;
    const optionValue = {
      A: question.OptionA,
      B: question.OptionB,
      C: question.OptionC,
    }[optionKey];

    return (
      <AnimatedCheckbox
        key={optionKey}
        label={optionValue}
        checked={isSelected}
        onPress={() => handleOptionSelect(optionKey)}
        size={20}
        borderRadius={10}
        activeColor={colors.purple}
        inactiveColor="transparent"
        borderColor={borderColor}
        borderWidth={1}
        checkMarkColor={colors.white}
        animationDuration={200}
        bounceEffect={true}
        containerStyle={[styles.checkboxRow, { borderColor }]}
        labelStyle={[styles.labelRequired, { color: textColor }]}
      />
    );
  };
  const handlePrevious = (): void => {
    if (isFirstQuestion) {
      Alert.alert('First Question', 'This is the first question.');
      return;
    }
    if (!selectedOption) {
      Alert.alert(
        'Please select an answer',
        'You must select an answer before moving back.'
      );
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 20 }}
    >
      <Header title={data.subjectName} />
      {/* <Spacer size={2} /> */}
      <NormalText style={[styles.questionNumber, { color: questionColor }]}>
        Question {currentIndex + 1} of {data.totalQuestions}
      </NormalText>
      <Animated.View key={question.question} entering={SlideInLeft}>
        <MediumText>{question.question}</MediumText>
        <Stack gap={10} mt={10}>
          <NormalText style={[styles.questionNumber, { color: questionColor }]}>
            Options
          </NormalText>
          <Stack gap={20}>
            {['A', 'B', 'C'].map((key) =>
              renderOption(key as 'A' | 'B' | 'C', '')
            )}
          </Stack>
        </Stack>
      </Animated.View>
      <Stack style={styles.navigationContainer}>
        <Stack direction="row" justifyContent="space-between" gap={10}>
          <NormalButton
            buttonText="Previous"
            onPress={handlePrevious}
            disabled={isFirstQuestion}
          />
          {isLastQuestion ? (
            <NormalButton buttonText="Submit" onPress={handleSubmit} />
          ) : (
            <NormalButton
              buttonText="Next"
              onPress={handleNext}
              disabled={!selectedOption}
            />
          )}
        </Stack>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  questionNumber: {
    fontSize: RFValue(12),
  },
  checkboxRow: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  labelRequired: {
    fontSize: RFValue(13),
    color: '#fafafa',
    fontFamily: 'PublicSans-Medium',
    marginLeft: 12,
    lineHeight: 20,
  },
  progressContainer: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  questionContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e9ecef',
    backgroundColor: '#ffffff',
  },
  selectedOption: {
    borderColor: '#007bff',
    backgroundColor: '#e7f3ff',
  },
  optionText: {
    fontSize: 16,
    color: '#495057',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#007bff',
    fontWeight: '600',
  },
  navigationContainer: {},
  navigationButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
