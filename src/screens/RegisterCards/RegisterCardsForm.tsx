import { View } from "react-native";
import { Box, Button, Container, Input, Item, Loading, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationStackParams";
import useRegisterCard from "./registerCardHook";
import { Controller } from "react-hook-form";
import { Fragment } from "react";

const RegisterCardsForm = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { control, isValid, onSubmit, handleSubmit } = useRegisterCard();

    return <Fragment>
        <Item type="input" mt={10}>
            <Controller
                control={control}
                name="number_card"
                render={({ field, fieldState: { error} }) =>
                    <Input
                        field={field}
                        label="número do cartão"
                        mask="credit_card"
                        icon="camera"
                        helperText={error}
                    />}
            />
        </Item>
        <Item type="input" mt={10}>
            <Controller
                control={control}
                name="name"
                render={({ field, fieldState: { error} }) =>
                    <Input
                        field={field}
                        label="nome do titular do cartão"
                        helperText={error}
                    />}
            />
        </Item>
        <View style={{ flexDirection: "row" }}>
            <Item type="input" width="50%" mr={3} mt={10}>
                <Controller
                    control={control}
                    name="expiry"
                    render={({ field, fieldState: { error} }) =>
                        <Input
                            field={field}
                            label="vencimento"
                            mask="date"
                            maxLength={5}
                            placeholder="MM/AA"
                            helperText={error}
                        />}
                />
            </Item>
            <Item type="input" width="50%" ml={3} mt={10}>
                <Controller
                    control={control}
                    name="cvv"
                    render={({ field, fieldState: { error} }) =>
                        <Input
                            field={field}
                            label="código de segurança"
                            maxLength={3}
                            helperText={error}
                        />}
                />
            </Item>
        </View>
        <Item type="input" mt={10}>
            <Button
                text="avançar"
                type={isValid ? "secondary" : "disabled"}
                disabled={!isValid}
                handleClick={handleSubmit(onSubmit)}
            />
        </Item>
    </Fragment>
}

export default RegisterCardsForm;