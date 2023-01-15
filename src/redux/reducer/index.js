import { combineReducers } from "redux";

//reducers

import apiResult from "./apiReducer";
import filterResult from "./filterReducer";
import filterTitle from "./filterTitleReducer";
import bagReducer from "./bagReducer";
import counter from "./countBagReducer";

export default combineReducers({
  apiResult,
  filterResult,
  filterTitle,
  bagReducer,
  counter,
});
