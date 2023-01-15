import React from 'react';
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions/basketAction";
import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import Cross from "../../assets/images/Cross.svg";
import ProductImage from "../../assets/images/Item.png";
import "./Card.css";



const Card = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToBasket(item));
    }
    return (
        <div>
            <div className='card'>
                <div className='card-caption'>
                    <p> Каталог/Кухня/Смесители </p>
                    <img src={Cross} alt="close" />
                </div>
                <div className='product-card'>
                    <div className='product-name'>Смеситель для кухни SQ3790</div>
                    <div className='about'>
                        <div className='first-column'>
                            <div className='product-img'>
                                <div className='other-img'>
                                    <img src={ProductImage} alt="product image" />
                                    <img src={ProductImage} alt="product image" />
                                    <img src={ProductImage} alt="product image" />
                                </div>
                                <div className='main-img'>
                                    <img src={ProductImage} alt="product image" />
                                </div>
                            </div>

                            <div className='product-reviews'>
                                <div className='review-rating'>
                                <p>Отзывы</p>

                                    <div class="product-rating">
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span class="active"></span>
                                        <span></span>
                                    </div>

                                </div>

                                <div className='review'>
                                    <div className='author-rating'>
                                        <p>Юлия</p>
                                        <div class="reviewer-rating">
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span class="active"></span>
                                            <span class="active"></span>
                                        </div>

                                    </div>
                                    <div className='review-text'>
                                        <p>27 октября 2022</p> {/*Дата*/}
                                        <p>Смеситель нормальный, пока все работает, не течёт. Муж оценил как хороший)</p> {/*Отзыв*/}
                                        <p>Плюсы: </p>
                                        <p>Минусы: </p>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='add-button'>
                                <button className='add-review'>
                                    Добавить отзыв
                                </button>
                            </div>

                        </div>
                        <div className='sec-column'>
                            <div className='product-about'>
                                <div className='product-main-info'>
                                    <div className='price-info'>
                                        <div className='product-available'>
                                        В наличии
                                    </div>
                                        <div className='product-sale'>
                                        -30%
                                    </div>
                                    </div>
                                    <div className='price'>
                                        <div className='price-new'>
                                            102,00 руб
                                        </div>
                                        <div className='price-old'>
                                            158,00 руб
                                        </div>
                                    </div>
                                    <button className='add' onClick={handleAddClick}>
                                        Добавить в корзину
                                        <img src={Icon} alt="basket" />
                                    </button>
                                </div>
                                <div className='product-description'>
                                    <p>Описание</p>
                                    Смеситель для кухни с современным дизайном. Прост в установке и использовании. Мытье посуды и кухонной раковины станет приятнее. Смеситель из нержавеющей стали.
                                </div>
                            </div>
                            <div className='product-details'>
                                <div className='product-details-caption'>
                                    Характеристика
                                </div>

                                <div className='product-detail-group'>
                                    Общие
                                </div>
                                <div className='product-detail-item'>
                                    <div className='product-detail-label'>
                                        Исполнение излива
                                    </div>
                                    <div className='product-detail-value'>
                                        Выдвижной, Гибкий, Поворотный, с режимом “душ”
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

export default Card;