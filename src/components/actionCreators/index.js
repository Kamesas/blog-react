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

export function delArticle() {
  return {
    type: DELETE_ARTICLE
  };
}
