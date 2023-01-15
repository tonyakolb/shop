import React from 'react';
import Icon from "../../assets/images/Icon-basket-no-frame.svg";
import "./ProductCard.css";

import { Link } from 'react-router-dom';

const ProductCard = ({ urlImg, valuePrice, catalogSearch }) => {


    return (
        <div className='product-item'>
            <div className='product-img'>
                <Link to={`/catalog/${catalogSearch}`}>
                    <img src={urlImg} alt="none" className="product_photo" />
                </Link>
                <div className='presence available'>
                    $ {valuePrice}
                </div>
                <div className='sale'>
                    $ {valuePrice}
                </div>

            </div>
            <div className='product-price'>
                <div className='actual-price'>$ {valuePrice}</div>
                <div className='old-price'>$ {valuePrice}</div>
            </div>
            <div className='product-about'>
                <div>
                    <div className='item-name'>
                        $ {valuePrice}
                    </div>
                    <div className='item-number'>
                        $ {valuePrice}
                    </div>
                    <div className='shop-rate'>
                        <button className='add-to-basket available'>
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
                                <div className='reviews-number'>($ {valuePrice})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


