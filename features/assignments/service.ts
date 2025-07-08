import axios from 'axios';
import { baseUrl } from '../shared/constants';
import {
  FetchAssignmentResponseType,
  FetchAssignmentSuccessResponseType,
  SubmitAssignmentResponseType,
  SubmitAssignmentsType,
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
export const submitAssignments = async ({
  token,
  regnum,
  testid,
  answers,
}: SubmitAssignmentsType) => {
  const _answers = JSON.stringify(answers);
  const { data } = await axios.post<SubmitAssignmentResponseType>(
    `${baseUrl}parents/submit-test`,
    {
      regnum,
      testid,
      answers: _answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
