import React from 'react';
import Input from '../../components/Input/Input';
// import Button from '../../components/Button/Button';
import Logo from '../../components/Header/Logo/Logo';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Logo/>
            <Input/>
            <a className='' >Каталог</a>
            <a className=''>Акции</a>
            <a>Доставка</a>
            <a className=''>Контакты</a>
            <a>Иконка</a>
            <p>+375</p>
            <p>Время работы</p>
        </header>
    );
};

export default Header;