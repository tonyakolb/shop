import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src="" alt=""/>
            <Input/>
            <Button className='' value='Каталог'/>
            <Button/>
            <Button/>
            <Button/>
            <p>+375</p>
            <p>Время работы</p>
        </header>
    );
};

export default Header;