import axios from "axios";
import { REQUEST_PROFILES, RECEIVE_PROFILES, HAS_ERROR } from "./actionTypes";
import store from "../../configureStore";

export const requestProfiles = (query) => ({
  type: REQUEST_PROFILES,
  query,
});

export const receiveProfiles = ({ status, payload }) => ({
  type: RECEIVE_PROFILES,
  status,
  payload,
});
export const hasError = (error) => ({
  type: HAS_ERROR,
  error,
});

export const getProfiles = (query) => {
  return function (dispatch) {
    dispatch(requestProfiles(query));
    const url = `https://api.github.com/search/users?q=${query}`;
    return axios
      .get(url)
      .then((response) => {
        dispatch(
          receiveProfiles({
            status: "success",
            payload: response.data,
          })
        );
      })
      .catch((error) => {
        console.log("fetch error", error);
        dispatch(
          receiveProfiles({
            status: "error",
            payload: error,
          })
        );
      });
  };
};
export const getError = (error) => {
  store.dispatch(
    hasError({
      error: error,
    })
  );
};
