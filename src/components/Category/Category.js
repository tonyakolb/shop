import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ApiAction from "../../redux/actions/apiAction";
import { Link } from "react-router-dom";

import Image from "../Image/Image";
import "../CatalogCategories/CatalogCategories.css";

const Category = ({ inputValueText, src, alt, text }) => {
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const filterProduct = () => {
    const resultSearchFilter = apiResult.filter((item) =>
      Object.values(item)
        .toString()
        .toLowerCase()
        .trim()
        .includes(inputValueText.toLowerCase())
    );
    dispatch(ApiAction.filterProduct(resultSearchFilter));
    dispatch(ApiAction.filterTitle(inputValueText));
  };

  return (
    <Link
      to={`/Каталог/${inputValueText}`}
      className="category"
      onClick={filterProduct}
      >
          <div className='category-img'>
              <Image src={src} alt={alt} />
          </div>
      <div className="category-name">{text}</div>
    </Link>
  );
};

export default Category;
