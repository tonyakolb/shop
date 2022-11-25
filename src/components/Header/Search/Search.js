import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import FoundItem from '../FoundItem/FoundItem';
import Input from '../../Input/Input';
import './Search.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const dataAllBooks = useSelector(
        createSelector(
            (state) => state.allProducts.dataAllProducts,
            (data) => data
        )
    );
    const [searchArrayBook, setSearchArrayProducts] = useState([]);
    const [focused, setFocused] = React.useState(false);

    const searchChange = (event) => {
        setSearch(event.target.value);
        setSearchArrayProducts(
            dataAllProducts.filter(
                (item) =>
                    item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                    item.author.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
        );
    };

    return (
        <div>
            <div className="search-image">
            </div>
            <Input
                className=""
                placeholder="Поиск"
                value={search}
                onChange={searchChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 100)}
            />
            {focused && (
                <div className="search-section">
                    {searchArrayBook.map((product) => (
                        <FoundItem
                            image={product.imageUrl}
                            id={product.id}
                            author={product.author}
                            name={product.name}
                            key={product.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
