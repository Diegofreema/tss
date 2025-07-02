import {View} from 'react-native';

type Props = {
    size?: number;
}

export const Spacer = ({size = 20}: Props) => {
    return (
        <View style={{height: size}} />


    );
};