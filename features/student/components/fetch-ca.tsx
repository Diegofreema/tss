import { Colors } from '@/constants/Colors';
import { LoadingBar } from '@/features/shared/components/loading-bar';
import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { CustomPressable } from '@/features/shared/components/ui/custom-pressable';
import { Stack } from '@/features/shared/components/ui/stack';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { useGetCA } from '../api/use-get-ca';
import { useGetSession } from '../api/use-get-session';
import { useGetTerms } from '../api/user-get-terms';
import { useStudent } from '../store/useStudent';
import { TermSingleType } from '../types';
import { RenderCAs } from './render-ca';

const { width } = Dimensions.get('window');
export const FetchCa = () => {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].icon;
  const textColor = Colors[colorScheme ?? 'light'].text;
  const borderColor = Colors[colorScheme ?? 'light'].cardBorder;
  const student = useStudent((state) => state.student);
  const {
    data: terms,
    isPending: isPendingTerms,
    isError: isErrorTerms,
  } = useGetTerms();
  const {
    data: sessionData,
    isError: isErrorSession,
    isPending: isPendingSession,
  } = useGetSession();
  const [value, setValue] = useState('');
  const [session, setSession] = useState('');

  const [term, setTerm] = useState<TermSingleType>(
    (terms?.data[0] as TermSingleType) ?? 'First Term'
  );
  useEffect(() => {
    if (!isErrorSession && !isPendingSession && sessionData) {
      // Set the session to the first available session if not already set
      setSession(sessionData.data[0]);
    }
  }, [sessionData, isErrorSession, isPendingSession]);
  const { data, isPending, isError } = useGetCA({
    classname: student?.classname!,
    session,
    term,
    regnum: student?.regnum!,
  });

  if (isError || isErrorSession || isErrorTerms) {
    throw new Error('Error fetching data');
  }

  if (isPending || isPendingSession || isPendingTerms) {
    return (
      <Stack gap={10}>
        <LoadingBar />
        <LoadingLists
          horizontal={false}
          renderItem={() => <LoadingCard width={width - 30} height={200} />}
        />
      </Stack>
    );
  }
  console.log({ data, sessionData });
  const dataToRender =
    data?.data.filter((item) =>
      item.subjectName.toLowerCase().includes(value.toLowerCase())
    ) || [];
  return (
    <View style={{ flex: 1, gap: 10 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        gap={10}
        alignItems="center"
      >
        <Stack
          direction="row"
          gap={10}
          alignItems="center"
          flex={1}
          style={[styles.inputContainer, { borderColor }]}
        >
          <Ionicons
            name="search"
            size={25}
            color={iconColor}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder={'Search by subject name...'}
            style={[styles.input, { color: textColor }]}
            placeholderTextColor={textColor}
            value={value}
            onChangeText={setValue}
            autoCapitalize="none"
          />
        </Stack>
        <CustomPressable onPress={() => setSession('2023/2024')}>
          <Ionicons name="filter" size={24} color={iconColor} />
        </CustomPressable>
      </Stack>
      <RenderCAs data={dataToRender} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'NunitoRegular',
    fontSize: 15,
  },
  inputContainer: {
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
});
