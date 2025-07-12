import { NormalText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ResultSheetType } from '../types';
import { RenderComment } from './render-comments';
import { RenderInfo } from './render-info';
import { RenderScores } from './render-scores';
import { RenderStudent } from './render-student';
import { RenderTermSummary } from './render-term-summary';

type Props = {
  data: ResultSheetType;
};

export const RenderResultSheet = ({ data }: Props) => {
  const { comments, school, scores, student, termInfo, termSummary } = data;
  const classTermAvg =
    scores.reduce((acc, curr) => acc + curr.classAverage, 0) / scores.length;
  return (
    <View>
      <Stack gap={10}>
        <Image
          source={{ uri: school.logo }}
          style={styles.logo}
          contentFit="cover"
        />
        <NormalText style={styles.center}>{school.name}</NormalText>
        <NormalText style={styles.address}>{school.address}</NormalText>
        <Divider />
        <NormalText style={[styles.center, { fontSize: RFValue(8) }]}>
          A = Excellent (100 - 75) | B = Very Good (74 - 70) | C = Good (69 -
          50) | D = Average (49 - 45) | E = Pass (44 - 40) | NI = Needs
          Improvement (39 - 0)
        </NormalText>
        <Divider />
        <RenderStudent student={student} />
        <Divider />
        <RenderInfo termInfo={termInfo} />
        <Divider />
        <RenderScores scores={scores} />
        <Divider />
        <RenderTermSummary
          termSummary={termSummary}
          classTermAverage={classTermAvg}
        />
        <Divider />
        <RenderComment comments={comments} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  address: { textAlign: 'center', fontSize: RFValue(10) },
  center: { textAlign: 'center' },
  divider: { height: 1, backgroundColor: '#ccc', width: '100%' },
});

const Divider = () => {
  return <View style={styles.divider} />;
};
