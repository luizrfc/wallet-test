import React, { Fragment, useContext } from "react";

import { Button, Container, CreditCards, Text } from "../../components";

import { TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { Colors, styleScreen } from "../../styles/themeStyle";
import useCreditCards from "./CreditCardsHook";
import { CreditCardContext } from "../../context/creditCardsContext";

function CreditCardsContent() {
    const { cardSelected, animatedCardOne, animatedCardTwo, selectCard } = useCreditCards();
    const creditCardContext = useContext(CreditCardContext);

    return (
        <Container ph={0}>
            <Fragment>
                <View
                    style={{
                        width: "100%",
                        backgroundColor: Colors.white,
                        paddingVertical: 24,
                        borderBottomRightRadius: 48,
                        borderBottomLeftRadius: 48,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text color={Colors.secondary} text="Meus cartões" type="h4" />
                </View>
                <View
                    style={[
                        styleScreen.screen,
                        { paddingVertical: 16, paddingHorizontal: 32 }
                    ]}
                >
                    {creditCardContext?.data.map((card) => (
                        <Animated.View
                            style={[
                                { width: "100%", position: "absolute" },
                                card.position == 1
                                    ? animatedCardOne
                                    : animatedCardTwo
                            ]}
                            key={card.position}
                        >
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => selectCard(card.position)}
                            >
                                <CreditCards
                                    name={card.name}
                                    number={card.number}
                                    expiry={card.expiry}
                                    id={card.id}
                                    kind={card.kind}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    ))}

                    {cardSelected > 2 ? (
                        <Animated.View
                            entering={FadeInUp}
                            style={{
                                width: "100%",
                                position: "absolute",
                                bottom: 200,
                                alignItems: "center"
                            }}
                        >
                            <Button text="pagar com este cartão" type="secondary" />
                        </Animated.View>
                    ) : (
                        <Animated.View
                            entering={FadeIn}
                            style={{
                                width: "100%",
                                position: "absolute",
                                bottom: 200,
                                alignItems: "center"
                            }}
                        >
                            <Text
                                text="usar este cartão"
                                color={Colors.white}
                                type="paragraph"
                            />
                        </Animated.View>
                    )}
                </View>
            </Fragment>
        </Container>
    );
}

export default CreditCardsContent;
