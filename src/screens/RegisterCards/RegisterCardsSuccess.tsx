import React, { Fragment, useContext } from "react";
import Animated, { FadeInDown, FlipInEasyY } from "react-native-reanimated";

import { Button, CreditCards, Text, Item } from "../../components";
import { styleScreen } from "../../styles/themeStyle";

import useRegisterCard from "./registerCardHook";
import { CreditCardContext } from "../../context/creditCardsContext";

function RegisterCardsSuccess() {
  const { finishScreen } = useRegisterCard();
  const context = useContext(CreditCardContext);

  return (
    <Fragment>
      <Animated.View
        entering={FadeInDown}
        style={[styleScreen.alignCenter, styleScreen.title]}
      >
        <Item mt={12} mb={0}>
          <Text
            text="cartão cadastrado com sucesso"
            type="h4"
            weight="regular"
          />
        </Item>
      </Animated.View>

      {context?.newCard && (
        <Animated.View entering={FlipInEasyY} style={{ width: "100%" }}>
          <CreditCards
            name={context?.newCard.name}
            number={context?.newCard.number}
            expiry={context?.newCard.expiry}
            id={context?.newCard.id}
            kind={context?.newCard.kind}
          />
        </Animated.View>
      )}

      <Item mt={10}>
        <Button
          text="avançar"
          type={"secondary"}
          handleClick={finishScreen}
        />
      </Item>
    </Fragment>
  );
}

export default RegisterCardsSuccess;
