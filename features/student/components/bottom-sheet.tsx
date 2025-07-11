import { CustomSelect } from '@/features/shared/components/custom-select';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { FontAwesome } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  setTerm: (term: string) => void;
  setSession: (session: string) => void;
  setClass: (classname: string) => void;
  terms: string[];
  sessions: string[];
  classes: string[];
  session: string;
  term: string;
  singleClass: string;
  reset: () => void;
  onPress: () => void;
};
export const BottomSheetComponent = forwardRef<BottomSheetModal, Props>(
  (
    {
      classes,
      sessions,
      terms,
      setClass,
      setSession,
      setTerm,
      singleClass,
      session,
      term,
      reset,
      onPress,
    },
    ref
  ) => {
    const bg = colors.purple;

    const onClose = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close();
      }
    };
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} pressBehavior={'close'} />
      ),
      []
    );
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          snapPoints={['60%']}
          enableDynamicSizing={false}
          backgroundStyle={{ backgroundColor: bg }}
          handleComponent={null}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={[
              styles.contentContainer,
              {
                backgroundColor: bg,
              },
            ]}
          >
            <Stack
              alignItems="center"
              mb={10}
              mt={15}
              direction="row"
              justifyContent="space-between"
            >
              <MediumText style={{ color: 'white' }}>Filter</MediumText>
              <CustomPressable onPress={onClose} style={styles.press}>
                <FontAwesome name="times" color={'white'} size={23} />
              </CustomPressable>
            </Stack>
            <Stack gap={5}>
              <NormalText style={{ color: 'white' }}>
                Academic session
              </NormalText>
              <CustomSelect
                data={sessions}
                onSelect={setSession}
                value={session}
              />
            </Stack>
            <Stack gap={5}>
              <NormalText style={{ color: 'white' }}>Class</NormalText>
              <CustomSelect
                data={classes}
                onSelect={setClass}
                value={singleClass}
              />
            </Stack>
            <Stack gap={5}>
              <NormalText style={{ color: 'white' }}>Term</NormalText>
              <CustomSelect data={terms} onSelect={setTerm} value={term} />
            </Stack>
            <Stack mt={20} direction="row" gap={10} alignItems="center">
              <CustomPressable
                onPress={() => {
                  reset();
                  onClose();
                }}
                style={[styles.button, { backgroundColor: colors.white }]}
              >
                <NormalText style={{ color: colors.purple }}>Reset</NormalText>
              </CustomPressable>
            </Stack>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);

BottomSheetComponent.displayName = 'BottomSheetComponent';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  press: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.grey,
    borderWidth: 1,
  },
});
