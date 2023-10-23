import { Masks } from 'react-native-mask-input';
import useInput from '../inputHook';

describe('useInput', () => {
    it('should return the date mask when "date" is passed as an argument', () => {
        const selectMask = useInput().selectMask;
        const mask = selectMask('date');
        expect(mask).toEqual([/\d/, /\d/, "/", /\d/, /\d/]);
    });

    it('should return the CPF mask when "cpf" is passed as an argument', () => {
        const selectMask = useInput().selectMask;
        const mask = selectMask('cpf');
        expect(mask).toEqual(Masks.BRL_CPF);
    });

    it('should return the credit card mask when an invalid mask name is passed as an argument', () => {
        const selectMask = useInput().selectMask;
        const mask = selectMask('invalid');
        expect(mask).toEqual(Masks.CREDIT_CARD);
    });
});
