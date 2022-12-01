import { createAction } from "redux-actions";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

export const addToBasket = createAction("ADD_TO_BASKET");
export const removeFromBasket = createAction("REMOVE_FROM_BASKET");
