import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {PropsWithChildren} from "react";

type Props = {
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const CustomPressable = ({children,onPress,style}:PropsWithChildren<Props>) => {
    return (
        <TouchableOpacity hitSlop={20} onPress={onPress} style={style}>
            {children}
        </TouchableOpacity>
    );
};