import { View } from "react-native";
import { Box, Button, Container, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";

const RegisterCardsScreen = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleClick = () => {
        navigation.navigate("Home");
    };

    return <Container>
        <Text text="Registro" type="h1" weight="regular" />
        <Box>
            <Button
                text="Home"
                type="secondary"
                handleClick={() => handleClick()}
            />
        </Box>
    </Container>
}

export default RegisterCardsScreen;