import React from 'react';
import './Letter.css';

export const Letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
    'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
    'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'] as const;

export type LetterValue = typeof Letters[number];

export interface LetterProps {
    value: LetterValue
}

function Letter ({value} : LetterProps) {

    return (
        <div data-testid="Letter" className="Letter">{value}</div>
    )
}

export default Letter;
