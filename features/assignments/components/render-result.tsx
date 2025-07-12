import { Colors } from '@/constants/Colors';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { NormalButton } from '@/features/shared/components/normal-button';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Feather } from '@expo/vector-icons';
import * as Print from 'expo-print';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Answer, QuestionType, SubmitAssignmentType } from '../types';

import { FlexText } from '@/features/shared/components/flex-text';
import { savePDFToDevice } from '@/features/student/utils';
import { useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
type RenderResultProps = {
  data: SubmitAssignmentType;
  finalAnswers: Answer[];
  questions: QuestionType[];
};
export const RenderResult = ({
  data,
  finalAnswers,
  questions,
}: RenderResultProps) => {
  console.log({ finalAnswers });
  const colorScheme = useColorScheme() ?? 'light';
  const questionColor = Colors[colorScheme].question;
  const formattedQuestions = questions.map((q) => ({
    'Option A': q.OptionA,
    'Option B': q.OptionB,
    'Option C': q.OptionC,
    numberz: q.numberz,
    question: q.question,
    answer: 'Option' + ' ' + q.answer,
  }));
  console.log({ formattedQuestions, questions });
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null);
  const exportViewToPDF = async () => {
    try {
      setIsLoading(true);

      if (!contentRef.current) {
        Alert.alert('Error', 'Content reference not found');
        return;
      }

      // Capture the view as image
      const imageUri = await captureRef(contentRef.current, {
        format: 'png',
        quality: 1.0,
        result: 'tmpfile',
      });

      // Convert image to PDF
      const htmlContent = `
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  margin: 0;
                  padding: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                img {
                  max-width: 100%;
                  height: auto;
                }
              </style>
            </head>
            <body>
              <img src="${imageUri}" alt="Captured Content" />
            </body>
          </html>
        `;

      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
        base64: false,
        width: 612,
        height: 792,
      });

      await savePDFToDevice(uri, 'view-export.pdf');
    } catch (error) {
      console.error('Error exporting view to PDF:', error);
      Alert.alert('Error', 'Failed to export view as PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <View ref={contentRef}>
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
          </CardContent>
        </Card>
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <>
            <NormalText
              style={[styles.questionNumber, { color: questionColor }]}
            >
              Your score
            </NormalText>
            <MediumText style={{ fontSize: RFValue(15) }}>
              {data.correct} of {data.totalQuestions} answered correctly
            </MediumText>
          </>
        )}
        data={formattedQuestions}
        renderItem={({ item }) => {
          const selectedAnswerIndex = finalAnswers.findIndex(
            (q) => q.numberz === item.numberz
          );
          const selectedAnswer =
            finalAnswers[selectedAnswerIndex]?.yourAnswer === 'Option A'
              ? item['Option A']
              : finalAnswers[selectedAnswerIndex]?.yourAnswer === 'Option B'
                ? item['Option B']
                : item['Option C'];
          console.log({
            selectedAnswer,
            itemAnswer: item[item.answer as keyof typeof item],
          });
          const itemAnswer = item[item.answer as keyof typeof item];
          return (
            <ResultCard
              item={item}
              isCorrect={selectedAnswer === itemAnswer}
              selectedAnswer={selectedAnswer}
              correctAnswer={itemAnswer as string}
            />
          );
        }}
        contentContainerStyle={{ gap: 15, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Stack mt={20} gap={5}>
            <NormalButton
              buttonText={'Download'}
              onPress={exportViewToPDF}
              disabled={isLoading}
            />
          </Stack>
        )}
        keyExtractor={(item, i) => item.numberz.toString() + i.toString()}
        scrollEnabled={false}
      />
    </>
  );
};
type ResultProps = {
  item: {
    'Option A': string;
    'Option B': string;
    'Option C': string;
    numberz: number;
    question: string;
    answer: string;
  };
  isCorrect: boolean;
  selectedAnswer?: string;
  correctAnswer?: string;
};

const ResultCard = ({
  item,
  isCorrect,
  selectedAnswer,
  correctAnswer,
}: ResultProps) => {
  const backgroundColor = isCorrect ? colors.purple : colors.red;
  return (
    <Card>
      <CardContent>
        <CardHeader
          style={{ flexDirection: 'column', gap: 5, marginBottom: 10 }}
        >
          <MediumText style={styles.questionNumber}>
            {item.numberz}. {item.question}
          </MediumText>
          <Stack direction="row" gap={5} alignItems="center">
            <View style={[styles.circle, { backgroundColor }]}>
              <Feather
                name={isCorrect ? 'check' : 'x'}
                color={'white'}
                size={20}
              />
            </View>
            {selectedAnswer && <NormalText>{selectedAnswer}</NormalText>}
          </Stack>
        </CardHeader>
        {!isCorrect && (
          <CardFooter
            style={{
              borderTopWidth: isCorrect ? 0 : 1,
              paddingVertical: 10,
              flexDirection: 'column',
            }}
          >
            <NormalText style={{ opacity: 0.8, fontSize: RFValue(11) }}>
              Correct answer:
            </NormalText>
            <Stack direction="row" gap={5} alignItems="center">
              <View style={styles.circle}>
                <Feather name="check" color={colors.white} size={20} />
              </View>
              <NormalText>{correctAnswer}</NormalText>
            </Stack>
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  questionNumber: {
    fontSize: RFValue(14),
    marginTop: 10,
  },
  circle: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    borderRadius: 30,
  },
});
