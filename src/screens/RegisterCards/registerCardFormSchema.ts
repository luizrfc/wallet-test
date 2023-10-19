import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    number_card: yup.string().required("Insira um cartão"),
    name: yup.string().required("Insira um nome"),
});

export const registerCardFormSchema = yupResolver(schema);