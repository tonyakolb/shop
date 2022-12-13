import React from "react";
import MainImage from '../../assets/images/main-image.jpg';
import "./MainShare.css";
import Arrow from "../../assets/images/Arrow-navigation.svg";


const MainShare = () => {
    return (
        <div className='main'>
            <div className='main-share'>
                <div className='arrow-left'>
                    <img src={Arrow} alt="arrow" />
                </div>

                <div className='arrow-right'>
                    <img src={Arrow} alt="arrow" />
                </div>
                <div className='main-ellipses'>
                    <div className='main-ellipse-select'></div>
                    <div className='main-ellipse'></div>
                    <div className='main-ellipse'></div>
                </div>
                <div className='main-share-text'>
                    <p>Акция</p>
                    <p>Все лето скидка 10% на весь ассортимент продукции</p>
        </div>
                <div className='main-share-img'>
          <img src={MainImage} alt='main-image'/>
        </div>
      </div>
    </div>
  );
};

export default MainShare;
