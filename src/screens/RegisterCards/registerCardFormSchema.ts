import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateCreditCardNumber } from '../../utils/validate';

const schema = yup.object({
    number_card: yup.string()
        .required("Insira um cartão")
        .test('validate-card', 'Insira um cartão válido', (value) => validateCreditCardNumber(value)),
    name: yup.string().required("Insira um nome"),
});

export const registerCardFormSchema = yupResolver(schema);