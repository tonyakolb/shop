import { combineReducers } from "redux";

//reducers

import apiResult from "./apiReducer";
import filterResult from "./filterReducer";
import filterTitle from "./filterTitleReducer";

export default combineReducers({
  apiResult,
  filterResult,
  filterTitle,
});
