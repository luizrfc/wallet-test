import React from 'react';
import { render } from '@testing-library/react-native';
import InputLabel from '../InputLabel';

describe('InputLabel', () => {
    it('renders the label text', () => {
        const labelText = 'Test Label';
        const { getByText } = render(<InputLabel label={labelText} />);
        const labelElement = getByText(labelText);
        expect(labelElement).toBeDefined();
    });

    it('renders an empty label if no label prop is provided', () => {
        const { getByText } = render(<InputLabel />);
        const labelElement = getByText('');
        expect(labelElement).toBeDefined();
    });
});