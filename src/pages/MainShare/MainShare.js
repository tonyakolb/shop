import React from "react";
import MainImage from '../../assets/images/main-image.jpg';
import "./MainShare.css";

const MainShare = () => {
    return (
        <div className='main'>
            <div className='main-share'>
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
