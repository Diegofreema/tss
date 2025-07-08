export type AssignmentType = {
  testid: string;
  regnum: string;
  subjectName: string;
  assessment: string;
  session: string;
  totalQuestions: number;
  currentQuestion: number;
  questions: QuestionType[];
};
export type FetchAssignmentSuccessResponseType = {
  success: boolean;
  message: string;
  data: AssignmentType;
};
export type QuestionType = {
  numberz: number;
  question: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  answer: string;
};

export type FetchAssignmentResponseType = {
  token?: string;
  regnum: string;
  testid: string;
};
