import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Colors } from '@/constants/Colors';
import { MediumText } from '@/features/shared/components/typography';
import { colors } from '@/features/shared/constants';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FetchAssignments } from './fetch-assignments';

export function AssignmentTabs() {
  const [value, setValue] = React.useState<'pending' | 'completed' | 'elapsed'>(
    'pending'
  );
  const colorScheme = useColorScheme();
  const purpleColor = Colors[colorScheme ?? 'light'].question;
  const darkColor = Colors[colorScheme ?? 'light'].tabIconDefault;

  return (
    <View className="flex-1 justify-center">
      <Tabs
        value={value}
        onValueChange={(value: string) =>
          setValue(value as 'pending' | 'completed' | 'elapsed')
        }
        className="w-full flex-1  flex-col gap-1.5"
      >
        <TabsList
          className="flex-row w-full justify-around "
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.placeholderGrey,
          }}
        >
          <TabsTrigger
            value="pending"
            style={{
              borderBottomWidth: value === 'pending' ? 1 : 0,
              borderColor: purpleColor,
              marginBottom: -5,
            }}
            className="w-1/3"
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'pending' ? purpleColor : darkColor },
              ]}
              className={cn()}
            >
              Pending
            </MediumText>
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="w-1/3"
            style={{
              borderBottomWidth: value === 'completed' ? 1 : 0,
              borderColor: purpleColor,
            }}
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'completed' ? purpleColor : darkColor },
              ]}
            >
              Completed
            </MediumText>
          </TabsTrigger>
          <TabsTrigger
            value="elapsed"
            className="w-1/3"
            style={{
              borderBottomWidth: value === 'elapsed' ? 1 : 0,
              borderColor: purpleColor,
            }}
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'elapsed' ? purpleColor : darkColor },
              ]}
            >
              Elapsed
            </MediumText>
          </TabsTrigger>
        </TabsList>
        <View className="flex-1 px-[15px]">
          <TabsContent value="pending" className="flex-1">
            <FetchAssignments status={value} navigate />
          </TabsContent>
          <TabsContent value="completed" className="flex-1">
            <FetchAssignments status={value} navigate={false} />
          </TabsContent>
          <TabsContent value="elapsed" className="flex-1">
            <FetchAssignments status={value} navigate={false} />
          </TabsContent>
        </View>
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: RFValue(12),
  },
});
