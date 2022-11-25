import React from 'react';
import ImageItem from '../../Item/ImageItem/Imageitem';
import Name from '../../Item/Name/NameOfItem';


const FindBook = ({ image, id, name, author }) => (
    <div className="section">
        <div className="section-image">
            <ImageItem image={image} id={id} />
        </div>
        <div className="section-name-of-author">
            <Name name={name} author={author} id={id} />
        </div>
    </div>
);

export default FindBook;
