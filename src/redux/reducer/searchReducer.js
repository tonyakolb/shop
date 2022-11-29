import { handleActions } from 'redux-actions';
import { searchActionCreator } from '../actions/searchAction';

const initialState = {
    search: '',
};

const searchReducer = handleActions(
    {
        [searchActionCreator]: (state, { payload }) => ({ ...state, search: payload }),
    },
    initialState,
);

export default searchReducer;