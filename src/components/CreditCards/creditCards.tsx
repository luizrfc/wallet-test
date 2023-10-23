import React from "react";
import { View } from "react-native";
import { ICardModel } from "../../models/cardModel";
import Text from "../TextComponent";
import Item from "../Containers/item";
import { anonymizeNumberCard } from "../../utils/validate";
import { getColorCard, getColorFontCard, getNameCard } from "./creditCardsHook";


const CreditCards = ({
  name = "Customer",
  number = "0000 0000 0000 0000",
  expiry = "00/00",
  kind = "black"
}: ICardModel): React.ReactNode => {

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 30,
        marginVertical: 20,
        borderRadius: 16,
        backgroundColor: getColorCard(kind)
      }}
    >
      <Text text={getNameCard(kind)} color={getColorFontCard(kind)} type="h5" />
      <Item mt={34} align="left">
        <Text text={name} color={getColorFontCard(kind)} type="paragraph" />
      </Item>
      <Item mt={4} align="left">
        <Text
          text={anonymizeNumberCard(number)}
          color={getColorFontCard(kind)}
          type="small"
        />
      </Item>
      <Item mt={4} align="left">
        <Text
          text={`Validade ${expiry}`}
          color={getColorFontCard(kind)}
          type="small"
        />
      </Item>
    </View>
  );
};

export default CreditCards;
