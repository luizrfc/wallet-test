import React, { Fragment } from "react";
import "react-native";
import renderer from "react-test-renderer";
import Container from "../container";

test("Render a container component correctly", () => {
  const button = renderer
    .create(
      <Container>
        <Fragment></Fragment>
      </Container>
    )
    .toJSON();
  expect(button).toMatchSnapshot();
});
