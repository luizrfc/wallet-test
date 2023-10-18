import React from "react";
import { DimensionValue, View } from "react-native";
import { styleBox } from "./gridStyles";

interface IBox {
    width?: DimensionValue;
    pdHorizontal?: number;
    pdVertical?: number;
    children?: React.ReactNode;
}

const Box = ({
    width = "100%",
    pdHorizontal = 14,
    pdVertical = 10,
    children
}: IBox) => {
    return (
        <View style={styleBox(pdHorizontal, pdVertical, width).box}>
            {children}
        </View>
    );
};

export default Box;
