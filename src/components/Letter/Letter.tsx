import React from 'react';
import './Letter.css';
import { useDrag } from 'react-dnd'

export const Letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
    'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
    'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'] as const;

export type LetterValue = typeof Letters[number];

type LetterProps = {
    value: LetterValue
}

const Letter: React.FC<LetterProps> = ({value} : LetterProps) => {
    const [{ opacity }, dragRef] = useDrag({
        item: { type: 'letter', value: value },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })
    return (
        <div
            ref={dragRef}
            style={{ opacity }}
            className="Letter"
            data-testid="Letter">{value}</div>
    )
}

export default Letter;
