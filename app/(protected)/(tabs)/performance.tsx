import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { FetchCa } from '@/features/student/components/fetch-ca';
import React from 'react';

const PerformanceScreen = () => {
  return (
    <Wrapper style={{ flex: 1 }}>
      <FetchCa />
    </Wrapper>
  );
};

export default PerformanceScreen;
