import React from 'react';
import "./Footer.css";
import ShopPhoto1 from "../../assets/images/Shop-photo1.png";
import ShopPhoto2 from "../../assets/images/Shop-photo2.png";
import Phone from "../../assets/images/Phone.svg";
import Mail from "../../assets/images/Mail.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Telegram from "../../assets/images/Telegram.svg";
import Viber from "../../assets/images/Viber.svg";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
            <div className='footer-contacts'>
            <div className='footer-column'>
                <p className='column-name'>
                    Меню сайта
                </p>
                <div className='column-info'>
                        <ul>
                            <li> <a href="/"> О нас </a> </li>
                            <li> <a href="/"> Каталог </a> </li>
                            <li> <a href="/"> Акции </a> </li>
                            <li> <a href="/">  Доставка </a> </li>
                            <li> <a href="/"> Способы оплаты </a> </li>
                        </ul>
                </div>
            </div>
            <div className='footer-column'>
                <p className='column-name'>
                    Контакты
                </p>
                <div className='column-info'>
                        <ul>
                            <li><img src={Phone} alt="phone number" />+375 (44) 584 20 68</li>
                            <li><img src={Mail} alt="e-mail" />soqo.by@gmail.com</li>
                        </ul>
                </div>
            </div>
            <div className='footer-column'>
                <p className='column-name'>
                    Адрес
                </p>
                <div className='column-info'>
                    Магазин: г.Минск, ул. Кульман, 5Б. < br /> Павильон 195
                </div>
            </div>
            <div className='footer-column'>
                <p className='column-name'>
                    График работы
                </p>
                <div className='column-info'>
                        <ul>
                            <li>Вт-Вс - 10:00 - 20:00</li>
                            <li>Пн - выходной</li>
                        </ul>
                </div>
            </div>
            <div className='footer-column'>
                <p className='column-name'>
                    Мы в соц. сетях
                </p>
                <div className='column-info'>
                    <div className='social-nets'>
                        <a href="/"><img src={Instagram} alt="instagram" /></a>
                        <a href="/"><img src={Telegram} alt="telegram" /></a>
                        <a href="/"><img src={Viber} alt="viber" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='location'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.6677709773035!2d27.57918821582911!3d53.91987938010323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa1a5285889%3A0x4a433bc5dbf42019!2z0YPQuy4g0JrRg9C70YzQvNCw0L0gNdCxLCDQnNC40L3RgdC6IDIyMDA4OQ!5e0!3m2!1sru!2sby!4v1670769098273!5m2!1sru!2sby" style={{ border: 0, width: 1122, height: 406}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <div className='shop-photos'>
                <img src={ShopPhoto1} alt="shop" />
                <img src={ShopPhoto2} alt="shop" />
            </div>
            </div>
                <div className='shop-about'>
                    <p> ООО “Чайна Сантехника” </p>
                    <p> Юр.адрес: 223021, Минская обл., Минский р-н, Щомыслицкий с/с, район агрогородка Озерцо, тракт Меньковский, 2. Пом. 781. Зарегистрирован в торговом реестре 29 июля 2022 года в администрации Советского района города Минска № 538673. Свидетельство о регистрации выдано 27 января 2022 года УНП 693159769 </p>
                    <p> Указанные контакты также являются контактами для связи по вопросам покупателей о нарушении их прав. Номер телефона работников местных исполнительных и распорядительных органов по месту государственной регистрации ООО “Чайна Сантехника”, уполномоченных рассматривать обращения покупателей: +375 17 500 41 25. </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;