import { combineReducers } from "redux";
import counterReducer from "./counter";
import articleReducer from "./articlesReducer";
import filters from "./filters";

export default combineReducers({
  count: counterReducer,
  articleReducer,
  filters
});
