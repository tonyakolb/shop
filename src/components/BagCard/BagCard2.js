import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import Image from "../Image/Image";
//
// import BagAction from "../../redux/actions/bagAction";
// import CountAction from "../../redux/actions/countBagAction";
// import { totalQuantity } from "../../redux/actions/TotalQuantity";
//
// import Cross from "../../assets/images/Cross.svg";
import BagCardWithoutTotal from "../../pages/BagCardWithoutTotal";

const BagCard2 = ({
  bagImg,
  nameCardBag,
  valuePrice,
  id,
  deleteProduct,
  bagProducts,
  // onChange,
}) => {
  // const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  // const selectValue = (e) => {
  //     onChange(e.target.value);
  // };

  // useEffect(() => {
  //     dispatch(totalQuantity(id, amount));
  // }, [amount]);
    const [total, setTotal] = useState(
        bagProducts.reduce(
            (currentItem) =>
                currentItem.valuePrice ,
            0
        )
    );
    useEffect(() => {
        setTotal(
            bagProducts.reduce(
                ( currentItem) =>
                    currentItem.valuePrice,
                0
            )
        );
    }, [amount]);

  return (
    <div className="cart-item">
      <BagCardWithoutTotal
        id={id}
        bagImg={bagImg}
        nameCardBag={nameCardBag}
        valuePrice={valuePrice}
        deleteProduct={deleteProduct}
        bagProducts={bagProducts}
        onClickMinus={() => setAmount(amount - 1)}
        onClickPlus={() => setAmount(amount + 1)}
        amount={amount}
      />

      <div className="full-price">
        <p className="full-price-label"> Итого </p>
        <p> {total} </p>
      </div>
      <div className="line" />
    </div>
  );
};

export default BagCard2;
