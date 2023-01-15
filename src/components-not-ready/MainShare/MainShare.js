import React from "react";
import MainImage from "../../assets/images/main-image.jpg";
import "./MainShare.css";
// import Slider from "../../components-not-ready/MainShare-Slider-WARNING/Slider";

const MainShare = () => {
  return (
    <div className="main">
      <div className="main-share">
        <div className="main-share-text">
          <p>Акция</p>
          <p>Все лето скидка 10% на весь ассортимент продукции</p>
        </div>
        <div className="main-share-img">
          <img src={MainImage} alt="main-image" />
        </div>
      </div>
      {/*<Slider />*/}
    </div>
  );
};

export default MainShare;
