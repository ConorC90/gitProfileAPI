import axios from "axios";
import {
  REQUEST_PROFILES,
  RECEIVE_PROFILES,
  HAS_ERROR,
  IS_FETCHING,
} from "./actionTypes";
import store from "./configureStore";

export const requestProfiles = (query) => ({
  type: REQUEST_PROFILES,
  query,
});

export const receiveProfiles = ({ status, payload }) => ({
  type: RECEIVE_PROFILES,
  status,
  payload,
});

export const isFetching = ({ status }) => ({
  type: IS_FETCHING,
  status,
});

export const hasError = (error) => ({
  type: HAS_ERROR,
  error: error,
});

export const getProfiles = (query) => {
  return function (dispatch) {
    dispatch(isFetching(true));
    dispatch(requestProfiles(query));
    const url = `https://api.github.com/search/users?q=${query}`;
    return axios
      .get(url)
      .then((response) => {
        dispatch(
          receiveProfiles({
            status: "success",
            payload: response.data,
          }),
          dispatch(
            isFetching({
              status: false,
            })
          )
        );
      })
      .catch((error) => {
        dispatch(
          hasError({
            error: error,
          })
        );
        dispatch(
          isFetching({
            status: false,
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
