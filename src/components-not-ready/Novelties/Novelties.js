import React from 'react';
// import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basketAction";
import "./Novelties.css";
import Image from '../../assets/images/main-image.jpg';
import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import Button from '../../components/Button/Button';


const Novelties = () => {

    const dispatch = useDispatch();

    const handleAddClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToBasket(item));
    }

    return (
        <div className='novelties'>
            <div className='novelties-caption'>
                <p>Новинки</p>
                <a href='/'>Перейти в каталог</a>
            </div>

            <div className='novelties-items'>
                <div className='novelties-item'>
                    <div className='noveltie-img'>
                        <img src={Image} alt='image' />
                        <div className='presence available'>
                            В наличии
                        </div>
                        <div className='sale'>
                            New
                        </div>

                    </div>
                    <div className='noveltie-price'>
                        <div className='actual-price'>102,00 руб</div>
                    </div>
                    <div className='noveltie-about'>
                        <div>
                            <div className='item-name'>
                                Кухня/Смеситель для мойки
                            </div>
                            <div className='item-number'>
                                Артикул: SQ3787
                            </div>
                            <div className='shop-rate'>
                                <button className='add-to-basket available' onClick={handleAddClick}>
                                    <img src={Icon} alt="basket" />
                                </button>
                                <div className='rating'>
                                    Отзывы
                                    <div class="rating-reviews">
                                    <div class="product-rating">
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span></span>

                                    </div>
                                        <div className='reviews-number'>(2)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='novelties-item'>
                    <div className='noveltie-img'>
                        <img src={Image} alt='image' />
                        <div className='presence available'>
                            В наличии
                        </div>
                        <div className='sale'>
                            New
                        </div>

                    </div>
                    <div className='noveltie-price'>
                        <div className='actual-price'>102,00 руб</div>
                    </div>
                    <div className='noveltie-about'>
                        <div>
                            <div className='item-name'>
                                Кухня/Смеситель для мойки
                            </div>
                            <div className='item-number'>
                                Артикул: SQ3787
                            </div>
                            <div className='shop-rate'>
                                <button className='add-to-basket available' onClick={handleAddClick}>
                                    <img src={Icon} alt="basket" />
                                </button>
                                <div className='rating'>
                                    Отзывы

                                    <div class="rating-reviews">
                                        <div class="product-rating">
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span></span>

                                        </div>
                                        <div className='reviews-number'>(2)</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Novelties;
