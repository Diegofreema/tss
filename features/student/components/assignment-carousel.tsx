import {
  Card,
  CardContent,
  CardHeader,
} from '@/features/shared/components/custom-card';
import { MediumText } from '@/features/shared/components/typography';
import { colors } from '@/features/shared/constants';
import { useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { SummaryType } from '../types';
import { RenderSummary } from './render-summary';
type Props = {
  data: SummaryType[];
};
const width = Dimensions.get('window').width;

export const AssignmentsCarousel = ({ data }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

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

  if (!data.length) {
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
      <Carousel
        data={data}
        ref={ref}
        width={width - 30}
        height={width / 2}
        renderItem={({ item }) => <RenderSummary item={item} />}
        onProgressChange={progress}
        autoPlay
        autoPlayReverse
        autoPlayInterval={2500}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
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
