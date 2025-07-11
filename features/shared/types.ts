import { DimensionValue, StyleProp, ViewStyle } from 'react-native';

export type StackProps = {
  direction?: 'row' | 'column'; // Flex direction
  m?: number; // Margin
  mt?: number; // Margin top
  mr?: number; // Margin right
  mb?: number; // Margin bottom
  ml?: number; // Margin left
  p?: number; // Padding
  pt?: number; // Padding top
  pr?: number; // Padding right
  pb?: number; // Padding bottom
  pl?: number; // Padding left
  gap?: number; // Gap
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'; // Justify content
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; // Align items
  flexWrap?: 'wrap' | 'nowrap'; // Flex wrap
  backgroundColor?: string; // Background color
  flex?: number; // Flex
  style?: StyleProp<ViewStyle>; // Custom style override
  width?: DimensionValue;
  borderColor?: string;
  borderWidth?: number;
};

export type User = {
  parentid: string;
  fname: string;
  email: string;
  address: string;
  address2?: string;
  city: string;
  phone: string;
  profesion: string;
  states: string;
  token: string;
};

export type SuccessResponseType = {
  success: boolean;
  message: string;
};
