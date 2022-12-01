import { addToBasket, removeFromBasket } from "../actions/basketAction";
import { handleActions } from "redux-actions";

export const initialState = {
    data: [
        {
            id: "5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d",
            type: "Dresses",
            name: "SATIN EFFECT TUNIC DRESS",
            price: {
                currency: "USD",
                value: "4990",
            },
            color: {
                name: "Orange",
                hex: "#ED7C00",
            },
            availableSizes: ["XS, S, M, L, XL, XXL"],
            description:
                "SLEEVELESS TUNIC DRESS WITH V-NECKLINE AND WIDE ARM HOLES. FRONT PLEATS. ASYMMETRIC HEM.",

        },
    ],
};

const handlers = {
    [addToBasket]: (state, action) => {
        if(state.data.find((item) => item.id === action.payload.id)){
            alert('This item in basket');
            return {...state}
        }else {
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        }
    },
    [removeFromBasket]: (state, action) => ({
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
    }),
};

export default handleActions(handlers, initialState);
