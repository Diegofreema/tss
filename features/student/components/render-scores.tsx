import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { NormalText } from '@/features/shared/components/typography';
import { cn } from '@/lib/utils';
import { RFValue } from 'react-native-responsive-fontsize';
import { Score } from '../types';
import { getGrade, getLetterGrade } from '../utils';

const HEADERS = [
  'SUBJECT',
  'HOME',
  'TESTS',
  'EXAMS',
  'TOTAL',
  'GRADE',
  'AVG',
  'REMARK',
];
type Props = {
  scores: Score[];
};
export function RenderScores({ scores }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView horizontal>
      <Table aria-labelledby="scores-table" className="flex-1">
        <TableHeader>
          <TableRow className="flex gap-4 justify-between">
            {HEADERS.map((h, i) => (
              <TableHead key={i} className="px-0.5" style={{ width: 120 }}>
                <NormalText>{h}</NormalText>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="flex-1">
          <FlatList
            data={scores}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
            keyExtractor={(item, i) => i.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({
              item: { ca1, ca2, ca3, classAverage, exam, subjectName, total },
              index,
            }) => {
              // const total = ca1 + ca2 + ca3 + exam
              const grade = getGrade(total);
              return (
                <TableRow
                  key={index}
                  className={cn(
                    'active:bg-secondary flex gap-4 justify-between',
                    index % 2 && 'bg-muted/40 '
                  )}
                >
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {index + 1} {subjectName}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {ca3}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {ca2 + ca1}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {exam}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {total}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {grade}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {Math.round(classAverage)}
                    </NormalText>
                  </TableCell>
                  <TableCell style={{ width: 120 }}>
                    <NormalText style={{ fontSize: RFValue(8) }}>
                      {getLetterGrade(grade)}
                    </NormalText>
                  </TableCell>
                </TableRow>
              );
            }}
          />
        </TableBody>
      </Table>
    </ScrollView>
  );
}
