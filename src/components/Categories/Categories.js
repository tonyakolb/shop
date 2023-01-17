import React from "react";

import Category from "../Category/Category";
import KitchenImage from "../../assets/images/kitchen.png";
import BathroomImage from "../../assets/images/bathroom.png";
import ToiletImage from "../../assets/images/toilet.png";
import OtherImage from "../../assets/images/other-image.png";
import "../CatalogCategories/CatalogCategories.css";

const Categories = () => {
  return (
    <div className="categories">
      <Category
        inputValueText="Кухня"
        src={KitchenImage}
        alt="kitchen"
        text="Кухня"
      />
      <Category
        inputValueText="Ванная комната"
        src={BathroomImage}
        alt="bathroom"
        text="Ванная комната"
      />
      <Category
        inputValueText="Туалетная комната"
        src={ToiletImage}
        alt="toilet"
        text="Туалетная комната"
      />
      <Category
        inputValueText="Прочее"
        src={OtherImage}
        alt="other"
        text="Прочее"
      />
    </div>
  );
};

export default Categories;
