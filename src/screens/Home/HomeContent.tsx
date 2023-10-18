import React, { Fragment, useContext } from 'react';

import { Box, Button, Container, ImageSvg, Loading, Text } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationStackParams';
import useHome from './HomeHooks';
import { ConfigContext, ConfigProvider } from '../../context/configContext';
import { View } from 'react-native';
import { styleScreen } from '../../styles/themeStyle';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const HomeScreen = (): JSX.Element => {
    const { handleLoadingCreditCards, handleBtnRegister } = useHome();
    const configContext = useContext(ConfigContext);

    return (
        <Container>
            <Loading />
            {!configContext?.loading && (
                <Fragment>
                    <Animated.View
                        entering={FadeInDown}
                        style={[styleScreen.alignCenter, styleScreen.title]}
                    >
                        <Text text="Wallet Test" type="h1" weight="regular" />
                    </Animated.View>
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
                </Fragment>
            )}
        </Container>
    )
}

export default HomeScreen;