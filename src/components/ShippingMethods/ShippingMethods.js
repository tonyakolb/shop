import React from 'react';
import Input from "../Input/Input";

const ShippingMethods = ({value}) => {
    return (
        <div className="delivery-form imp">
            <p>Способы доставки</p>
            <div className="delivery-type">
                <Input
                    className="delivery-info"
                    type="radio"
                    name="delivery"
                    id="delivery-choice1"
                    required
                />
                <label htmlFor="delivery-choice1">
                    <span>Самовывоз</span> из магазина
                </label>
            </div>
            <div className="delivery-type">
                <Input
                    className="delivery-info"
                    type="radio"
                    name="delivery"
                    id="delivery-choice2"
                />
                <label htmlFor="delivery-choice2">
                    <span>Курьером</span> в пределах МКАД <span>(5,00 руб)</span>
                </label>
            </div>
            <div className="delivery-type">
                <Input
                    className="delivery-info"
                    type="radio"
                    name="delivery"
                    id="delivery-choice3"
                />
                <label htmlFor="delivery-choice3">
                    <span>Курьером</span> до 2 МКАД <span>(15,00 руб)</span>
                </label>
            </div>
            <div className="delivery-type">
                <Input
                    className="delivery-info"
                    type="radio"
                    name="delivery"
                    id="delivery-choice4"
                />
                <label htmlFor="delivery-choice4">
                    <span>Белпочта</span> (Стоимость доставки <br /> оплачивает
                    покупатель согласно <br />
                    тарифам РУП "Белпочта")
                </label>
            </div>
            <div className="delivery-type">
                <Input
                    className="delivery-info"
                    type="radio"
                    name="delivery"
                    id="delivery-choice5"
                />
                <label htmlFor="delivery-choice5">
                    <span>Европочта</span> (Стоимость доставки <br /> оплачивает
                    покупатель согласно <br />
                    тарифам "Европочта")
                </label>
            </div>
        </div>
    );
};

export default ShippingMethods;
