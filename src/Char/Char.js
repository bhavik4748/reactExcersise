
import React from 'react';
import './Char.css';

const Char = (props) => {
    return (
        <div onClick={props.click} className="Char">
            {props.char}

        </div>
    );

}

export default Char;