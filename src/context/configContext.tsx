import React, { createContext, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

interface IAnimatedTop {
  top: number;
  width: number;
  height: number;
}

interface IAnimatedBottom {
  bottom: number;
  width: number;
  height: number;
}

interface IConfigContextType {
  loading: boolean;
  animatedTopStyle: IAnimatedTop;
  animatedBottomStyle: IAnimatedBottom;
  toggleLoading: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

interface IConfigProps {
  children: React.ReactNode;
}

const ConfigContext = createContext<IConfigContextType | null>(null);

const defaultPosition = -100;
const animatedPosition = -100;
const defaultWidth = 350;
const animatedWidth = 450;
const defaultHeight = 235;
const animatedHeight = 350;

const ConfigProvider = ({ children }: IConfigProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const offsetPosition = useSharedValue(defaultPosition);
  const offsetWidth = useSharedValue(defaultWidth);
  const offsetHeight = useSharedValue(defaultHeight);

  const animatedTopStyle = useAnimatedStyle(() => ({
    top: offsetPosition.value,
    width: offsetWidth.value,
    height: offsetHeight.value
  }));

  const animatedBottomStyle = useAnimatedStyle(() => ({
    bottom: offsetPosition.value,
    width: offsetWidth.value,
    height: offsetHeight.value
  }));

  const toggleLoading = (value: boolean) => {
    if (value) animateLoading();
    else {
      setTimeout(() => {
        offsetPosition.value = defaultPosition;
        offsetWidth.value = defaultWidth;
        offsetHeight.value = defaultHeight;
        setLoading(false);
      }, 200);
    }
  };

  function animateLoading() {
    setLoading(true);
    offsetPosition.value = withSpring(animatedPosition, {
      damping: 8,
      stiffness: 100
    });
    offsetWidth.value = withSpring(animatedWidth);
    offsetHeight.value = withSpring(animatedHeight);
  }

  return (
    <ConfigContext.Provider
      value={{
        loading,
        setLoading,
        animatedTopStyle,
        animatedBottomStyle,
        toggleLoading
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
