import React, { Fragment, useContext } from "react";
import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { ConfigContext } from "../context/configContext";
import { styleScreen } from "../styles/themeStyle";
import ImageSvg from "./ImageSvg";


function Loading() {
  const configContext = useContext(ConfigContext);

  return (
    <Fragment>
      <Animated.View
        style={[styleScreen.backTop, configContext?.animatedTopStyle]}
      />
      {configContext?.loading && (
        <Animated.View
          entering={FadeIn}
          style={[styleScreen.alignCenter]}
        >
          <ImageSvg image="wallet" width={50} height={50} />
        </Animated.View>
      )}
      <Animated.View
        style={[styleScreen.backBottom, configContext?.animatedBottomStyle]}
      />
    </Fragment>
  );
}

export default Loading;
