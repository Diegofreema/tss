import axios from 'axios';
import { baseUrl } from '../shared/constants';
import {
  FetchAttendanceResponseType,
  FetchAttendanceType,
  FetchCAResponseType,
  FetchCAType,
  FetchSessionResponseType,
  FetchSessionType,
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
  regnum,
  token,
}: FetchTestSummaryType) => {
  try {
    const { data } = await axios.post<FetchTestSummaryResponseType>(
      `https://app.tss.sch.ng/api/parents/test-summary`,
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
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const fetchCA = async ({
  classname,
  regnum,
  session,
  term,
  token,
}: FetchCAType) => {
  console.log({ classname, regnum, session, term, token });

  const { data } = await axios.post<FetchCAResponseType>(
    `${baseUrl}parents/student/ca?session=${encodeURI(session)}&classname=${encodeURI(classname)}&term=${encodeURI(term)}`,
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

export const fetchSession = async ({ token }: FetchSessionType) => {
  const { data } = await axios.get<FetchSessionResponseType>(
    `${baseUrl}parents/filters/sessions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
export const fetchClasses = async ({ token }: FetchSessionType) => {
  const { data } = await axios.get<FetchSessionResponseType>(
    `${baseUrl}parents/filters/classes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
