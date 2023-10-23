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

interface ImagesProps {
  image: ImagesList;
  width?: number;
  height?: number;
  color?: string;
  testID?: string;
}

const ImageSvg = ({
  image,
  width = 24,
  height = 24,
  color,
  testID,
}: ImagesProps): JSX.Element => {
  switch (image) {
    case "add":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgIconAdd} width={width} height={height} fill={color} />;
    case "back":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgIconBack} width={width} height={height} fill={color} />;
    case "camera":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgIconCamera} width={width} height={height} fill={color} />;
    case "back-up":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgBackUp} width={width} height={height} fill={color} />;
    case "back-down":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgBackDown} width={width} height={height} fill={color} />;
    case "wallet":
      return <LocalSvg testID={testID ?? 'icon-test-id'} asset={SvgIconWallet} width={width} height={height} />;
    default:
      return <></>;
  }
};

export default ImageSvg;
