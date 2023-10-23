import { ReactElement, useState } from "react";
import { Dimensions } from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import { ICardModel } from "../../models/cardModel";
import { getCards } from "../../services/cardsService";

interface NavigationProps {
  children: ReactElement<any, any>;
}

interface ICards extends ICardModel {
  position: number;
}

interface ICreditCardsHooks {
  data: Array<ICards>;
  cardSelected: number;
  selectCard: (value: number) => void;
  startScreen: () => void;
  animatedCardOne: any;
  animatedCardTwo: any;
}

const useCreditCards = (): ICreditCardsHooks => {
  const [data, setData] = useState<Array<ICards>>([]);
  const [cardSelected, setCardSelected] = useState<number>(1);

  const getCreditCards = async () => {
    const result = await getCards();
    if (result.success) {
      const cardsList = result.data.map((card: any, index: number) => ({
        ...card,
        position: index + 1
      }));
      setData(cardsList);
    }
  };

  const configSpring = {
    duration: 1000,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 25
  };

  const deviceHeight = Dimensions.get("window").height - 250;

  const animatedCardOne = useAnimatedStyle(() => ({
    top: withSpring(
      interpolate(
        cardSelected ?? 1,
        [1, 2, 3, 4],
        [180, 120, 100, deviceHeight],
        Extrapolate.CLAMP
      ),
      configSpring
    ),
    zIndex: withSpring(
      interpolate(cardSelected ?? 1, [1, 2], [1, 0], Extrapolate.CLAMP)
    ),
    opacity: withSpring(
      interpolate(
        cardSelected ?? 1,
        [1, 2, 3, 4],
        [1, 1, 1, 0.6],
        Extrapolate.CLAMP
      )
    )
  }));

  const animatedCardTwo = useAnimatedStyle(() => ({
    top: withSpring(
      interpolate(
        cardSelected ?? 2,
        [1, 2, 3, 4],
        [120, 180, deviceHeight, 100],
        Extrapolate.CLAMP
      ),
      configSpring
    ),
    zIndex: withSpring(
      interpolate(cardSelected ?? 2, [1, 2], [0, 1], Extrapolate.CLAMP)
    ),
    opacity: withSpring(
      interpolate(
        cardSelected ?? 1,
        [1, 2, 3, 4],
        [1, 1, 0.6, 1],
        Extrapolate.CLAMP
      )
    )
  }));

  const selectCard = (position: number) => {
    if (position === 1) {
      setCardSelected(cardSelected === 4 ? 1 : 3);
    }
    if (position === 2) {
      setCardSelected(cardSelected === 3 ? 2 : 4);
    }
  };

  const startScreen = () => {
    setCardSelected(1);
    getCreditCards();
  };

  return {
    data,
    cardSelected,
    animatedCardOne,
    animatedCardTwo,
    selectCard,
    startScreen
  }
};

export default useCreditCards;
