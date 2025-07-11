import { NormalButton } from '@/features/shared/components/normal-button';
import { Stack } from '@/features/shared/components/ui/stack';
import { FlatList, View } from 'react-native';
import { Answer, QuestionType } from '../types';
import { PreviewQuestion } from './preview-question';

type Props = {
  retake: () => void;
  submit: () => void;
  questions: QuestionType[];
  answers: Answer[];
};
export const PreviewAssignment = ({
  retake,
  submit,
  questions,
  answers,
}: Props) => {
  return (
    <View>
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <PreviewQuestion item={item} answers={answers} />
        )}
        contentContainerStyle={{ gap: 15 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Stack mt={20}>
            <Stack direction="row" justifyContent="space-between" gap={10}>
              <NormalButton buttonText="Retake" onPress={retake} />
              <NormalButton buttonText={'Submit'} onPress={submit} />
            </Stack>
          </Stack>
        )}
        keyExtractor={(item) => item.numberz.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};
