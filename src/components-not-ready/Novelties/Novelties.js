import React from 'react';
// import {NavLink} from "react-router-dom";
import "./Novelties.css";
import NoveltiesProducts from "../../components/NoveltiesProducts/NoveltiesProducts";

const Novelties = () => {


    return (
        <div className='novelties'>
            <div className='novelties-caption'>
                <p>Новинки</p>
                <a href='/'>Перейти в каталог</a>
            </div>

            <div className='novelties-items'>
                
                <NoveltiesProducts />

            </div>
        </div>
    );
};

export default Novelties;
