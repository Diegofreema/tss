import { FetchEvents } from '@/features/events/components/fetch-events';
import { MediumText } from '@/features/shared/components/typography';
import { Button } from '@/features/shared/components/ui/button';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { FetchStudent } from '@/features/student/components/fetch-student';
import { ErrorBoundaryProps } from 'expo-router';
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <Wrapper
      style={{ alignItems: 'center', justifyContent: 'center', gap: 10 }}
    >
      <MediumText>{error.message}</MediumText>
      <Button title="Retry" onPress={retry} height={50} />
    </Wrapper>
  );
}
export default function HomeScreen() {
  return (
    <Wrapper style={{ gap: 20 }}>
      <FetchStudent />
      <FetchEvents horizontal />
    </Wrapper>
  );
}
