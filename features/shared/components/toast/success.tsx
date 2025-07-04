import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants';
import { MediumText, NormalText } from '../typography';

type Props = {
  title: string;
  description: string;
};

export const Success = ({ description, title }: Props) => {
  return (
    <View style={styles.container}>
      <MediumText>{title}</MediumText>
      <NormalText>{description}</NormalText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    padding: 3,
    gap: 2,
    borderRadius: 5,
  },
});
