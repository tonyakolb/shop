import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Logo from '../../components/Header/Logo/Logo';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Logo/>
            <Input/>
            <Button className='' value='Каталог'/>
            <Button className='' value='Акции' />
            <Button/>
            <Button className='' value='Доставка'/>
            <Button/>
            <p>+375</p>
            <p>Время работы</p>
        </header>
    );
};

export default Header;