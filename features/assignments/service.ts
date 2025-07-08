import axios from 'axios';
import { baseUrl } from '../shared/constants';
import {
  FetchAssignmentResponseType,
  FetchAssignmentSuccessResponseType,
} from './types';

export const fetchAssignments = async ({
  token,
  regnum,
  testid,
}: FetchAssignmentResponseType) => {
  const { data } = await axios.post<FetchAssignmentSuccessResponseType>(
    `${baseUrl}parents/test-assignments`,
    {
      regnum,
      testid,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
