import React from 'react';

const Button = ({className,value,id,onClick}) => {
    return (
        <button className={className} id={id} onClick={onClick}>
           {value}
        </button>
    );
};

export default Button;