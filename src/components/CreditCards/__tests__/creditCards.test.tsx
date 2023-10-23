import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import CreditCards from "../creditCards";
import { mockCreditCard } from "../../../mocks/creditCard";

test("Render a credit card correctly", () => {
  const data = {
    name: "Customer",
    number: "0000 0000 0000 1234",
    expiry: "00/00",
    kind: "black"
  }
  const component = renderer
    .create(
      <CreditCards
        name={data.name}
        number={data.number}
        expiry={data.expiry}
        kind="black"
      />
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
