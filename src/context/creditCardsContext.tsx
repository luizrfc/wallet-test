import { useState, createContext } from 'react';
import { ICardModel } from '../models/cardModel';
import { mockCreditCard } from '../mocks/creditCard';
import { getCards } from '../services/cardsService';

interface ICards extends ICardModel {
    position: number;
}

interface IRegisterCardContext {
    newCard: ICardModel;
    success: boolean;
    data: ICards[];
    getCreditCards: () => void;
    registerNewCard: (data: ICardModel) => void;
    setSuccess: (value: boolean) => void;
}

interface RegisterCardContextProps {
    children: React.ReactNode;
}

const CreditCardContext = createContext<IRegisterCardContext | null>(null);

const CreditCardProvider = ({ children }: RegisterCardContextProps) => {
    const [newCard, setNewCard] = useState<ICardModel>(mockCreditCard);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState<ICards[]>([]);

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

    const registerNewCard = async (data: ICardModel) => {
        setNewCard(data);
        await getCreditCards();
        setSuccess(true);
    }

    return (
        <CreditCardContext.Provider
            value={{
                newCard,
                success,
                data,
                getCreditCards,
                registerNewCard,
                setSuccess
            }}
        >
            {children}
        </CreditCardContext.Provider>
    );
};

export { CreditCardContext, CreditCardProvider }