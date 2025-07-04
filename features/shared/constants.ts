import { StyleSheet } from 'react-native';

export const colors = {
  white: '#fff',
  purple: '#383D8A',
  grey: '#DEDEDE',
  black: '#000',
  placeholderGrey: '#8D8D8D',
};

export const constantStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});

export const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
