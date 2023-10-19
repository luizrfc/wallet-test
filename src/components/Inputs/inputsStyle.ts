import { StyleSheet } from "react-native";
import { Colors } from "../../styles/themeStyle";


const stylesInput = StyleSheet.create({
  grid: {
    paddingHorizontal: 2,
    paddingVertical: 2
  },
  default: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Colors.black,
    elevation: 2,
    shadowRadius: 2,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: Colors.white
  },
  input: {
    width: "100%"
  },
  label: {
    marginBottom: 8
  },
  icon: {
    width: 24,
    marginRight: 32
  },
  error: {
    borderWidth: 1,
    borderColor: Colors.error,
    backgroundColor: Colors.errorBackground
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
  }
});

export { stylesButton, stylesInput };
