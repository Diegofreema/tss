import {LinearGradient} from "expo-linear-gradient";
import {BoldText, NormalText} from "@/features/shared/components/typography";
import {StyleSheet} from "react-native";

export const FloatingGradient = () => {
    return (
       <LinearGradient
           colors={['rgba(255, 255, 255, 0.9)', '#fff']}
           start={{ x: 0, y: 0 }} // Top-left
           end={{ x: 0, y: 1 }}
           style={styles.container}
       >
           <BoldText>
               Welcome to Skoolhost
           </BoldText>
           <NormalText style={styles.text} >Everything your school in one digital space for easy management</NormalText>
       </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: '30%'
    },
    text: {
        textAlign: 'center',
    }
})
