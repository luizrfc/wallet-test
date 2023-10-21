import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import CreditCards from "../creditCards";
import { mockCreditCard } from "../../../mocks/creditCard";

const mockCard = mockCreditCard;

test("Render a credit card correctly", () => {
  const button = renderer
    .create(
      <CreditCards
        name={mockCard.name}
        number={mockCard.number}
        expiry={mockCard.expiry}
        id={mockCard.id}
        kind={mockCard.kind}
      />
    )
    .toJSON();
  expect(button).toMatchSnapshot();
});
