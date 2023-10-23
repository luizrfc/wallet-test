import React from "react";
import { Text as TextBase } from "react-native";
import { stylesBase, stylesFont } from "../styles/fontStyle";
import { Colors } from "../styles/themeStyle";

type TypesList = "small" | "paragraph" | "h5" | "h4" | "h3" | "h2" | "h1";
type WeightsList = "bold" | "regular";

interface IFonts {
  text: string;
  type?: TypesList;
  weight?: WeightsList;
  color?: string;
  testID?: string;
}

const Text = ({
  text,
  type = "small",
  color = Colors.white,
  weight = "regular",
  testID = 'text-id'
}: IFonts): React.ReactNode => {
  return (
    <TextBase testID={testID} style={[stylesBase(color)[weight], stylesFont[type]]}>{text}</TextBase>
  );
};

export default Text;
