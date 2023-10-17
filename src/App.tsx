import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, styleTheme } from "./styles/themeStyle";

function App(): JSX.Element {

  return (
    <SafeAreaView style={styleTheme(16).container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.blueDark}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styleTheme(16).main}>
          <Text style={{color: 'white'}}>Wallet Test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
