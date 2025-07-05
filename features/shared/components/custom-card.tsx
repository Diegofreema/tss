import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import React, { Children, ReactNode } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { Stack } from './ui/stack';

const { width } = Dimensions.get('window');

interface CardProps {
  children: ReactNode;
  style?: object;
  onPress?: () => void;
}

interface CardHeaderProps {
  children: ReactNode;
  style?: object;
}

interface CardContentProps {
  children: ReactNode;
  style?: object;
}

interface CardFooterProps {
  children: ReactNode;
  style?: object;
}

export const Card = ({ children, style, onPress }: CardProps) => {
  const colorScheme = useColorScheme();
  const bg = Colors[colorScheme ?? 'light'].card;
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          key: index,
        });
      }
      return child;
    });
  };

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.card, style]}>{renderChildren()}</View>
    </TouchableOpacity>
  ) : (
    <ThemedView style={[styles.card, { backgroundColor: bg }, style]}>
      {renderChildren()}
    </ThemedView>
  );
};

export const CardHeader = ({ children, style }: CardHeaderProps) => (
  <Stack direction="row" p={0.01} style={[style]}>
    {children}
  </Stack>
);

export const CardContent = ({ children, style }: CardContentProps) => (
  <Stack direction="column" p={10} style={[styles.content, style]}>
    {children}
  </Stack>
);

export const CardFooter = ({ children, style }: CardFooterProps) => (
  <Stack direction="row" p={0.01} style={[styles.footer, style]}>
    {children}
  </Stack>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: width * 0.01,
    padding: 5,
  },

  content: {
    flexGrow: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
