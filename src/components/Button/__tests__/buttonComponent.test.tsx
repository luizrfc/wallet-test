import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import Button from "../buttonComponent";

test("Render button correctly", () => {
  const button = renderer
    .create(
      <Button
        type="primary"
        text="test"
        handleClick={() => {
          return;
        }}
      />
    )
    .toJSON();
  expect(button).toMatchSnapshot();
});
