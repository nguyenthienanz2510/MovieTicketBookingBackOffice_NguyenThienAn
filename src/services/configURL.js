import axios from "axios";
import {
  setSpinnerEnded,
  setSpinnerStarted,
} from "../redux/slices/spinnerSlice";
import { store } from "../redux/store";
import { localStorageService } from "./localStorageService";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwMyIsIkhldEhhblN0cmluZyI6IjAxLzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3MjUzMTIwMDAwMCIsIm5iZiI6MTY0NzUzNjQwMCwiZXhwIjoxNjcyNjc4ODAwfQ.v1pky9yKwnujpoxePbaS26rxq_cGpKrk0GvA0sHAVqY";

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer " + localStorageService.getUserInfor()?.accessToken,
  },
});

httpService.interceptors.request.use(
  function (config) {
    console.log("yes Request");
    store.dispatch(setSpinnerStarted());

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("no Request");
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  function (response) {
    store.dispatch(setSpinnerEnded());
    console.log("end Request");

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setSpinnerEnded());
    switch (error.response.status) {
      case 401:
      case 403: {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
