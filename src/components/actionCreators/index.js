import { DELETE_ARTICLE, INCREMENT, DECREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION } from "../../CONSTANTS";

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

export function changeDateRange(dateRange) {
  return {
      type: CHANGE_DATE_RANGE,
      payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
      type: CHANGE_SELECTION,
      payload: { selected }
  }
}
