import {ThemedView} from "@/features/shared/components/ThemedView";
import {CustomPressable} from "@/features/shared/components/ui/custom-pressable";
import {Image} from "expo-image";
import {useRouter} from "expo-router";
import {StyleSheet} from "react-native";
import {colors} from "@/features/shared/constants";

export const Header = () => {
    const router = useRouter();
    const onPress = () => {
        if(router.canGoBack()) {
            router.back()
        }
    }
    return (
        <ThemedView style={styles.container}>
            <CustomPressable onPress={onPress} style={styles.button}>
                <Image
                    source={require('@/assets/images/arrow.png')}
                    style={{width: 20, height: 20}}
                    contentFit={'cover'}
                />
            </CustomPressable>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    button: {
        borderColor: colors.grey,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
