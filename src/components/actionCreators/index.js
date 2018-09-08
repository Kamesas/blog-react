import { DELETE_ARTICLE, INCREMENT, DECREMENT } from "../../CONSTANTS";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function delArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}
