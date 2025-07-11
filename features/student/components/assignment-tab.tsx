import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MediumText } from '@/features/shared/components/typography';
import { colors } from '@/features/shared/constants';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FetchAssignments } from './fetch-assignments';

export function AssignmentTabs() {
  const [value, setValue] = React.useState<'pending' | 'completed' | 'elapsed'>(
    'pending'
  );
  console.log({ value });

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
              borderColor: colors.purple,
              marginBottom: -5,
            }}
            className="w-1/3"
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'pending' ? colors.purple : colors.black },
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
              borderColor: colors.purple,
            }}
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'completed' ? colors.purple : colors.black },
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
              borderColor: colors.purple,
            }}
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'elapsed' ? colors.purple : colors.black },
              ]}
            >
              Elapsed
            </MediumText>
          </TabsTrigger>
        </TabsList>
        <View className="flex-1 px-[15px]">
          <TabsContent value="pending" className="flex-1">
            <FetchAssignments status={value} />
          </TabsContent>
          <TabsContent value="completed" className="flex-1">
            <FetchAssignments status={value} />
          </TabsContent>
          <TabsContent value="elapsed" className="flex-1">
            <FetchAssignments status={value} />
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
