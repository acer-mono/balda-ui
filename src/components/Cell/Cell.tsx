import React, { useState } from 'react';
import  './Cell.css';
import { useDrop } from 'react-dnd'


const Cell = () => {
    const [letter, setLetter] = useState("");
    type dragObject = {
        type: string,
        value: string
    }

    const [,drop] = useDrop({
        accept: 'letter',
        canDrop: () => letter === "",
        drop: ({ value }: dragObject) => setLetter(value)
    })

    return (
        <div ref={drop} className="Cell" data-testid="Cell" >{letter}</div>
    )
}

export default Cell;
