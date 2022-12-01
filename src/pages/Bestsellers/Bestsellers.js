import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket} from "../../redux/actions/basketAction";
import "./Bestsellers.css";
import Image from '../../assets/images/main-image.jpg';

const Bestsellers = ({item}) => {

    const dispatch = useDispatch();

    const handleAddClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.innerText = 'ADDED';
        dispatch(addToBasket(item));
    }

    return (
        <div className='bestsellers'>
            <div className='bestsellers-caption'>
                <p>Хиты продаж</p>
                <a href='/'>Перейти в каталог</a>
            </div>
            <div className='bestsellers-item'>
                <div className='bestseller-img'>
                    <img src={Image} alt='image' />
                </div>
                <div className='bestseller-price'>
                    <div className='actual-price'>102,00 руб</div>
                    <div className='old-price'>158,00 руб</div>
                </div>
                <div className='bestseller-about'>
                    <div>
                        <button onClick={handleAddClick}>add to bag</button>
                        <div>cool</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;