import React from 'react';
import "./AddToCart.css";
import Cross from "../../assets/images/Cross.svg";
import Item from "../../assets/images/Item.png";
// import Button from '../../components-not-ready/Button/Button';


const AddToCart = () => {
    return (
        <div className='back'>
            <div className='add-to-cart'>
                <div className='add-to-cart-close'>
                    <img src={Cross} alt="close" />
                </div>
                <div className='add-to-cart-caption'>
                    Товар добавлен в корзину
                </div>
                <div className='add-to-item-img'>
                    <img src={Item} alt="photo of product" />
                </div>
                <div className='add-to-item-name'>
                    Смеситель для кухни SQ3790
                </div>
                <div className='buttons'>
                <button className='next-page'>
                        Перейти в корзину
                </button>
                <button className='next-page'>
                        Продолжить покупки
                </button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
