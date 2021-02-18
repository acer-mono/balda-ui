import React, { useState } from 'react';
import  './Cell.css';
import { useDrop } from 'react-dnd'


const Cell = () => {
    const [letter, setLetter] = useState("");
    type dragObject = {
        type: string,
        value: string
    }

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'letter',
        canDrop: () => letter === "",
        drop: ({type, value }: dragObject) => setLetter(value),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })
    return (
        <div ref={drop}
             className="Cell"
             data-testid="Cell" >{letter}</div>
    )
}

export default Cell;
