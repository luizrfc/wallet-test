import React, { Fragment } from "react";
import "react-native";
import renderer from "react-test-renderer";
import Item from "../item";

test("Render item container component correctly", () => {
  const button = renderer
    .create(
      <Item type="input" mt={10}>
        <Fragment></Fragment>
      </Item>
    )
    .toJSON();
  expect(button).toMatchSnapshot();
});
