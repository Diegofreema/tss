import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../store/useTheme';

type Props = {
  width: number;
  height: number;
};
export const LoadingCard = ({ width, height }: Props) => {
  const theme = useTheme((state) => state.theme);

  const dark = theme === 'dark';
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={[styles.shape, { width, height }]}
      animate={{ backgroundColor: dark ? '#000000' : '#ffffff' }}
    >
      <Skeleton
        colorMode={theme}
        radius="square"
        height={height}
        width={width}
      />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
