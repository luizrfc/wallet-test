import { useContext } from "react";

interface IHome {
    handleLoadingCreditCards: () => void;
    handleBtnRegister: () => void;
}

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../navigation/navigationStackParams';

import { ConfigContext } from "../../context/configContext";

const useHome = (): IHome => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const configContext = useContext(ConfigContext);

    const handleLoadingCreditCards = () => {
        configContext?.toggleLoading(true);

        setTimeout(() => {
            navigation.navigate("CreditCards");
            configContext?.toggleLoading(false);
        }, 2000);
    };

    const handleBtnRegister = () => {
        navigation.navigate("RegisterCards");
    };

    return {
        handleLoadingCreditCards,
        handleBtnRegister
    };
};

export default useHome;
