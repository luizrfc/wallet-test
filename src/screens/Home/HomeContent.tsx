import React from 'react';
import { Text, View } from 'react-native';
import { styleTheme } from '../../styles/themeStyle';

const HomeScreen = (): JSX.Element => {
    return <View style={styleTheme(16).main}>
        <Text style={{ color: 'white' }}>Wallet Test</Text>
    </View>
}

export default HomeScreen;