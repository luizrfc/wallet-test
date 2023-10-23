import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../InputComponent';
import { object } from 'yup';
import { FieldError } from 'react-hook-form';
import renderer from 'react-test-renderer';

describe('Input component', () => {
    const field = {
        name: 'name',
        ref: object,
        value: '',
        onChange: jest.fn(),
        onBlur: jest.fn(),
    };

    it('renders correctly with label', () => {
        const { getByTestId, getByText } = render(
            <Input
                field={field}
                label="Name"
                placeholder="Enter your name"
            />,
        );
        const label = getByTestId('label-test-id');
        const input = getByTestId('input-test-id');

        expect(label).toBeTruthy();
        expect(getByText('Name')).toBeTruthy();
        expect(input.props.placeholder).toBe('Enter your name');
    });

    it('renders correctly without label', () => {
        const { getByTestId } = render(
            <Input
                field={field}
                placeholder="Enter your name"
            />,
        );
        const input = getByTestId('input-test-id');
        expect(input.props.placeholder).toBe('Enter your name');
    });

    it('calls onChange and onBlur functions when typing and blurring', () => {
        const { getByTestId } = render(
            <Input
                field={field}
                label="Name"
                placeholder="Enter your name"
            />,
        );
        const input = getByTestId('input-test-id');

        fireEvent.changeText(input, 'John');
        expect(field.onChange).toHaveBeenCalledWith('John');

        fireEvent(input, 'blur');
        expect(field.onBlur).toHaveBeenCalled();
    });

    it('render input with helper to show errors message', () => {
        const messageError: FieldError = {
            type: 'error',
            message: "Error message"
        }
        const { getByTestId, getByText } = render(
            <Input
                field={field}
                label="Name"
                placeholder="Enter your name"
                helperText={messageError}
            />,
        );
        const input = getByTestId('input-test-id');
        const helper = getByTestId('helper-test-id');

        fireEvent.changeText(input, 'John');
        expect(field.onChange).toHaveBeenCalledWith('John');
        expect(helper).toBeTruthy();
        expect(getByText("Error message")).toBeTruthy();
    });

    it('render Input component correctly', () => {
        const component = renderer.create(<Input
            field={field}
            label="Name"
            placeholder="Enter your name"
        />).toJSON();
        expect(component).toMatchSnapshot();
    })
});
