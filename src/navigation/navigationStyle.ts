import { StyleSheet } from "react-native";
import { Colors } from "../styles/themeStyle";


const stylesNavigation = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    minHeight: 66
  },
  backWhite: {
    backgroundColor: Colors.white,
    elevation: 6,
    shadowColor: Colors.blueDark
  },
  backTransparent: {
    backgroundColor: "transparent",
    elevation: 0
  },
  title: {
    width: "60%",
    alignItems: "center"
  }
});

export { stylesNavigation };
