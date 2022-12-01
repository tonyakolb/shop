import React from "react";
import { Link } from "react-router-dom";
import KitchenImage from "../../assets/images/kitchen.png";
import BathroomImage from "../../assets/images/bathroom.png";
import ToiletImage from "../../assets/images/toilet.png";
import OtherImage from "../../assets/images/other-image.png";

const CatalogCategories = () => {
  return (
    <div>
      <div>
        <p>Категории каталога</p>
        <Link to="/catalog">Перейти в каталог</Link>
      </div>
      <div>
        <div>
          <Link to="/kitchen-catalog">
            <img src={KitchenImage} alt="kitchen" />
            <div>Кухни</div>
          </Link>
        </div>
        <div>
          <Link to="/bathroom-catalog">
            <img src={BathroomImage} alt="bathroom" />
            <div>Ванная комната</div>
          </Link>
        </div>
        <div>
          <Link to="/toilet-catalog">
            <img src={ToiletImage} alt="toilet" />
            <div>Туалетная комната</div>
          </Link>
        </div>
        <div>
          <Link to="/other-catalog">
            <img src={OtherImage} alt="other" />
            <div>Прочее</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategories;
