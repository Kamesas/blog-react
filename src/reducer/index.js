import { combineReducers } from "redux";
import counterReducer from "./counter";
import articleReducer from "./articlesReducer";

export default combineReducers({
  count: counterReducer,
  articleReducer
});
