import React from "react";
import ProductCard from '../../Attempt1/ProductCard/ProductCard';
import { useState } from 'react';
import {apiMain} from "../../assets/constants/requests";
import "./AllProducts.css";


const AllProducts = () => {
    const [product, setProduct] = useState([]);
    apiMain(setProduct);

    return (
        <>
                    <div className="all-items">
                        <div className="products_items">
                            {product.map((item) => (
                                <ProductCard
                                    urlImg={item.images[0]}
                                    key={item.id}
                                    currency="$"
                                    valuePrice={item.price.value}
                                    catalogSearch={item.id}
                                    productId={item.id}
                                />
                            ))}
                        </div>
                    </div>
        </>
    );
};

export default AllProducts;
