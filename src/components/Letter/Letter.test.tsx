import React from 'react';
import { render, screen } from '@testing-library/react';
import Letter from './Letter';

describe('Letter tests', () => {
    test('renders Letter A', () => {
        render(<Letter value="А" />);
        const linkElement = screen.getByText(/A/i);
        expect(linkElement).toBeInTheDocument();
    });
})
