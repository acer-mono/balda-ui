import React from 'react';
import { render, screen } from '@testing-library/react';
import {Board} from "./Board";

describe('Board tests', () => {
    test('renders Board with 7 rows and columns',  () => {
        render(<Board size={7} />);
        const items = screen.getAllByTestId('Cell')
        expect(items).toHaveLength(49)
    });
})
