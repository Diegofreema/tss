import {ThemedView} from "@/features/shared/components/ThemedView";
import {MediumText, NormalText} from "@/features/shared/components/typography";
import {RFValue} from "react-native-responsive-fontsize";


type Props = {
    title: string;
    subTitle?: string;
}
export const AuthTitle = ({subTitle,title}: Props) => {
    return (
        <ThemedView>
            <MediumText>{title}</MediumText>
            {subTitle && <NormalText style={{fontSize: RFValue(10)}}>{subTitle}</NormalText>}
        </ThemedView>
    );
};