import React from "react";
import Image from "../../components/Image/Image";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import './styles.scss';
export default function Slide({ data: { imgUrl, name } }) {
    return (
        <div className="slide">
            <Image src={imgUrl} alt={name} />
            <TitleBlock title={name} />
        </div>
    );
}
