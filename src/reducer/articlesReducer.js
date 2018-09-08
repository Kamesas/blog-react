import { DELETE_ARTICLE } from "../CONSTANTS";
import articles from "../fixtures";

export default (state = articles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return {
        ...state
      };

    default:
      return state;
  }
};
