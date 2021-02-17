import React from 'react';
import { render, screen } from '@testing-library/react';
import Letter from './Letter';

describe('Letter tests', () => {
    test('renders Letter A', () => {
        render(<Letter value="A" />);
        const linkElement = screen.getByText(/A/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Letter with empty value', () => {
        expect(() => {
            render(<Letter value="" />);
        }).toThrowError();
    });
})
