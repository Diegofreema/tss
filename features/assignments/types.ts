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
export type Answer = {
  numberz: number;
  yourAnswer: string;
};

export type SubmitAssignmentsType = {
  token?: string;
  regnum: string;
  testid: string;
  answers: Answer[];
};
export type SubmitAssignmentType = {
  studentName: string;
  classname: string;
  subject: string;
  session: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  scoreSummary: string;
};
export type SubmitAssignmentResponseType = {
  success: boolean;
  message: string;
  data: SubmitAssignmentType;
};
