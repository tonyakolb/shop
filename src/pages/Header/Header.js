import React from 'react';
import Input from '../../components/Input/Input';
import Logo from '../../components/Header/Logo/Logo';
import Icon from '../../assets/images/Icon-basket.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Input/>
            <a className='' >Каталог</a>
            <a className=''>Акции</a>
            <a>Доставка</a>
            <a className=''>Контакты</a>
            <a>
                <div><img src={Icon} alt="basket"/>
                <div></div></div>
            </a>
            <p>+375 (44) 584 20 68</p>
            <p>Вт-Вс: 10:00 - 20:00</p>
            <p>Пн: выходной</p>
        </header>
    );
};

export default Header;