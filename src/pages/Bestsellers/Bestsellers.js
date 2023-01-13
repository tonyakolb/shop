import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basketAction";
import "./Bestsellers.css";
import Image from "../../assets/images/main-image.jpg";
import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import Arrow from "../../assets/images/Arrow-navigation.svg";
import Button from "../../components/Button/Button";

const Bestsellers = ({ item }) => {
  const dispatch = useDispatch();

    const handleAddClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToBasket(item));
    }

    return (
        <div className='bestsellers'>
            <div className='bestsellers-caption'>
                <p>Хиты продаж</p>
                <a href='/'>Перейти в каталог</a>
            </div>
            
            <div className='bestsellers-items'>
            <div className='bestsellers-item'>
                <div className='bestseller-img'>
                    <img src={Image} alt='image' />
                        <div className='presence not-available'>
                        Нет в наличии
                    </div>
                    <div className='sale'>
                        -30%
                    </div>
                        
                </div>
                <div className='bestseller-price'>
                    <div className='actual-price'>102,00 руб</div>
                    <div className='old-price'>158,00 руб</div>
                </div>
                <div className='bestseller-about'>
                    <div>
                        <div className='item-name'>
                            Кухня/Смеситель для мойки
                        </div>
                        <div className='item-number'>
                            Артикул: SQ3787
                        </div>
                        <div className='shop-rate'>
                        <button className='add-to-basket not-available' onClick={handleAddClick}>
                            <img src={Icon} alt="basket" />
                        </button>
                            <div className='rating'>
                                Отзывы
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bestsellers-item'>
                <div className='bestseller-img'>
                    <img src={Image} alt='image' />
                        <div className='presence available'>
                        В наличии
                    </div>
                    <div className='sale'>
                        New
                    </div>
                        
                </div>
                <div className='bestseller-price'>
                    <div className='actual-price'>102,00 руб</div>
                </div>
                <div className='bestseller-about'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Bestsellers;
