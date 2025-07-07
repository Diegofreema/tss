import axios from 'axios';
import { baseUrl } from '../shared/constants';
import {
  FetchAttendanceResponseType,
  FetchAttendanceType,
  FetchCAResponseType,
  FetchCAType,
  FetchTermResponseType,
  FetchTestSummaryResponseType,
  FetchTestSummaryType,
  StudentSuccessResponseType,
} from './types';

export const fetchStudent = async ({ token }: { token: string }) => {
  const { data } = await axios.get<StudentSuccessResponseType>(
    `${baseUrl}parents/my-students`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const fetchAttendance = async ({
  token,
  regnum,
  term,
}: FetchAttendanceType) => {
  const { data } = await axios.get<FetchAttendanceResponseType>(
    `${baseUrl}parents/attendance?regnum=${encodeURI(regnum)}&term=${encodeURI(
      term
    )}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
export const fetchTerm = async ({ token }: { token: string }) => {
  const { data } = await axios.get<FetchTermResponseType>(
    `${baseUrl}parents/filters/terms`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const fetchTestSummary = async ({
  classname,
  regnum,
  token,
}: FetchTestSummaryType) => {
  const { data } = await axios.post<FetchTestSummaryResponseType>(
    `${baseUrl}parents/test-summary`,
    {
      classname,
      regnum,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
export const fetchCA = async ({
  classname,
  regnum,
  session,
  term,
  token,
}: FetchCAType) => {
  const { data } = await axios.post<FetchCAResponseType>(
    `${baseUrl}parents/student/ca?session=${encodeURI(session)}N&classname=${encodeURI(classname)}&term=${encodeURI(term)}`,
    {
      regnum,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
