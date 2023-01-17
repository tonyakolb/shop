import React from "react";
import Image from "../Image/Image";

const Arrow = ({
  src,
  onClick,
  sliderMin,
  sliderMax,
  arrayLength,
  className,
}) => {
  if (!(sliderMin === 0 || sliderMax >= arrayLength)) {
    return <Image src={src} onClick={onClick} className={className} />;
  }
};

export default Arrow;
