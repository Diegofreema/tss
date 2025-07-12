import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MediumText } from '@/features/shared/components/typography';
import { colors } from '@/features/shared/constants';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FetchCa } from './fetch-ca';
import { ResultSheet } from './result-sheet';

export function PerformanceTab() {
  const [value, setValue] = React.useState<'assessment' | 'result'>(
    'assessment'
  );

  return (
    <View className="flex-1 justify-center">
      <Tabs
        value={value}
        onValueChange={(value: string) =>
          setValue(value as 'assessment' | 'result')
        }
        className="w-full flex-1  flex-col gap-1.5"
      >
        <TabsList
          className="flex-row w-full justify-around mb-5"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.placeholderGrey,
          }}
        >
          <TabsTrigger
            value="assessment"
            style={{
              borderBottomWidth: value === 'assessment' ? 1 : 0,
              borderColor: colors.purple,
              marginBottom: -5,
            }}
            className="w-1/2"
          >
            <MediumText
              style={[
                styles.container,
                {
                  color: value === 'assessment' ? colors.purple : colors.black,
                },
              ]}
              className={cn()}
            >
              Continuos Assessment
            </MediumText>
          </TabsTrigger>

          <TabsTrigger
            value="result"
            className="w-1/2"
            style={{
              borderBottomWidth: value === 'result' ? 1 : 0,
              borderColor: colors.purple,
            }}
          >
            <MediumText
              style={[
                styles.container,
                { color: value === 'result' ? colors.purple : colors.black },
              ]}
            >
              Result Sheet
            </MediumText>
          </TabsTrigger>
        </TabsList>
        <View className="flex-1">
          <TabsContent value="assessment" className="flex-1">
            <FetchCa />
          </TabsContent>
          <TabsContent value="result" className="flex-1">
            <ResultSheet />
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
