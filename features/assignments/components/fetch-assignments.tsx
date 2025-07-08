import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { useStudent } from '@/features/student/store/useStudent';
import { useWindowDimensions } from 'react-native';
import { useGetAssignments } from '../api/use-get-assignments';
import { RenderAssignments } from './render-assignments';

export const FetchAssignments = () => {
  const student = useStudent((state) => state.student);
  const { data, isError, isPending, error } = useGetAssignments({
    regnum: student?.regnum!,
    testid: '',
  });
  console.log({ error });
  const { width } = useWindowDimensions();
  if (isError) {
    console.log('Error fetching assignments:', error);
  }
  if (isPending) {
    return (
      <LoadingLists
        horizontal={false}
        renderItem={() => <LoadingCard height={200} width={width - 30} />}
      />
    );
  }
  console.log(data);
  return <RenderAssignments data={res} />;
};

const res = {
  testid: 'PFMTFHSTHJCO',
  regnum: 'JS2 FAITHFULNESS',
  subjectName: 'C.C.A',
  assessment: 'Non',
  session: '2024/2025 SESSION',
  totalQuestions: 6,
  currentQuestion: 1,
  questions: [
    {
      numberz: 1,
      question: 'The imitation of action on stage is called',
      OptionA: 'Drama',
      OptionB: 'Music',
      OptionC: 'Fine art',
      answer: 'A',
    },
    {
      numberz: 2,
      question:
        'The building or venue prepared for performance to take place is known as',
      OptionA: 'House',
      OptionB: 'Theatre',
      OptionC: 'Museum',
      answer: 'B',
    },
    {
      numberz: 3,
      question:
        'The building or venue prepared for performance to take place is known as',
      OptionA: 'House',
      OptionB: 'Theatre',
      OptionC: 'Museum',
      answer: 'B',
    },
    {
      numberz: 4,
      question: '_is one of the musical instrument in the woodwind family',
      OptionA: 'Tenor',
      OptionB: 'Alto',
      OptionC: 'Recorder',
      answer: 'C',
    },
    {
      numberz: 5,
      question: 'The recorder has  _holes',
      OptionA: 'Five',
      OptionB: 'Seven',
      OptionC: 'Six',
      answer: 'B',
    },
    {
      numberz: 6,
      question: 'One of these is involved in drama',
      OptionA: 'Teachers',
      OptionB: 'Students',
      OptionC: 'Actors',
      answer: 'C',
    },
  ],
};
