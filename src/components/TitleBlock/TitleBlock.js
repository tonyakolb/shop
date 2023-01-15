import React from "react";
import "./TitleBlock.css";


const TitleBlock = ({ titleBlock, titleBlockLast,classNameBlock,classNameBlockLast}) => {
    return (
    <div className='classNameBlock'>
      {titleBlock}
      <span className='classNameBlockLast'>{titleBlockLast}</span>
      </div>
  );
};

export default TitleBlock;
