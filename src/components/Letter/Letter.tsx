import React from 'react';
import './Letter.css';

export interface LetterProps {
    value: string
}

function Letter ({value} : LetterProps) {
    if (!value)
    {
        throw new Error('Letter cannot have empty value!')
    }

    return (
        <div className="Letter">{value}</div>
    )
}

export default Letter;
