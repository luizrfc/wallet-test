import React, { Fragment } from "react";
import "react-native";
import renderer from "react-test-renderer";
import Box from "../box";

test("Render box component correctly", () => {
  const button = renderer
    .create(
      <Box><Fragment></Fragment></Box>
    )
    .toJSON();
  expect(button).toMatchSnapshot();
});
