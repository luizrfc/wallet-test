import React from 'react';
import { View } from 'react-native';
import { styleTheme } from '../../styles/themeStyle';
import { Box, Button, Container, Text } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationStackParams';

const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLoadingCreditCards = () => {
        setTimeout(() => {
            navigation.navigate("CreditCards");
        }, 2000);
    };

    const handleBtnRegister = () => {
        navigation.navigate("RegisterCards");
    };

    return <Container>
        <Text text="Wallet Test" type="h1" weight="regular" />
        <Box>
            <Button
                text="Meus cartões"
                type="secondary"
                handleClick={() => handleLoadingCreditCards()}
                />
        </Box>
        <Box>
            <Button
                text="Cadastrar cartão"
                type="primary"
                handleClick={() => handleBtnRegister()}
            />
        </Box>
    </Container>
}

export default HomeScreen;