import React, { useContext } from "react";
import Slide from "../Slide/Slide";
import { SliderContext } from "../Slider";

import "../../../pages/MainShare/MainShare.css";


// export default function SlidesList() {
//     const { slideNumber, items } = useContext(SliderContext);
//
//     return (
//         <div
//             className="slide-list"
//             style={{ transform: `translateX(-${slideNumber * 100}%)` }}
//         >
//             {items.map((slide, index) => (
//                 <Slide key={index} data={slide} />
//             ))}
//         </div>
//     );
// }

function SlidesList() {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className="slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map(() => (
               <Slide  />
         ))}
        </div>
    );
}

export default  SlidesList;