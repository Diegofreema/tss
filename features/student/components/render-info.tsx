import { FlexText } from '@/features/shared/components/flex-text';
import { Stack } from '@/features/shared/components/ui/stack';
import { TermInfoType } from '../types';

type Props = {
  termInfo: TermInfoType;
};

export const RenderInfo = ({ termInfo }: Props) => {
  return (
    <Stack gap={10}>
      <FlexText leftText="Term" rightText={termInfo.term} />
      <FlexText leftText="Session" rightText={termInfo.session} />
      <FlexText leftText="Reopening date" rightText={termInfo.reopening} />
    </Stack>
  );
};
