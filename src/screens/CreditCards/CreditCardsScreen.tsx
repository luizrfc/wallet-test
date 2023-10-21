import { View } from "react-native";
import { Box, Button, Container, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import CreditCardsContent from "./CreditCardsContent";

const CreditCardsScreen = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleClick = () => {
        navigation.navigate("Home");
    };

    return <CreditCardsContent />
}

export default CreditCardsScreen;