import { Colors } from '@/constants/Colors';
import { CustomModal } from '@/features/shared/components/modal/custom-modal';
import { ThemedView } from '@/features/shared/components/ThemedView';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { Wrapper } from '@/features/shared/components/ui/wrapper';
import { useColorScheme } from '@/hooks/useColorScheme.web';

import { useAuth } from '@/features/shared/store/use-auth';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ListItemLeadingIcon,
  ListItemSubTitle,
  ListItemTitle,
  ListItemTitleView,
  ListItemTrailingIcon,
  ListItemWrapper,
} from '../../../components/list';
import { appItems, dangerItems, supportItems } from '../constants';
import { ListItem } from '../types';

export const More = () => {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].icon;
  const titleColor = Colors[colorScheme ?? 'light'].title;
  const cardColor = Colors[colorScheme ?? 'light'].card;
  const borderColor = Colors[colorScheme ?? 'light'].cardBorder;
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { clearUser } = useAuth();
  const router = useRouter();
  const onPress = (id: string) => {
    switch (id) {
      case 'profile':
        router.push('/profile');
        break;
      case 'logout':
        setShowLogoutModal(true);
        break;
      case 'delete':
        setShowLogoutModal(true);
        break;

      default:
        break;
    }
  };
  const profileItems: ListItem[] = [
    {
      id: 'profile',
      title: 'Profile',
      subtitle: 'Manage your personal information',
      leadingIcon: <Feather name="user" size={20} color={iconColor} />,
      trailingIcon: <Feather name="chevron-right" size={20} color="#6B7280" />,
    },
  ];

  const renderListItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity onPress={() => onPress(item.id)} activeOpacity={0.7}>
      <ListItemWrapper>
        <ListItemLeadingIcon>
          <ThemedView style={{ marginLeft: 4 }}>{item.leadingIcon}</ThemedView>
        </ListItemLeadingIcon>
        <ListItemTitleView>
          <ListItemTitle
            destructive={item.type === 'danger'}
            style={{ marginLeft: 0 }}
          >
            {item.title}
          </ListItemTitle>
          <ListItemSubTitle>{item.subtitle}</ListItemSubTitle>
        </ListItemTitleView>
        <ListItemTrailingIcon>
          {item.trailingIcon && (
            <View style={styles.trailingIconContainer}>
              {item.trailingIcon}
            </View>
          )}
        </ListItemTrailingIcon>
      </ListItemWrapper>
    </TouchableOpacity>
  );

  const renderSection = (
    title: string,
    data: ListItem[],
    keyPrefix: string
  ) => (
    <ThemedView style={styles.section}>
      <MediumText style={[styles.sectionTitle, { color: titleColor }]}>
        {title}
      </MediumText>
      <ThemedView
        style={[
          styles.listContainer,
          { backgroundColor: cardColor, borderColor },
        ]}
      >
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => `${keyPrefix}-${item.id}`}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.flatListContent}
        />
      </ThemedView>
    </ThemedView>
  );

  const onClose = () => {
    setShowLogoutModal(false);
  };
  const logout = () => {
    clearUser();
    onClose();
  };
  const onCloseDelete = () => {
    setShowDeleteModal(false);
  };
  const onDelete = async () => {};
  return (
    <Wrapper>
      <CustomModal
        onPress={logout}
        onClose={onClose}
        subTitle="This will log you out of your account"
        visible={showLogoutModal}
      />
      <CustomModal
        onPress={onDelete}
        onClose={onCloseDelete}
        visible={showDeleteModal}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        contentInsetAdjustmentBehavior="automatic"
      >
        <ThemedView style={styles.header}>
          <Stack direction="row" alignItems="center" gap={4}>
            <Ionicons name="settings-sharp" color={iconColor} size={30} />
            <MediumText>Settings</MediumText>
          </Stack>
          <NormalText>Manage your account and app preferences</NormalText>
        </ThemedView>

        {renderSection('Account', profileItems, 'profile')}
        {renderSection('Preferences', appItems, 'app')}
        {/* {renderSection('Recent Activity', activityItems, 'activity')} */}
        {renderSection('Support', supportItems, 'support')}
        {renderSection('Account Actions', dangerItems, 'danger')}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            App Version 1.2.3 • Last updated 2 days ago
          </Text>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 32,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',

    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    color: '#F3F4F6',
    marginBottom: 12,
    paddingLeft: 4,
  },

  listContainer: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 10,
  },
  flatListContent: {
    flexGrow: 1,
    gap: 10,
  },
  listItemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 64,
  },
  activeListItem: {
    backgroundColor: '#21262D',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  leadingIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    gap: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F9FAFB',
    flex: 1,
  },
  dangerTitle: {
    color: '#EF4444',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 18,
    marginTop: 2,
  },
  warningSubtitle: {
    color: '#D97706',
  },
  successSubtitle: {
    color: '#059669',
  },
  dangerSubtitle: {
    color: '#DC2626',
  },
  trailingIconContainer: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 24,
  },
  trailingText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#EF4444',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#21262D',
    marginLeft: 40,
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});
