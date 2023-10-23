import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors } from "./styles/themeStyle";
import Navigation from './navigation/navigation';
import { CreditCardProvider } from './context/creditCardsContext';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <CreditCardProvider>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.blueDark}
        />
        <Navigation />
      </CreditCardProvider>
    </SafeAreaProvider>
  );
}

export default App;
