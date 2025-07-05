import { RotatingSquaresSpinner } from '@/components/loaders';
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  visible: boolean;
};

export const LoadingModal = ({ visible }: Props) => {
  return (
    <Modal isVisible={visible}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RotatingSquaresSpinner />
      </View>
    </Modal>
  );
};
