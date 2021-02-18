import React from 'react';
import Letter, {Letters, LetterValue} from "../Letter/Letter";
import './Alphabet.css'

const Alphabet = () => {
    return (
        <div className="Alphabet">
            {Letters.map((value: LetterValue, index) =>
                <Letter value={value} key={index} />
            )}
        </div>
    )
}

export default Alphabet;
