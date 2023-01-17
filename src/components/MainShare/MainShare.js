import React, { useState } from "react";
import MainImage from "../../assets/images/main-image.jpg";
import "./MainShare.css";
import Arrow from "../../components/Arrow/Arrow";
import { apiMain } from "../../assets/constants/requests";
import ArrowIcon from "../../assets/images/arrow-icon.svg";
import MainPhoto from "../../components/MainPhoto/MainPhoto";


const MainShare = ({ productId }) => {
    // const dispatch = useDispatch();

    // const [disabled, setDisabled] = useState(false);
    const [product, setProduct] = useState([]);
    const [arrowMin, setArrowMin] = useState(1);
    const [arrowMax, setArrowMax] = useState(2);
    apiMain(setProduct);

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
          <Arrow
              onClick={arrowLess}
              className="main-less"
              src={ArrowIcon}
              sliderMin={arrowMin}

          />
          {
              product.slice(arrowMin, arrowMax).map((item) => (
                  <MainPhoto
                      urlImg={item.images[0]}
                      key={item.id}
                      currency="$"
                      productId={item.id}
                  />
              ))
          }
          <Arrow
              onClick={arrowMore}
              className="main-more"
              src={ArrowIcon}
              sliderMax={arrowMax}
              arrayLength={product.length}
          />
    </div>
  );
};

export default MainShare;


