import { ICardModel } from "../models/cardModel";
import * as Services from "./api";

export const addCard = async (data: ICardModel) => {
  return Services.post(`${Services.BASE_URL}/cards`, data);
};

export const getCards = async () => {
  return Services.get(`${Services.BASE_URL}/cards`);
};
