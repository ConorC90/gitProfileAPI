import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { profiles } from "./screens/home/reducers";


export default (history) =>
  combineReducers({
    router: connectRouter(history),
    profiles,
  });
