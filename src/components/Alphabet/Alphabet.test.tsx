import React from 'react';
import { render, screen } from '@testing-library/react';
import Alphabet from "./Alphabet";

describe('Alphabet tests', () => {
    test('renders Alphabet',  () => {
        render(<Alphabet />);
        const items = screen.getAllByTestId('Letter')
        expect(items).toHaveLength(33)
    });
})
