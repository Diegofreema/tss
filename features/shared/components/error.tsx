import { ErrorBoundaryProps } from 'expo-router';
import { MediumText } from './typography';
import { Button } from './ui/button';
import { Wrapper } from './ui/wrapper';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <Wrapper>
      <MediumText>{error.message}</MediumText>
      <Button title="Retry" onPress={retry} />
    </Wrapper>
  );
}
