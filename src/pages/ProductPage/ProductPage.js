import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';


const ProductDetails = () => {
    const apiResult = useSelector((state) => state.apiResult.response);
    const { id } = useParams();

    const productDetailsFilter = apiResult.filter((item) => Object.values(item).includes(id));

    return (
        !!productDetailsFilter && (
            <>
                {productDetailsFilter.map((item) => (
                    <Card
                        detailImages={item.images[0]}
                        detailImagesSecond={item.images[1]}
                        key={item.id}
                        currency={item.price.currency}
                        productName={item.name}
                        valuePrice={item.price.value}
                        productId={item.id}
                    />
                ))}
            </>
        )
    );
};

export default ProductDetails;
