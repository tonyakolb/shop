import React,{useState} from "react";
import MainImage from "../../assets/images/main-image.jpg";
import ArrowIcon from "../../assets/images/arrow-icon.svg";
import Arrow from "../Arrow/Arrow";
import "./MainShare.css";

const MainShare = () => {
  const [arrowMin, setArrowMin] = useState(3);
  const [arrowMax, setArrowMax] = useState(1);

  const arrowMore = () => {
    setArrowMax(arrowMax + 1);
    setArrowMin(arrowMin + 1);
  };

  const arrowLess = () => {
    setArrowMax(arrowMax - 1);
    setArrowMin(arrowMin - 1);
  };
  return (
    <div className="main">
      <div className="main-share">
        <Arrow
            onClick={arrowLess}
            className="less"
            src={ArrowIcon}
            sliderMin={arrowMin}
        />
        <div className='main-share-element'>
          <div className="main-share-text">
            <p>Акция</p>
            <p>Все лето скидка 10% на весь ассортимент продукции</p>
          </div>
          <div className="main-share-img">
            <img src={MainImage} alt="main-image" />
          </div>
        </div>

        <Arrow
            onClick={arrowMore}
            className="more"
            src={ArrowIcon}
            sliderMax={arrowMax}
        />
      </div>
    </div>
  );
};

export default MainShare;
