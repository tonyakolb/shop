import React from "react";

const TitleBlock = ({ titleBlock, titleBlockLast }) => {
  return (
    <div className="title_block">
      {titleBlock}
      <span className="title_block_last">{titleBlockLast}</span>
    </div>
  );
};

export default TitleBlock;
