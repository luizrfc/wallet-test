import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home/HomeContent";

const { Navigator, Screen } = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Home"
            >
                <Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
