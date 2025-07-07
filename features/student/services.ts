import axios from 'axios';
import { baseUrl } from '../shared/constants';
import { FetchAttendanceType, StudentSuccessResponseType } from './types';

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
  const { data } = await axios.get(
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
