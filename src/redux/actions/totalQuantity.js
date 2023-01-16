import { TOTAL_QUANTITY } from './actionTypes';

export const totalQuantity = (productId, quantity) => ({
    type: TOTAL_QUANTITY,
    payload: { productId, quantity },
});
