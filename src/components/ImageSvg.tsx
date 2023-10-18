import React from "react";
const SvgBackDown = require("../assets/svg/back-element-down.svg");
const SvgBackUp = require("../assets/svg/back-element-up.svg");
const SvgIconAdd = require("../assets/svg/icon-add.svg");
const SvgIconBack = require("../assets/svg/icon-back.svg");
const SvgIconCamera = require("../assets/svg/icon-cam.svg");
const SvgIconWallet = require("../assets/svg/icon-wallet.svg");

import { LocalSvg } from "react-native-svg";

type ImagesList =
  | "add"
  | "back"
  | "camera"
  | "wallet"
  | "back-up"
  | "back-down";

interface IImages {
  image: ImagesList;
  width?: number;
  height?: number;
  color?: string;
}

const ImageSvg = ({
  image,
  width = 24,
  height = 24,
  color
}: IImages): React.ReactNode => {
  switch (image) {
    case "add":
      return <LocalSvg asset={SvgIconAdd} width={width} height={height} fill={color} />;
    case "back":
      return <LocalSvg asset={SvgIconBack} width={width} height={height} fill={color} />;
    case "camera":
      return <LocalSvg asset={SvgIconCamera} width={width} height={height} fill={color} />;
    case "back-up":
      return <LocalSvg asset={SvgBackUp} width={width} height={height} fill={color} />;
    case "back-down":
      return <LocalSvg asset={SvgBackDown} width={width} height={height} fill={color} />;
    case "wallet":
      return <LocalSvg asset={SvgIconWallet} width={width} height={height} />;
  }
};

export default ImageSvg;
