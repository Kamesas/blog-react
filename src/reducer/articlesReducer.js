import articles from "../fixtures";

export default (state = articles, action) => {
  switch (action.type) {
    case "DEL_ARTICLE":
      return {
        ...state
      };

    default:
      return state;
  }
};
