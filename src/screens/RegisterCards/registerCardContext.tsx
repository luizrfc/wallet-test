import { useState, createContext } from 'react';
import { ICardModel } from '../../models/cardModel';
import { mockCreditCard } from '../../mocks/creditCard';

interface IRegisterCardContext {
    newCard: ICardModel;
    setNewCard: (card: ICardModel) => void;
    success: boolean;
    setSuccess: (value: boolean) => void;
}

interface RegisterCardContextProps {
    children: React.ReactNode;
}

const RegisterCardContext = createContext<IRegisterCardContext | null>(null);

const RegisterCardProvider = ({ children }: RegisterCardContextProps) => {
    const [newCard, setNewCard] = useState<ICardModel>(mockCreditCard);
    const [success, setSuccess] = useState(false);

    return (
        <RegisterCardContext.Provider
            value={{
                newCard,
                success,
                setNewCard,
                setSuccess
            }}
        >   
            {children}  
        </RegisterCardContext.Provider>
    );
};

export { RegisterCardContext, RegisterCardProvider }