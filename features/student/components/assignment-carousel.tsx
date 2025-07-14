import {
  Card,
  CardContent,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { LoadingCard } from '@/features/shared/components/loading-card';
import { LoadingLists } from '@/features/shared/components/loading-lists';
import { Title } from '@/features/shared/components/title';
import { MediumText } from '@/features/shared/components/typography';
import { Stack } from '@/features/shared/components/ui/stack';
import { colors } from '@/features/shared/constants';
import { Link } from 'expo-router';
import { useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetTest } from '../api/use-get-test';
import { useStudent } from '../store/useStudent';
import { RenderSummary } from './render-summary';

const width = Dimensions.get('window').width;

export const AssignmentsCarousel = () => {
  const student = useStudent((state) => state.student);
  const { data, isPending, isError } = useGetTest({
    regnum: student?.regnum!,
    status: 'pending',
  });
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  if (isError) {
    throw new Error('Failed to fetch assignments data');
  }
  if (isPending) {
    return (
      <LoadingLists
        renderItem={() => <LoadingCard height={200} width={width - 30} />}
        length={1}
      />
    );
  }
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  if (!data.data.length) {
    return (
      <Card style={{ height: width / 2 }}>
        <CardContent>
          <CardHeader
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <MediumText style={{ textAlign: 'center' }}>
              No assignments
            </MediumText>
          </CardHeader>
        </CardContent>
      </Card>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Title title="Assignments" />
        <Link
          href="/assignments"
          style={{ color: colors.purple, fontSize: RFValue(9) }}
        >
          See All &gt;
        </Link>
      </Stack>
      <Carousel
        data={data.data}
        ref={ref}
        width={width - 30}
        height={width / 2}
        renderItem={({ item }) => <RenderSummary item={item} navigate={true} />}
        onProgressChange={progress}
        autoPlay={data.data.length > 1}
        autoPlayReverse
        autoPlayInterval={2500}
      />
      <Pagination.Basic
        progress={progress}
        data={data.data}
        dotStyle={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          width: 25,
          height: 2,
        }}
        onPress={onPressPagination}
        activeDotStyle={{
          overflow: 'hidden',
          backgroundColor: colors.purple,
        }}
        containerStyle={{
          gap: 3,
        }}
        horizontal
      />
    </View>
  );
};
