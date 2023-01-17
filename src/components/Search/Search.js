import React, { useState } from 'react';
import SearchCard from "../SearchCard/SearchCard";
import Image from "../Image/Image";

import {apiMain} from "../../assets/constants/requests";
import SearchIcon from "../../assets/images/search-icon.svg";
// import './Search.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [searchArrayBook, setSearchArrayBook] = useState([]);
    const [focused, setFocused] = React.useState(false);
    apiMain(setProduct);

    const searchChange = (event) => {
        setSearch(event.target.value);
        setSearchArrayBook(
            product.filter(
                (item) =>
                    item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
        );
    };

    return (
        <div className="search-input-section">
            <div className="search-icon">
                <Image src={SearchIcon} alt="search-icon" />
            </div>
            <input
                className="search-input"
                placeholder="Search"
                value={search}
                onChange={searchChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 100)}
            />
            {focused && (
                <div className="search-section">
                    {searchArrayBook.map((item) => (
                        <SearchCard
                            urlImg={item.images[0]}
                            catalogSearch={item.id}
                            valuePrice={item.price.value}
                            name={item.name}
                            key={item.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
