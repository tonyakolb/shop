import React from 'react';

const Button = (background,value) => {
    return (
        <button background={background}>
            {value}
        </button>
    );
};

export default Button;