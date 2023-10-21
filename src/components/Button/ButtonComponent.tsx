import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Text, ImageSvg } from "..";
import { stylesBase, stylesButton } from "./buttonStyle";
import useButton from "./buttonHooks";

export type IconsList = "add" | "back" | "wallet" | "camera";
type TypesList = "primary" | "secondary" | "disabled" | "icon" | "rounded";

interface IButtons {
  text?: string;
  type: TypesList;
  disabled?: boolean;
  icon?: IconsList;
  handleClick?: (event: GestureResponderEvent) => void;
  handleIcon?: () => void;
}

const Button = ({
  text,
  type = "primary",
  disabled = false,
  icon,
  handleClick
}: IButtons): React.ReactNode => {

  const { fontColor } = useButton();

  return (
    <TouchableOpacity
      style={[stylesBase.default, stylesButton[type]]}
      activeOpacity={0.85}
      onPress={handleClick}
      disabled={disabled}
    >
      {icon && (
        <ImageSvg image={icon} color={fontColor(disabled, type)} />
      )}
      {text && (
        <Text text={text} color={fontColor(disabled, type)} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
