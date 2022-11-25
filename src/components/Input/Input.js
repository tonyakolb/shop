import React from 'react';

const Input = ({value,className}) => {
    return (
        <input className={className}>
            {value}
        </input>
    );
};

export default Input;