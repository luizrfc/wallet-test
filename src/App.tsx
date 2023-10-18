import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors, styleTheme } from "./styles/themeStyle";
import Navigation from './navigation';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.blueDark}
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
