import React from 'react';
import { render } from '@testing-library/react-native';
import InputHelperText from '../InputHelperText';

describe('InputHelperText', () => {
    it('renders correctly with message prop', () => {
        const message = 'This is an error message';
        const { getByText } = render(<InputHelperText message={message} />);
        const textElement = getByText(message);
        expect(textElement).toBeDefined();
    });

    it('renders correctly without message prop', () => {
        const { getByText } = render(<InputHelperText />);
        const textElement = getByText('');
        expect(textElement).toBeDefined();
    });
});