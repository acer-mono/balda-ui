import React from 'react';
import './Letter.css';

type LetterValue = 'А' | 'Б' | 'В' | 'Г' | 'Д' | 'Е' | 'Ё' | 'Ж' |
    'З' | 'И' | 'Й' | 'К' | 'Л' | 'М' | 'Н' | 'О' | 'П' | 'Р' | 'С' | 'Т' | 'У' |
    'Ф' | 'Х' | 'Ц' | 'Ч' | 'Ш' | 'Щ' | 'Ъ' | 'Ы' | 'Ь' | 'Э' | 'Ю' | 'Я';

export interface LetterProps {
    value: LetterValue
}

function Letter ({value} : LetterProps) {

    return (
        <div className="Letter">{value}</div>
    )
}

export default Letter;
