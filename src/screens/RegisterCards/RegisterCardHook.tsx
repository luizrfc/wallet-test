import { Control, FieldErrors, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { registerCardFormSchema } from './registerCardFormSchema';

interface IFormRegisterCard {
    number_card: string;
    name: string;
    expiry: string;
    cvv: string;
}

export interface IRegisterCard {
    control: Control<IFormRegisterCard>;
    reset: () => void;
    handleSubmit: UseFormHandleSubmit<IFormRegisterCard>;
    errors: FieldErrors<IFormRegisterCard>;
    isValid: boolean;
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
            number_card: '',
            name: '',
            expiry: '',
            cvv: '',
        }
    });

    return {
        control,
        reset,
        handleSubmit,
        errors,
        isValid
    }
}

export default useRegisterCard