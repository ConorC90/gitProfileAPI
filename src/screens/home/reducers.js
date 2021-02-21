import { REQUEST_PROFILES, RECEIVE_PROFILES, HAS_ERROR, IS_FETCHING } from "./actionTypes";

const initalState = {
  query: "",
  isFetching: false,
  data: {},
  error: "",
};

export const profiles = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_PROFILES:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
      });
    case RECEIVE_PROFILES:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === "success" ? action.payload : initalState.data,
        error: action.status === "error" ? action.payload : initalState.error,
      });
    case HAS_ERROR:
      return Object.assign({}, state, {
        error: action,
      });
    case IS_FETCHING:
      return Object.assign({},state,{
        isFetching: action.status
      })

    default:
      return state;
  }
};
