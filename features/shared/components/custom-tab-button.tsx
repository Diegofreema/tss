import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { NormalText } from './typography';
import { CustomPressable } from './ui/custom-pressable';
import { IconSymbol } from './ui/IconSymbol';

export const CustomTabButton = () => {
  return (
    <CustomPressable
      onPress={() => console.log('Press')}
      style={styles.tabButton}
    >
      <IconSymbol size={28} name="ellipsis.circle.fill" color={''} />
      <NormalText style={styles.text}>More</NormalText>
    </CustomPressable>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text: { fontSize: RFValue(8), marginTop: -5, color: '#ECEDEE' },
});
