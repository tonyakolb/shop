import React from 'react';

const NavigateElement = ({ navigate_context, navPage, navigate_elem }) => {
    return (
        <a href="#" className={navigate_elem} onClick={navPage}>
            {navigate_context}
        </a>
    );
};

export default NavigateElement;
