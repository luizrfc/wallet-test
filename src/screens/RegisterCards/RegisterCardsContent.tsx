import { View } from "react-native";
import { Box, Button, Container, Input, Loading, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import useRegisterCard from "./RegisterCardHook";
import { Controller } from "react-hook-form";
import RegisterCardsForm from "./RegisterCardsForm";
import Animated, { FadeInDown } from "react-native-reanimated";
import { styleScreen } from "../../styles/themeStyle";

const RegisterCardsContent = (): JSX.Element => {
    return <Container>
        <Loading />
        <Animated.View
            entering={FadeInDown}
            style={[styleScreen.alignCenter, styleScreen.title]}
        >
            <Text text="Wallet Test" type="h1" weight="regular" />
        </Animated.View>
        <RegisterCardsForm />
    </Container>
}

export default RegisterCardsContent;