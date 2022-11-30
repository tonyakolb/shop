import React from "react";
import MainImage from '../../assets/images/main-image.jpg';


const MainShare = () => {
  return (
    <div>
      <div>
        <div>
          <p>Акция Все лето скидка 10% на весь ассортимент продукции</p>
        </div>
        <div>
          <img src={MainImage} alt='main-image'/>
        </div>
      </div>
    </div>
  );
};

export default MainShare;
