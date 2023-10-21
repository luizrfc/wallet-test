import { Colors } from "../../styles/themeStyle";

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

export { getColorCard, getColorFontCard, getNameCard };
