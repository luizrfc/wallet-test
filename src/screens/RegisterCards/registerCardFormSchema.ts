import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCreditCardCvv, validateCreditCardExpiration, validateCreditCardNumber } from '../../utils/validate';

export const schema = yup.object({
    number_card: yup.string()
        .required("Insira um cartão")
        .test('validate-card', 'Insira um cartão válido', (value) => validateCreditCardNumber(value)),
    name: yup.string()
        .required("Insira um nome")
        .min(3, "Insira um nome válido"),
    expiry: yup.string()
        .required("É necessário o código de expiração")
        .min(5, "Insira uma data válida")
        .test('expiry-card', 'Data de expiração inválida', (value) => validateCreditCardExpiration(value)),
    cvv: yup.string()
        .required("Insira o CVV do cartão")
        .min(3, "Insira um CVV válido")
        .test('cvv-card', 'Código CVV inválido', (value) => validateCreditCardCvv(value)),
});

export const registerCardFormSchema = yupResolver(schema);