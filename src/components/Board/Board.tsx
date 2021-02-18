import React from 'react';
import './Board.css';
import Cell from "../Cell/Cell";

const Size = [3, 5, 7];
type BoardProps = {
    size: typeof Size[number];
}

export const Board: React.FC<BoardProps> = ({size} : BoardProps) => {
    let cells = [];
    for (let i = 0; i < size * size; i++) {
        cells.push(<Cell key={i} />);
    }

    const styles = { gridTemplateColumns: `repeat(${size}, 50px)` }

    return <div style={styles} className="Board">
        {cells}
    </div>
}
