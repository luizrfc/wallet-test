import { View } from "react-native";
import { Box, Button, Container, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import RegisterCardsContent from "./RegisterCardsContent";
import { useContext } from "react";
import { RegisterCardContext, RegisterCardProvider } from "./registerCardContext";

const RegisterCardsScreen = (): JSX.Element => {
    return <RegisterCardProvider>
        <RegisterCardsContent />
    </RegisterCardProvider>
}

export default RegisterCardsScreen;