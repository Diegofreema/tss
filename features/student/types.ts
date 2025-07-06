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
