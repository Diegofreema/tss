import { FetchAssignments } from '@/features/assignments/components/fetch-assignments';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import React from 'react';

const AssignmentDetailScreen = () => {
  return (
    <Wrapper>
      <FetchAssignments />
    </Wrapper>
  );
};

export default AssignmentDetailScreen;
