import * as Services from "../api";
import { ICardModel } from "../../models/cardModel";
import { addCard, getCards } from "../cardsService";

describe("addCard", () => {
    it("should call add card with correct arguments", async () => {
        const mockCard: ICardModel = { name: "test card", expiry: '12/25', kind: 'black', number: '1234 4567 7890 1234', cvv: '123' };
        const postSpy = jest.spyOn(Services, "post");
        await addCard(mockCard);
        expect(postSpy).toHaveBeenCalledWith(`${Services.BASE_URL}/cards`, mockCard);
    });
});

describe("getCards", () => {
    it("should expect get list of cards", async () => {
        const getSpy = jest.spyOn(Services, "get");
        await getCards();
        expect(getSpy).toHaveBeenCalledWith(`${Services.BASE_URL}/cards`);
    });
});