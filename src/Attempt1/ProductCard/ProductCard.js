import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard = ({ urlImg, valuePrice, catalogSearch}) => {


    return (
        <div className="product_offer">
            <Link to={`/catalog/${catalogSearch}`}>
                <img src={urlImg} alt="none" className="product_photo" />
            </Link>

            <div className="price">
                <p className="price_sale">$ {valuePrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;
