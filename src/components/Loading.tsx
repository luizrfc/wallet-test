import React, { Fragment, useContext } from "react";
import Animated from "react-native-reanimated";
import { ConfigContext } from "../context/configContext";
import { styleScreen } from "../styles/themeStyle";


function Loading() {
  const configContext = useContext(ConfigContext);

  return (
    <Fragment>
      <Animated.View
        style={[styleScreen.backTop, configContext?.animatedTopStyle]}
      />
      <Animated.View
        style={[styleScreen.backBottom, configContext?.animatedBottomStyle]}
      />
    </Fragment>
  );
}

export default Loading;
