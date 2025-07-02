import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, TextProps, TextStyle} from 'react-native';
import {ThemedText} from "@/features/shared/components/ThemedText";
import {RFValue} from "react-native-responsive-fontsize";

type Props = TextProps & {
    style?: StyleProp<TextStyle>
}

export const BoldText = ({ children, style, ...props }:PropsWithChildren<Props>) => {
    return (
        <ThemedText style={[styles.bold, style]} {...props}>
            {children}
        </ThemedText>
    );
};

export const NormalText = ({ children, style, ...props }:PropsWithChildren<Props>) => {
    return (
        <ThemedText style={[styles.normal, style]} {...props}>
            {children}
        </ThemedText>
    );
};

export const MediumText = ({ children, style, ...props }:PropsWithChildren<Props>) => {
    return (
        <ThemedText style={[styles.medium, style]} {...props}>
            {children}
        </ThemedText>
    );
};

const styles = StyleSheet.create({
    bold: {

        fontSize: RFValue(20),
        fontFamily: 'PublicSansBold'
    },
    normal: {
        fontWeight: '400',
        fontSize: RFValue(12),
        fontFamily: 'PublicSansRegular'
    },
    medium: {
        fontWeight: '500',
        fontSize: RFValue(18),
        fontFamily: 'PublicSansMedium'
    },
});