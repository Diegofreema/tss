import { Colors } from '@/constants/Colors';
import { CustomSelect } from '@/features/shared/components/custom-select';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { FontAwesome } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
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
    const colorScheme = useColorScheme();
    const bg = Colors[colorScheme ?? 'light'].card;
    const iconColor = Colors[colorScheme ?? 'light'].icon;
    const onClose = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close();
      }
    };
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          snapPoints={['60%', '65%']}
          enableHandlePanningGesture
          backgroundStyle={{ backgroundColor: bg }}
          handleComponent={null}
        >
          <BottomSheetView
            style={[styles.contentContainer, { backgroundColor: bg }]}
          >
            <Stack
              alignItems="center"
              mb={10}
              mt={15}
              direction="row"
              justifyContent="space-between"
            >
              <MediumText>Filter</MediumText>
              <CustomPressable onPress={onClose}>
                <FontAwesome name="times" color={iconColor} size={23} />
              </CustomPressable>
            </Stack>
            <Stack gap={5}>
              <NormalText>Academic session</NormalText>
              <CustomSelect
                data={sessions}
                onSelect={setSession}
                value={session}
              />
            </Stack>
            <Stack gap={5}>
              <NormalText>Class</NormalText>
              <CustomSelect
                data={classes}
                onSelect={setClass}
                value={singleClass}
              />
            </Stack>
            <Stack gap={5}>
              <NormalText>Term</NormalText>
              <CustomSelect data={terms} onSelect={setTerm} value={term} />
            </Stack>
            <Stack mt={20} direction="row" gap={10} alignItems="center">
              <CustomPressable
                onPress={() => {
                  reset();
                  onClose();
                }}
                style={[styles.button, { backgroundColor: colors.purple }]}
              >
                <NormalText style={{ color: colors.white }}>Reset</NormalText>
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
  },
  button: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
});
