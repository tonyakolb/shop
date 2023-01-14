import React from 'react';
import Cross from "../../assets/images/Cross.svg";
import ProductImage from "../../assets/images/Item.png";
import "./ShoppingCart.css";
import Input from "../../components/Input/Input";




const ShoppingCart = () => {

    return (
        <div>
            <div className='shopping-cart'>
                <div className='cart-caption'>
                    <p> Главная/Корзина </p>
                    <img src={Cross} alt="close" />
                </div>

                <div className='personal-cart'>
                    <div className='cart-item'>
                        <img src={Cross} alt="close" />
                        <div className='item-image'>
                            <img src={ProductImage} alt="product image" />
                        </div>
                        <div className='item-name'>
                            <p> Смеситель для кухни </p>
                             <p> Артикул: SQ3790 </p>
                        </div>
                        <div className='item-price'>
                            <p className='price-label'> Цена </p>
                            <p> 158,00 руб </p>
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
                    <div className="line"></div>
                    <div className='order-price'>
                        <p className='order-price-label'> Итого: </p>
                        <p> 102,00 руб </p>
                    </div>
                </div>

                <div className='order-details'>Контактные данные</div>

                <form action="/">
                <div className='order'>
                    
                    <div className='order-form'>
                        <label className="required">Имя</label>
                        <Input className="order-info" required />

                        <label className="required">Контактный телефон</label>
                        <Input className="order-info" required placeholder="+375 (00) 000-00-00" />

                        <label>Адрес доставки</label>
                        <Input className="order-info" placeholder="220020, г.Минск, ул.Берута, дом 0, корпус 0 , квартира 0"/>

                        <label>Комментарий к заказу</label>
                        <textarea className="order-comment" id="text" required />

                    </div>

                    <div className='delivery-form'>
                        <p>Способы доставки</p>
                        
                        <div className="delivery-type">
                        <Input className="delivery-info" type="radio" name="delivery" id="delivery-choice1" required/>
                        <label htmlFor="delivery-choice1"><span>Самовывоз</span> из магазина</label></div>
                        <div className="delivery-type">  
                        <Input className="delivery-info" type="radio" name="delivery" id="delivery-choice2"/>
                            <label htmlFor="delivery-choice2"><span>Курьером</span> в пределах МКАД <span>(5,00 руб)</span></label></div>
                        <div className="delivery-type">
                        <Input className="delivery-info" type="radio" name="delivery" id="delivery-choice3"/>
                            <label htmlFor="delivery-choice3"><span>Курьером</span> до 2 МКАД <span>(15,00 руб)</span></label></div>
                        <div className="delivery-type">
                        <Input className="delivery-info" type="radio" name="delivery" id="delivery-choice4"/>
                            <label htmlFor="delivery-choice4"><span>Белпочта</span> (Стоимость доставки <br/> оплачивает покупатель согласно <br/>тарифам РУП "Белпочта")</label></div>
                        <div className="delivery-type">
                        <Input className="delivery-info" type="radio" name="delivery" id="delivery-choice5"/>
                            <label htmlFor="delivery-choice5"><span>Европочта</span> (Стоимость доставки <br /> оплачивает покупатель согласно <br />тарифам "Европочта")</label></div>

                    </div>

                
                    <div className='your-order'>
                    <div className='your-order-caption'>
                        Ваш заказ:
                    </div>
                    <div className='your-order-details'>
                            <div className='details-label'>Товар</div>
                            <div className='details-label'>Сумма</div>
                    </div>
                    <div className='your-order-details'>
                            <div className='details-value'>
                                <p>Смеситель для кухни</p>
                                <p>Артикул: SQ3790</p>
                            </div>
                            <div className='details-number'>
                                х1
                            </div>
                            <div className='details-price'>102,00 руб</div>
                    </div>
                    <div className='your-order-details'>
                            <div className='details-label'>Доставка </div>
                    </div>   
                    <div className='your-order-details'>
                            <div className='details-value'>По г.Минску в пределах МКАД </div>
                            <div className='details-price'>5,00 руб</div>
                    </div> 

                        <div className="line"></div>
                        <div className='your-order-price'>
                            <p> Итого к оплате: </p>
                            <p> 107,00 руб </p>
                        </div>
                    </div>

                    <div className='payment-form'>
                        <p>Способы оплаты</p>

                        <div className="payment-type">
                            <Input className="payment-info" type="radio" name="payment" id="payment-choice1" required/>
                            <label htmlFor="payment-choice1">Наличными при получении</label></div>
                        <div className="payment-type">
                            <Input className="payment-info" type="radio" name="payment" id="payment-choice2" />
                            <label htmlFor="payment-choice2">Банковской картой при получении</label></div>
                        <div className="payment-type">
                            <Input className="payment-info" type="radio" name="payment" id="payment-choice3" />
                            <label htmlFor="payment-choice3">Оплата картой онлайн</label></div>
                        <div className="payment-type">
                            <Input className="payment-info" type="radio" name="payment" id="payment-choice4" />
                            <label htmlFor="payment-choice4">Оплата через ЕРИП</label></div>
                        
                    </div>
                    
                        <div className='agreement-check'>
                            <Input className="agreement-info" type="checkbox" id="agree" required/>
                            <label htmlFor="agree">Я прочитал(-а)&nbsp;<a href="/">  Договор публичной оферты  </a>&nbsp;и согласен(-на) с условиями</label>
                        </div>
                        <div className='order-submit'>
                            <Input className="order-button" type="submit" value='Подтвердить заказ' />
                        </div>
                    </div>
                    </form>

                

            </div>
        </div>
    );
};

export default ShoppingCart;