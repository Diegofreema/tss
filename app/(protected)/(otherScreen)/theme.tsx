import { AnimatedSwitch } from '@/components/switch/AnimatedSwitch';
import { Spacer } from '@/features/shared/components/spacer';
import { BoldText, NormalText } from '@/features/shared/components/typography';
import { Header } from '@/features/shared/components/ui/header';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import React from 'react';
import { Appearance, StyleSheet, View } from 'react-native';

const Theme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const onValueChange = () => {
    Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Wrapper>
      <Header />
      <BoldText>Theme</BoldText>
      <Spacer />
      <View style={styles.switchRow}>
        <View style={styles.switchInfo}>
          <View style={styles.switchLabelContainer}>
            <NormalText style={styles.switchLabel}>Switch theme</NormalText>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <AnimatedSwitch value={isDark} onValueChange={onValueChange} />
        </View>
      </View>
    </Wrapper>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  header: {
    marginBottom: 32,
    paddingTop: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a1a1aa',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  controlsCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  controlsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  controlsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    flexDirection: 'row',
    gap: 8,
  },
  buttonPrimary: {
    backgroundColor: '#ffffff',
  },
  buttonSecondary: {
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#404040',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  buttonTextPrimary: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingLeft: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  sectionContent: {
    gap: 12,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  switchInfo: {
    flex: 1,
    marginRight: 16,
  },
  switchLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  switchDescription: {
    fontSize: 13,
    color: '#71717a',
    lineHeight: 18,
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#111111',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#71717a',
    fontWeight: '500',
  },
});
