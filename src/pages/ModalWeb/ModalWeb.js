import React from "react";

import Input from "../../components/Input/Input";
import SearchResult from "../../components-not-ready/SearchResult/SearchResult";
import Image from "../../components/Image/Image";

import CloseIcon from "../../assets/images/close-icon.svg";

import Header from '../Header/Header';

const ModalWeb = ({
  searchModalClose,
  onChange,
  search,
  product,
  valueInput,
}) => {

  const handleWishChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Header/>
      <div className="modal_web">
        <div className="container">
          <div className="modal_wrapper">
            <form
              className="form_search"
              onSubmit={(e) => {
                search(e);
              }}
            >
              <Image
                src={CloseIcon}
                onClick={searchModalClose}
                alt="close-icon"
              />
              <Input
                type="text"
                placeholder="Название продукта"
                onChange={handleWishChange}
                value={valueInput}
              />
            </form>
          </div>
        </div>
      </div>
      <SearchResult product={product} />
    </>
  );
};

export default ModalWeb;
