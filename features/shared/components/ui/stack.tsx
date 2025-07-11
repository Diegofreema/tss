import React, { PropsWithChildren } from 'react';
import { StackProps } from '../../types';
import { ThemedView } from '../ThemedView';

export const Stack = ({
  children,
  direction = 'column',
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  style,
  gap,
  alignItems,
  backgroundColor,
  flex,
  flexWrap,
  justifyContent,
  width,
  borderColor,
  borderWidth,
}: PropsWithChildren<StackProps>) => {
  const dynamicStyles = {
    flexDirection: direction,
    margin: m,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    padding: p,
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    gap,
    alignItems,
    backgroundColor,
    flex,
    flexWrap,
    justifyContent,
    width,
    borderColor,
    borderWidth,
  };
  return <ThemedView style={[dynamicStyles, style]}>{children}</ThemedView>;
};
