export type StudentSuccessResponseType = {
  success: boolean;
  message: string;
  data: StudentType[];
};

export type StudentType = {
  regnum: string;
  fname: string;
  lname: string;
  classname: string;
};

export type FetchAttendanceType = {
  token?: string;
  regnum: string;
  term: string;
};

export type AttendanceType = {
  class: string;
  date: string;
  present: boolean;
  session: string;
  term: string;
};

export type FetchAttendanceResponseType = {
  success: boolean;
  message: string;
  data: AttendanceType[];
};

export const TermType = ['First Term', 'Second Term', 'Third Term'];
export type TermSingleType = (typeof TermType)[number];
export type TermTypeKey = keyof typeof TermType;
export type FetchTermResponseType = {
  success: true;
  message: 'Terms fetched successfully';
  data: typeof TermType;
};
export type FetchSessionResponseType = {
  success: boolean;
  message: string;
  data: string[];
};
export type FetchTestSummaryType = {
  token?: string;
  regnum: string;
  status: 'completed' | 'pending' | 'elapsed';
};
export type SummaryType = {
  testid: string;
  assesment: string;
  date1: string;
  date2: string;
  subjectName: string;
  regnum: string;
  studentName: string;
};
export type FetchTestSummaryResponseType = {
  success: boolean;
  message: string;
  session: string;
  data: SummaryType[];
};

export type CAType = {
  subjectid: string;
  subjectName: string;
  classes: string;
  sessions: string;
  terms: string;
  ca1: number;
  ca2: number;
  ca3: number;
  exam: number;
  total: number;
};

export type FetchCAResponseType = {
  success: boolean;
  message: string;
  data: CAType[];
};

export type FetchCAType = {
  session: string;
  classname: string;
  term: string;
  regnum: string;
  token?: string;
};

export type FetchSessionType = {
  token: string;
  regnum: string;
};

export type ResultStudentType = {
  name: string;
  regnum: string;
  image: string;
  class: string;
  arm: string;
  attendance: string;
};
export type SchoolType = {
  name: string;
  address: string;
  logo: string;
  stamp: string;
};

export type TermInfoType = {
  session: string;
  term: TermSingleType;
  reopening: string;
};

export type Score = {
  subjectid: string;
  subjectName: string;
  ca1: number;
  ca2: number;
  ca3: number;
  exam: number;
  total: number;
  classAverage: number;
};

export type TermSummaryType = {
  termTotal: number;
  termAverage: number;
  termGrade: string;
  classTermTotal: number;
  classPopulation: number;
  classSessionAvg: number;
  studentSessionAvg: number;
  sessionGrade: string;
  fees: string;
};
export type CommentsType = {
  formTeacher: string;
  headTeacher: string;
};
export type ResultSheetType = {
  student: ResultStudentType;
  school: SchoolType;
  termInfo: TermInfoType;
  scores: Score[];
  termSummary: TermSummaryType;
  comments: CommentsType;
};
export type FetchResultSheetSuccessType = {
  success: true;
  data: ResultSheetType;
};
