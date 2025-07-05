import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../constants';
import { ThemedView } from '../ThemedView';
import { MediumText, NormalText } from '../typography';
import { CustomPressable } from '../ui/custom-pressable';
import { Stack } from '../ui/stack';

type Props = {
  visible: boolean;
  title?: string;
  subTitle?: string;
  onPress: () => void;
  onClose: () => void;
};

export const CustomModal = ({
  visible,
  onClose,
  onPress,
  subTitle = 'This can not be undone!!',
  title = 'Are you sure about this?',
}: Props) => {
  return (
    <Modal isVisible={visible}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemedView style={styles.innerContainer}>
          <Stack>
            <MediumText style={{ textAlign: 'center' }}>{title}</MediumText>
            <NormalText style={{ textAlign: 'center' }}>{subTitle}</NormalText>
            <Stack direction="row" gap={5} mt={10}>
              <CustomPressable
                onPress={onClose}
                style={[styles.button, { backgroundColor: colors.purple }]}
              >
                <NormalText style={{ color: colors.white }}>Cancel</NormalText>
              </CustomPressable>
              <CustomPressable
                onPress={onPress}
                style={[styles.button, { backgroundColor: 'red' }]}
              >
                <NormalText style={{ color: colors.white }}>Proceed</NormalText>
              </CustomPressable>
            </Stack>
          </Stack>
        </ThemedView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
