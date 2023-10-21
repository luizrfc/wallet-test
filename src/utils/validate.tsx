import valid from "card-validator";

export const validateCreditCardNumber = (value: string): boolean => {
    const result = valid.number(value);
    if (value.length === 19) return result.isPotentiallyValid && result.isValid;
    return result.isPotentiallyValid || result.isValid;
};

export const validateCreditCardExpiration = (value: string): boolean => {
    const result = valid.expirationDate(value);
    return result.isPotentiallyValid && result.isValid;
};

export const validateCreditCardCvv = (value: string): boolean => {
    const result = valid.cvv(value);
    return result.isPotentiallyValid && result.isValid;
};

export const anonymizeNumberCard = (value: string): string => {
    if(value.length === 0) return "•••• •••• •••• ••••"
    let re = /(\w+)\s(\w+)\s(\w+)\s(\w+)/;
    return value.replace(re, "•••• •••• •••• $4");
};
