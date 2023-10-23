import React from "react";
import "react-native";
import { fireEvent, render } from '@testing-library/react-native';
import Button, { TypesList } from "../buttonComponent";
import renderer from 'react-test-renderer';

describe("Button", () => {
  const handleClick = jest.fn();

  it("renders text and handles click event", () => {
    const text = "Click me!";
    const type: TypesList = "primary";
    const disabled = false;

    const { getByTestId } = render(
      <Button
        text={text}
        type={type}
        disabled={disabled}
        handleClick={handleClick}
      />
    );

    const textButton = getByTestId("text-btn-id");
    expect(textButton).toBeTruthy();

    fireEvent.press(textButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it('render Button component correctly', () => {
    const component = renderer.create(<Button
      text="Botão"
      type="primary"
      handleClick={handleClick}
    />).toJSON();
    expect(component).toMatchSnapshot();
  })
});
