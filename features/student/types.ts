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

export const TermType = ['First Term', 'Second Term', 'Third Term'] as const;
export type TermSingleType = (typeof TermType)[number];
export type TermTypeKey = keyof typeof TermType;
export type FetchTermResponseType = {
  success: true;
  message: 'Terms fetched successfully';
  data: typeof TermType;
};

export type FetchTestSummaryType = {
  token?: string;
  regnum: string;
  classname: string;
};

export type FetchTestSummaryResponseType = {
  success: boolean;
  message: string;
  data: [];
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
