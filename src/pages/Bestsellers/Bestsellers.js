import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket} from "../../redux/actions/basketAction";


const Bestsellers = ({item}) => {

    const dispatch = useDispatch();

    const handleAddClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.innerText = 'ADDED';
        dispatch(addToBasket(item));
    }

    return (
        <div>
            <div>
                <p>Хиты продаж</p>
                <a href='/'>Перейти в каталог</a>
            </div>
            <div>
                <div>cool</div>
                <div>cool</div>
                <div>
                    <div>cool</div>
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