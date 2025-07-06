import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../store/useTheme';

export const LoadingBar = () => {
  const theme = useTheme((state) => state.theme);

  const dark = theme === 'dark';
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={[styles.shape]}
      animate={{ backgroundColor: dark ? '#000000' : '#ffffff' }}
    >
      <Skeleton colorMode={theme} radius="square" height={50} width={'100%'} />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    width: '100%',
    height: 50,
    marginTop: 5,
  },
});
