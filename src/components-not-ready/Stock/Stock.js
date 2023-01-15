import React from 'react';
import "./Stock.css";
import Cross from "../../assets/images/Cross.svg";
import SaleImage1 from "../../assets/images/Black-Friday.png";



const Stock = () => {

    return (
        <div>
            <div className='stock'>
                <div className='stock-caption'>
                    <p>Главная/Акции</p>
                    <img src={Cross} alt="close" />
                </div>
                <div className='sales'>
                    <div className='one-sale'>
                        <div className='time-status'>
                            <div className='time'>
                                Период проведения: 20.10.2022 - 31.10.2022
                            </div>
                            <div className='status not-finished'>
                                Действует
                            </div>
                        </div>
                        <div className='sale-img'>
                            <img src={SaleImage1} alt="sale" />
                        </div>
                        <div className='sale-name'>
                            АКЦИЯ: 7 черных пятниц на неделе
                        </div>
                        <div className='sale-about'>
                            Более 50 товаров на скидке от 20 до 50%
                        </div>
                    </div>

                    <div className='one-sale'>
                        <div className='time-status'>
                            <div className='time'>
                                Период проведения: 20.10.2022 - 31.10.2022
                            </div>
                            <div className='status'>
                                Закончилась
                            </div>
                        </div>
                        <div className='sale-img'>
                            <img src={SaleImage1} alt="sale" />
                        </div>
                        <div className='sale-name'>
                            АКЦИЯ: 7 черных пятниц на неделе
                        </div>
                        <div className='sale-about'>
                            Более 50 товаров на скидке от 20 до 50%
                        </div>
                    </div>

                    <div className='one-sale'>
                        <div className='time-status'>
                            <div className='time'>
                                Период проведения: 20.10.2022 - 31.10.2022
                            </div>
                            <div className='status not-finished'>
                                Действует
                            </div>
                        </div>
                        <div className='sale-img'>
                            <img src={SaleImage1} alt="sale" />
                        </div>
                        <div className='sale-name'>
                            АКЦИЯ: 7 черных пятниц на неделе
                        </div>
                        <div className='sale-about'>
                            Более 50 товаров на скидке от 20 до 50%
                        </div>
                    </div>

                    <div className='one-sale'>
                        <div className='time-status'>
                            <div className='time'>
                                Период проведения: 20.10.2022 - 31.10.2022
                            </div>
                            <div className='status'>
                                Закончилась
                            </div>
                        </div>
                        <div className='sale-img'>
                            <img src={SaleImage1} alt="sale" />
                        </div>
                        <div className='sale-name'>
                            АКЦИЯ: 7 черных пятниц на неделе
                        </div>
                        <div className='sale-about'>
                            Более 50 товаров на скидке от 20 до 50%
                        </div>
                    </div>

                </div>

                

            </div>
            
        </div>
    );
};

export default Stock;