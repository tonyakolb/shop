import React from "react";

import Image from "../Image/Image";
import Icon from "../../assets/images/Icon-basket-no-frame.svg";

const BagButton = ({ onClick, className, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <Image src={Icon} alt="bag-button" />
    </button>
  );
};

export default BagButton;
