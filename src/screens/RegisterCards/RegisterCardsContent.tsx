import { View } from "react-native";
import { Box, Button, Container, Loading, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";

const RegisterCardsContent = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleClick = () => {
        navigation.navigate("Home");
    };

    return <Container>
        <Loading />
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

export default RegisterCardsContent;