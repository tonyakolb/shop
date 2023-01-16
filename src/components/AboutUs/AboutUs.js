import React from "react";

import Logo from "../../assets/images/Logo.svg";
import Company from "../../assets/images/Company.png";
import FirstImage from "../../assets/images/About1.png";
import SecondImage from "../../assets/images/About2.png";
import ThirdImage from "../../assets/images/About3.png";
import ForthImage from "../../assets/images/About4.png";
import FifthImage from "../../assets/images/About5.png";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="bookmark-about">
      <div className="about-us-info">
        <p className='full-about-us'>О компании SOQO</p>
        <p className='about-us-mobile'>О нас</p>
        <div className="about-company">
          <div className="about-company-text">
            <div className="company-images">
                          <img src={Logo} alt="logo" />
                          <img src={Company} alt="company" className='mobile-company-image' />
          </div>
            
            <p>
              Компания SOQO основана в 1997 г., головной офис находится в Китае,
              пров. Фуцзянь. Это транснациональное предприятие сантехники
              специализируется на производстве, реализации, предоставлении
              услуг. Компания сантехники SOQO полностью соответствует системам
              менеджмента качества международного стандарта ISO-9002,
              предоставляет покупателям экологически безопасную, современную и
              качественную сантехнику. Мы являемся прямым представителем
              компании в РБ и стремимся подарить клиентам приятные впечатления
              от магазина, товара, услуги, да и просто от общения с нами. Именно
              положительные эмоции покупателей делают нас сильной командой, а
              наш бренд − востребованным. Успех «SOQO» измеряется не только
              бизнес-достижениями, но и радостью клиентов от покупок в нашем
              магазине.
            </p>
          </div>
          <div className="about-company-image">
            <img src={Company} alt="company" />
          </div>
        </div>
        <div className="company-awards">
          <div className="award">
            <img src={FirstImage} alt="award" />
            <p>
              Ассоциация производителей сантехники Веньчжоуской зоны
              экономического и технологического развития 2018 г
            </p>
          </div>
          <div className="award">
            <img src={SecondImage} alt="award" />
            <p>
              Почетная грамота
              <br />
              Качественный сервис и репутация
              <br />
              Спасибо за Ваше любезное спонсорство и общее развитие
              <br />
              сентябрь 2014
            </p>
          </div>
          <div className="award">
            <img src={ThirdImage} alt="award" />
            <p>
              Почетная грамота
              <br />
              Качественный сервис и репутация
              <br />
              Предприятие уровня АААА
              <br />
              Китайская ассоциация по качеству и безопасности продукции 2015г.
            </p>
          </div>
          <div className="award">
            <img src={ForthImage} alt="award" />
            <p>
              Почетная грамота
              <br />
              Качественное и честное
              <br />
              Отличное модельное предприятие
              <br />
              Китайская ассоциация по качеству и безопасности продукции 2015г.
            </p>
          </div>
          <div className="award">
            <img src={FifthImage} alt="award" />
            <p>
              Письмо о назначении
              <br />
              Луо Сяоцзюнь назначается заместителем директора Профессионального
              комитета сантехники Китайской ассоциации ежедневных потребностей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
