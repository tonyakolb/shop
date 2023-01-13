import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "../../../pages/MainShare/MainShare.css";


function Slide() {
  return (
    <div className="slide">
      <SlideTitle  />
        <SlideImage  />
    </div>
  );
}

export default  Slide;