import React from "react";
// import { SliderContext } from "./Slider";
import Dot from "./Dot";
import './styles.scss';

export default function Dots() {
  // const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}
