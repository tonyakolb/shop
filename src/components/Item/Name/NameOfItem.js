import React from 'react';
import {NavLink} from 'react-router-dom';

const NameOfItem = ({ name,id }) => {
    const newName = name.indexOf(':') > -1 ? name.slice(0, name.indexOf(':')) : name;

    return (
        <NavLink to={`/item/${id}`} >
            {newName}
        </NavLink>
    );
};

export default NameOfItem;
