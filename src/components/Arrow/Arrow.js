import React from 'react';

import Image from "../Image/Image";
import './Arrow.css';

const Arrow = ({ src, onClick, sliderMin, sliderMax, arrayLength }) => {
    if (!(sliderMin === 0 || sliderMax >= arrayLength)) {
        return <Image src={src} onClick={onClick} />;
    }
};

export default Arrow;
