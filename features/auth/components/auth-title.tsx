import { ThemedView } from '@/features/shared/components/ThemedView';
import {
  MediumText,
  NormalText,
} from '@/features/shared/components/typography';
import { colors } from '@/features/shared/constants';
import { Href, Link } from 'expo-router';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  title: string;
  subTitle?: string;
  href?: Href;
  linkText?: string;
};
export const AuthTitle = ({ subTitle, title, href, linkText }: Props) => {
  return (
    <ThemedView>
      <MediumText>{title}</MediumText>
      {subTitle && (
        <NormalText style={{ fontSize: RFValue(10) }}>
          {subTitle}{' '}
          {href && (
            <Link asChild href={href}>
              <NormalText
                style={{
                  fontSize: RFValue(10),
                  color: colors.purple,
                  textDecorationLine: 'underline',
                }}
              >
                {linkText}
              </NormalText>
            </Link>
          )}
        </NormalText>
      )}
    </ThemedView>
  );
};
