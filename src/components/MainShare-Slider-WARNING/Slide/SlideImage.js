import React from "react";

import MainImage from "../../../assets/images/main-image.jpg";
import "../../../pages/MainShare/MainShare.css";
// function SlideImage({ src, alt }) {
//     return <img src={src} alt={alt} className="slide-image" />;
// }

function SlideImage() {
  return (
    <div className="main-share-img">
      <img src={MainImage} alt="main-image"  />
    </div>
  );
}

export default SlideImage;
