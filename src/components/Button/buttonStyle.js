import { StyleSheet } from "react-native";
import { Colors } from "../../styles/themeStyle";

const stylesBase = StyleSheet.create({
  default: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    minHeight: 48
  }
});

const stylesButton = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
    color: Colors.blueDark
  },
  secondary: {
    backgroundColor: Colors.secondary,
    color: Colors.white
  },
  disabled: {
    backgroundColor: Colors.greyLight,
    color: Colors.primary
  },
  icon: {
    backgroundColor: "transparent",
    color: Colors.secondary
  },
  rounded: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    width: 42,
    height: 42,
    minHeight: 42,
    padding: 0
  }
});

export { stylesBase, stylesButton };
