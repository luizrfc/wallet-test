export type CardType = "black" | "green";

export interface ICardModel {
  id?: string;
  cvv?: string;
  name: string;
  expiry: string;
  number: string;
  kind: CardType;
}
