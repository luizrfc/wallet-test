import { View } from "react-native";
import { Box, Button, Container, Input, Loading, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import useRegisterCard from "./RegisterCardHook";
import { Controller } from "react-hook-form";

const RegisterCardsContent = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleClick = () => {
        navigation.navigate("Home");
    };

    const { control, isValid } = useRegisterCard();

    return <Container>
        <Loading />
        <Text text="Wallet Test" type="h1" weight="regular" />
        <Box>
            <Controller
                control={control}
                name="number_card"
                render={({ field }) =>
                    <Input
                        field={field}
                        name="number"
                        label="número do cartão"
                        mask="credit_card"
                        icon="camera"
                        minLength={19}
                    />}
            />

            <Controller
                control={control}
                name="name"
                render={({ field }) =>
                    <Input
                        field={field}
                        name="number"
                        label="nome do titular do cartão"
                        minLength={19}
                    />}
            />

            <Button
                text="avançar"
                type={isValid ? "secondary" : "disabled"}
                disabled={!isValid}
                handleClick={() => handleClick()}
            />
        </Box>
    </Container>
}

export default RegisterCardsContent;