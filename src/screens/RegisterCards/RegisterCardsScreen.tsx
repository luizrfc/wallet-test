import { View } from "react-native";
import { Box, Button, Container, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import RegisterCardsContent from "./RegisterCardsContent";

const RegisterCardsScreen = (): JSX.Element => {
    return <RegisterCardsContent />
}

export default RegisterCardsScreen;