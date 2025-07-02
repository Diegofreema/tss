import {SafeAreaView} from "react-native-safe-area-context";
import {Stack} from "expo-router";


const ProtectedLayout = () => {
    return (
       <SafeAreaView>
           <Stack screenOptions={{headerShown: false}} />
       </SafeAreaView>
    );
};
export default ProtectedLayout;
