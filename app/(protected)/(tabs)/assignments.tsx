import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { AssignmentTabs } from '@/features/student/components/assignment-tab';
import React from 'react';

const AssignmentScreen = () => {
  return (
    <Wrapper style={{ flex: 1, paddingHorizontal: 0 }}>
      <AssignmentTabs />
    </Wrapper>
  );
};

export default AssignmentScreen;
