import React, { useContext } from "react";
import { View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ConfigContext } from "../context/configContext";
import { RootStackParamList } from "./navigationStackParams";
import { stylesNavigation } from ".//navigationStyle";
import { Colors } from "../styles/themeStyle";
import { Button, Text } from "../components";

interface IRoute {
    name: string;
}

interface IHeader {
    route: IRoute;
    title?: string;
}

const NavigationHeader = ({ route, title }: IHeader) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const configContext = useContext(ConfigContext);

    function handleLoadingCreditCards() {
        configContext?.toggleLoading(true);
        setTimeout(() => {
            navigation.navigate("CreditCards");
            configContext?.toggleLoading(false);
        }, 2000);
    }

    return (
        <View
            style={[
                stylesNavigation.header,
                route.name === "CreditCards"
                    ? stylesNavigation.backWhite
                    : stylesNavigation.backTransparent
            ]}
        >
            <View style={{ width: "20%" }}>
                <Button
                    type="icon"
                    handleClick={navigation.goBack}
                    icon="back"
                    disabled={configContext?.loading}
                />
            </View>
            <View style={stylesNavigation.title}>
                <Text
                    text={title ?? ""}
                    type="h3"
                    color={
                        route.name === "CreditCards" ? Colors.blueDark : Colors.secondary
                    }
                />
            </View>
            <View style={{ width: "20%" }}>
                {route.name === "CreditCards" ? (<Button
                    type="icon"
                    icon="add"
                    handleClick={() => navigation.navigate("RegisterCards")}
                    disabled={configContext?.loading}
                />
                ) : (
                    <Button
                        type="icon"
                        icon="wallet"
                        handleClick={() => handleLoadingCreditCards()}
                        disabled={configContext?.loading}
                    />)}
            </View>
        </View>
    );
};

export default NavigationHeader;
