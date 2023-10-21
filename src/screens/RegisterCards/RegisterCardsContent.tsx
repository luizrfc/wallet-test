import { Container, Loading, Text } from "../../components";
import RegisterCardsForm from "./RegisterCardsForm";
import Animated, { FadeInDown } from "react-native-reanimated";
import { styleScreen } from "../../styles/themeStyle";
import { CreditCardContext } from "../../context/creditCardsContext";
import { Fragment, useContext } from "react";
import RegisterCardsSuccess from "./RegisterCardsSuccess";
import { ConfigContext } from "../../context/configContext";

const RegisterCardsContent = (): JSX.Element => {
    const creditCardContext = useContext(CreditCardContext);
    const configContext = useContext(ConfigContext);

    return (
        <Container>
            <Loading />
            {!configContext?.loading &&
                <Fragment>
                    <Animated.View
                        entering={FadeInDown}
                        style={[styleScreen.alignCenter, styleScreen.title]}
                    >
                        <Text text="Wallet Test" type="h1" weight="regular" />
                    </Animated.View>
                    {creditCardContext?.success ? (
                        <RegisterCardsSuccess />
                    ) : (
                        <RegisterCardsForm />
                    )}
                </Fragment>
            }
        </Container>
    )
}

export default RegisterCardsContent;