import React from 'react';
import Letter, {LetterValue} from "../Letter/Letter";
import './Alphabet.css'

export default function Alphabet() {
    const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
    'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
    'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

    return (
        <div className="Alphabet">
            {(letters as Array<LetterValue>).map((value: LetterValue) =>
                <Letter value={value} />
            )}
        </div>
    )
}
