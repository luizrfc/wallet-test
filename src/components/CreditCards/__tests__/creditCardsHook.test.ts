import { getColorCard, getColorFontCard, getNameCard } from '../creditCardsHook';

describe("Return a correct color of card", () => {
    it("should return a black color", () => {
        expect(getColorCard("black")).toBe("#000");
    })
    it("should return a green color", () => {
        expect(getColorCard("green")).toBe("#A5FF32");
    })
    it("should return a default color", () => {
        expect(getColorCard("white")).toBe("#A5FF32");
    })
})

describe("Return a name of the card", () => {
    it("should return a black name", () => {
        expect(getNameCard("black")).toBe("Black Card");
    })
    it("should return a green name", () => {
        expect(getNameCard("green")).toBe("Green Card");
    })
    it("should return a default name", () => {
        expect(getNameCard("white")).toBe("Credit Card");
    })
})