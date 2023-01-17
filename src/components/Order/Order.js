import React from 'react';

const Order = ({nameProduct,price}) => {
    return (
            <div className="your-order-details">
                <div className="details-value">
                    <p>{nameProduct}</p>
                    <p>Артикул: SQ3790</p>
                </div>
                <div className="details-number">x1</div>
                <div className="details-price">{price} руб</div>
            </div>
    );
};

export default Order;
