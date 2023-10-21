import { mockCreditCard } from "../../mocks/creditCard";
import { anonymizeNumberCard, validateCreditCardCvv, validateCreditCardExpiration, validateCreditCardNumber } from "../validate";

const mockCard = mockCreditCard;

describe("Validate credit card infos", () => {
    // Number card
    test("Credit card number valid", () => {
        expect(validateCreditCardNumber(mockCard.number)).toBe(true);
    });
    test("A invalid credit card number", () => {
        expect(validateCreditCardNumber("0000 0000 0000 0000")).toBe(false);
    });
    test("Possible validated card number", () => {
        expect(validateCreditCardNumber("5502 0919 4514")).toBe(true);
    });
    test("Invalid card number", () => {
        expect(validateCreditCardNumber("5502 0919 4514 0000")).toBe(false);
    });
});

describe("Validate credit card expiration", () => {
    test("Credit card number valid", () => {
        expect(validateCreditCardExpiration(mockCard.expiry)).toBe(true);
    });
    test("A invalid credit card expiry", () => {
        expect(validateCreditCardExpiration("00/00")).toBe(false);
    });
    test("Possible validated card number", () => {
        expect(validateCreditCardExpiration("12/30")).toBe(true);
    });
    test("Invalid card expiry", () => {
        expect(validateCreditCardExpiration("13/00")).toBe(false);
    });
});

describe("Validate credit card CVV", () => {
    test("Credit card CVV valid", () => {
        expect(validateCreditCardCvv(mockCard.cvv)).toBe(true);
    });
    test("A invalid credit card CVV", () => {
        expect(validateCreditCardCvv("")).toBe(false);
    });
    test("Possible validated card CVV", () => {
        expect(validateCreditCardCvv("123")).toBe(true);
    });
});

describe("Anonymize card number result", () => {
    // Number card
    test("Anonymize a correct card number", () => {
        expect(anonymizeNumberCard(mockCard.number)).toBe("•••• •••• •••• 2207");
    });
    test("Invalid card number return default value", () => {
        expect(anonymizeNumberCard("")).toBe("•••• •••• •••• ••••");
    });
});
