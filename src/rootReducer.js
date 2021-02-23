import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { profiles } from "./reducers";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    profiles,
  });
