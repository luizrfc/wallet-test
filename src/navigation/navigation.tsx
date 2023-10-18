import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConfigProvider } from "../context/configContext";

import HomeScreen from "../screens/Home/HomeContent";
import CreditCardsScreen from "../screens/CreditCards/CreditCardsScreen";
import RegisterCardsScreen from "../screens/RegisterCards/RegisterCardsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

function Navigation() {
    return (
        <ConfigProvider>
            <NavigationContainer>
                <Navigator
                    initialRouteName="Home"
                >
                    <Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Screen
                        name="RegisterCards"
                        component={RegisterCardsScreen}
                        options={{ headerShown: false }}
                    />
                    <Screen
                        name="CreditCards"
                        component={CreditCardsScreen}
                        options={{ headerShown: false }}
                    />
                </Navigator>
            </NavigationContainer>
        </ConfigProvider>
    );
}

export default Navigation;
