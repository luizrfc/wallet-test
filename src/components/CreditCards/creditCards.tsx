import React from "react";
import { View } from "react-native";
import { ICardModel } from "../../models/cardModel";
import { Colors } from "../../styles/themeStyle";
import Text from "../TextComponent";
import Item from "../Containers/item";
import { anonymizeNumberCard } from "../../utils/validate";


const CreditCards = ({
  name = "Customer",
  number = "0000 0000 0000 0000",
  expiry = "00/00",
  kind = "black",
  id = "000"
}: ICardModel): React.ReactNode => {
  const getNameCard = (_kind: string) => {
    if (_kind === "black") return "Black Card";
    if (_kind === "green") return "Green Card";
    return "Credit Card";
  };

  const getColorCard = (_kind: string) => {
    if (_kind === "black") return Colors.black;
    if (_kind === "green") return Colors.primary;
    return Colors.primary;
  };

  const getColorFontCard = (_kind: string) => {
    if (_kind === "black") return Colors.white;
    return Colors.black;
  };

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
