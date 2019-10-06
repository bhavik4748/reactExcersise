
import React from 'react';

const Validation = (props) => {

    return (
        <div>
            {(props.length < 10) ? 'Too short' : 'Too long'}
        </div>
    );
}

export default Validation;