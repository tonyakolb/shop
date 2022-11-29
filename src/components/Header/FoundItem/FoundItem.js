import React from 'react';
import ImageItem from '../../Item/ImageItem/Imageitem';
import Name from '../../Item/Name/NameOfItem';


const FindBook = ({ image, id, name }) => (
    <div>
        <div>
            <ImageItem image={image} id={id} />
        </div>
        <div>
            <Name name={name} id={id} />
        </div>
    </div>
);

export default FindBook;
