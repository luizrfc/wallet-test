import { Control, FieldErrors, FieldValues, SubmitHandler, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { registerCardFormSchema } from './registerCardFormSchema';
import { ICardModel } from '../../models/cardModel';
import { addCard } from '../../services/cardsService';
import { useContext } from 'react';
import { ConfigContext } from '../../context/configContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationStackParams';
import { RegisterCardContext } from './registerCardContext';

interface IFormRegisterCard {
    number_card: string;
    name: string;
    expiry: string;
    cvv: string;
}

export interface IRegisterCard {
    control: Control<IFormRegisterCard>;
    errors: FieldErrors<IFormRegisterCard>;
    isValid: boolean;
    reset: () => void;
    handleSubmit: UseFormHandleSubmit<IFormRegisterCard>;
    onSubmit: SubmitHandler<FieldValues>;
    finishScreen: () => void;
}

const useRegisterCard = (): IRegisterCard => {
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<IFormRegisterCard>({
        resolver: registerCardFormSchema,
        mode: 'all',
        defaultValues: {
            number_card: "5502 0919 4514 2207",
            name: "Luiz Ricardo",
            cvv: "123",
            expiry: "12/25"
        }
    });
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const configContext = useContext(ConfigContext);
    const creditCardContext = useContext(RegisterCardContext);

    const onSubmit = async (data: FieldValues) => {
        const new_data: ICardModel = {
            name: data.name,
            cvv: data.cvv,
            expiry: data.expiry,
            number: data.number,
            kind: "black"
        };

        const result = await addCard(new_data);
        console.log("🚀 ~ file: RegisterCardHook.tsx:58 ~ onSubmit ~ result:", result)
        if (result.success) {
            creditCardContext?.setNewCard(result.data);
            creditCardContext?.setSuccess(true);
        }
    };

    const finishScreen = () => {
        configContext?.toggleLoading(true);
        setTimeout(() => {
            navigation.navigate("CreditCards");
            configContext?.toggleLoading(false);
        }, 2000);
    };

    return {
        control,
        errors,
        isValid,
        reset,
        handleSubmit,
        onSubmit,
        finishScreen
    }
}

export default useRegisterCard