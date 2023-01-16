import { combineReducers } from "redux";

//reducers

import apiResult from "./apiReducer";
import filterResult from "./filterReducer";
import filterTitle from "./filterTitleReducer";
import bagReducer from "./bagReducer";
import counter from "./countBagReducer";
import quantityById from './TotalQuantityReducer';

export default combineReducers({
  apiResult,
  filterResult,
  filterTitle,
  bagReducer,
  counter,
  quantityById,
});
