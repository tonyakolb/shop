import { INCREMENT, DECREMENT, NULL } from '../actions/actionTypes';

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case NULL:
            return (state = 0);
        default:
            return state;
    }
};

export default counter;
