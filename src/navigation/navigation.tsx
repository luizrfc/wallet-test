import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConfigProvider } from "../context/configContext";

import HomeScreen from "../screens/Home/HomeContent";
import CreditCardsScreen from "../screens/CreditCards/CreditCardsScreen";
import RegisterCardsScreen from "../screens/RegisterCards/RegisterCardsScreen";
import NavigationHeader from "./navigationHeader";
import { Loading } from "../components";

const { Navigator, Screen } = createNativeStackNavigator();

function Navigation() {
    return (
        <ConfigProvider>
            <NavigationContainer>
                <Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        animation: "fade",
                        header: ({ route, options }) => (
                            <NavigationHeader route={route} title={options.title} />
                        )
                    }}
                >
                    <Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Screen
                        name="RegisterCards"
                        component={RegisterCardsScreen}
                        options={{ title: "Cadastro", headerTransparent: true }}
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
