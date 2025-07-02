import {Dimensions, StyleSheet, View} from 'react-native'
import {Wrapper} from "@/features/shared/components/ui/wrapper";
import {Image} from "expo-image";
import {FloatingGradient} from "@/features/shared/components/ui/floating-gradient";
import {Button} from "@/features/shared/components/ui/button";
import {useRouter} from "expo-router";

const {height} = Dimensions.get('window');
const OnboardScreen = () => {
    const router = useRouter()
    const onPress = () => {
            router.replace('/login')
    }
    return (
        <Wrapper>
            <View style={styles.imageContainer}>
                <Image
                    source={require('@/assets/images/phone.png')}
                    style={styles.image}
                    contentFit={'cover'}
                />
                <FloatingGradient />
            </View>
            <Button title={'Get Started'}  onPress={onPress} />

        </Wrapper>
    );
};
export default OnboardScreen;


const styles = StyleSheet.create({
    imageContainer: {
        height: height * .8,
        marginHorizontal: 40,

    },
    image: {
        width: '100%',
        height: '100%'
    }
})
