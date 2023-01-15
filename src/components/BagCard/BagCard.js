import React from 'react';
// import Icon from '../Icon/Icon';
import BagAction from '../../redux/actions/bagAction';
import { useDispatch } from 'react-redux';
import CountAction from '../../redux/actions/countBagAction';
// import { totalQuantity } from '../../redux/actions/TotalQuantity';
// import { useEffect } from 'react';

import Cross from "../../assets/images/Cross.svg";
import Image from "../Image/Image";



const BagCard = ({
                     bagImg,
                     nameCardBag,
                     valuePrice,
                     id,
                     deleteProduct,
                     onChange,
                     valueSelect,
                     bagProducts,
                     setTotal,
                 }) => {
    const dispatch = useDispatch();

    // const selectValue = (e) => {
    //     onChange(e.target.value);
    // };
    //
    // useEffect(() => {
    //     dispatch(totalQuantity(id, valueSelect));
    // }, [valueSelect]);

    const removeProduct = () => {
        dispatch(BagAction.removeBagAction(deleteProduct));
        dispatch(CountAction.decrement());

        setTotal(
            bagProducts.reduce((previousValue, currentItem) => currentItem.price.value * valueSelect, 0),
        );
    };

    return (
            <div className='personal-cart'>
                <div className='cart-item'>
                    <Image src={Cross} alt="close" onClick={removeProduct} />
                    <div className='item-image'>
                        <Image src={bagImg} alt="product image" />
                    </div>
                    <div className='item-name'>
                        <p> {nameCardBag} </p>
                        <p> Артикул: SQ3790 </p>
                    </div>
                    <div className='item-price'>
                        <p className='price-label'> Цена </p>
                        <p> {valuePrice} руб </p>
                    </div>
                    <div className='item-number'>
                        <p className='number-label'> Количество </p>
                        <div className='number'>
                            <button className='less'> - </button>
                            <p> 1 </p>
                            <button className='more'> + </button>
                        </div>
                    </div>
                    <div className='item-sale'>
                        <p className='sale-label'> Скидка </p>
                        <p> 56,00 руб </p>
                    </div>
                    <div className='full-price'>
                        <p className='full-price-label'> Итого </p>
                        <p> 102,00 руб </p>
                    </div>
                </div>
                <div className="line"/>
                <div className='order-price'>
                    <p className='order-price-label'> Итого: </p>
                    <p> 102,00 руб </p>
                </div>
            </div>

    );
};

export default BagCard;
