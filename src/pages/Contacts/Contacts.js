import React from 'react';
import "./Contacts.css";


const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts-column'>
                <p>
                    Меню сайта
                </p>
            </div>
            <div className='contacts-column'>
                <p>
                    Контакты
                </p>
            </div>
            <div className='contacts-column'>
                <p>
                    Адрес
                </p>
            </div>
            <div className='contacts-column'>
                <p>
                    График работы
                </p>
            </div>
            <div className='contacts-column'>
                <p>
                    Мы в соц. сетях
                </p>
            </div>
        </div>
    );
};

export default Contacts;