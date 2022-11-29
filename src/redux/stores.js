import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import persistedReducers from './reducer/index';


export const store = createStore(persistedReducers);

export const persistor = persistStore(store);