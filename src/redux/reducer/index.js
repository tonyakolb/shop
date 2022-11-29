import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers

import searchReducer from './searchReducer';


const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers({
    search: searchReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;