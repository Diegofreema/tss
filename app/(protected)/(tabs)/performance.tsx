import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { PerformanceTab } from '@/features/student/components/performance-tab';
import React from 'react';

const PerformanceScreen = () => {
  return (
    <Wrapper style={{ flex: 1, paddingHorizontal: 0 }}>
      <PerformanceTab />
    </Wrapper>
  );
};

export default PerformanceScreen;
