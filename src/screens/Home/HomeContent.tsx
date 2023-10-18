import React from 'react';
import { View } from 'react-native';
import { styleTheme } from '../../styles/themeStyle';
import { Text } from '../../components';

const HomeScreen = (): JSX.Element => {
    return <View style={styleTheme(16).main}>
        <Text text="Wallet Test" type="h1" weight="regular" />
    </View>
}

export default HomeScreen;