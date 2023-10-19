import { StyleSheet } from "react-native";

const enum Colors {
    blueDark = "#142995",
    primary = "#A5FF32",
    secondary = "#12C2E9",
    greyLight = "#EEE",
    grey = "#BBB",
    greyDark = "#3F3F3F",
    black = "#000",
    white = "#FFF",
    errorBackground = "rgb(238, 226, 226)",
    error = "#F00",
    warning = "#FFB800",
    success = "#1E9400",
    lighter = "#FFFFFF"
}

const styleTheme = (ph: number = 0) =>
    StyleSheet.create({
        main: {
            flex: 1,
            backgroundColor: Colors.blueDark,
            justifyContent: "center",
            alignItems: "center",
            padding: ph
        },
        container: {
            flex: 1,
            backgroundColor: Colors.blueDark,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: ph
        }
    });

const styleScreen = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.blueDark,
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center"
    },
    alignCenter: {
        width: "100%",
        alignItems: "center"
    },
    title: {
        marginBottom: 20
    },
    backTop: {
        position: "absolute",
        width: 350,
        height: 235,
        flexShrink: 0,
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.2,
        transform: [{ rotate: "-30deg" }],
        left: -80
    },
    backBottom: {
        position: "absolute",
        width: 350,
        height: 235,
        flexShrink: 0,
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.2,
        transform: [{ rotate: "150deg" }],
        right: -80
    }
});

export { Colors, styleTheme, styleScreen };
