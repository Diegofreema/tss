import {PropsWithChildren} from "react";
import {constantStyles} from "@/features/shared/constants";
import {ThemedView} from "@/features/shared/components/ThemedView";

export const Wrapper = ({children}:PropsWithChildren) => {
    return (
        <ThemedView style={constantStyles.container}>
            {children}
        </ThemedView>
    );
};