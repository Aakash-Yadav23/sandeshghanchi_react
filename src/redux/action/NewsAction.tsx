// NewsActions.jsx

import axios from "axios";
import Cookies from "universal-cookie";

import {
  ALL_NEWS_GET_REQUEST,
  ALL_NEWS_GET_SUCCESS,
  ALL_NEWS_GET_FAIL,
  NEWS_DETAILS_GET_REQUEST,
  NEWS_DETAILS_GET_SUCCESS,
  NEWS_DETAILS_GET_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,
  NEWS_CLEAR_ERRORS,
} from "../constants/NewsConstants";

import API_URL from "../../url";

interface AllNewsGetRequestAction {
  type: typeof ALL_NEWS_GET_REQUEST;
}

interface AllNewsGetSuccessAction {
  type: typeof ALL_NEWS_GET_SUCCESS;
  payload: any; // Adjust the payload type based on your response data
}

interface AllNewsGetFailAction {
  type: typeof ALL_NEWS_GET_FAIL;
  payload: string; // Adjust the payload type based on your error handling
}

export type NewsActionTypes =
  | AllNewsGetRequestAction
  | AllNewsGetSuccessAction
  | AllNewsGetFailAction;

export const createNewsAction =
  (newData: any) => async (dispatch: any) => {
    try {
      dispatch({ type: NEWS_CREATE_REQUEST });
      const cookies = new Cookies();
      const token = cookies.get("token");

      const url = `${API_URL}/api/v1/news/new?token=${token}`;

      const { data } = await axios.post(`${url}`, newData);
      dispatch({ type: NEWS_CREATE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: NEWS_CREATE_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };

export const detailsNewsAction =
  (id: string) => async (dispatch: any) => {
    try {
      dispatch({ type: NEWS_DETAILS_GET_REQUEST });

      const response= await axios.get(`${API_URL}/api/v1/news/${id}`);

      console.log('datta',response.data)
      dispatch({ type: NEWS_DETAILS_GET_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({
        type: NEWS_DETAILS_GET_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };

export const getAllNewsAction =
  (keyword = "", currentPage = 1) =>
  async (dispatch: any) => {
    try {
      dispatch({ type: ALL_NEWS_GET_REQUEST });
      let link = `api/v1/news/all?keyword=${keyword}&page=${currentPage}`;
      const response = await axios.get(`${API_URL}/${link}`);
      dispatch({ type: ALL_NEWS_GET_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({
        type: ALL_NEWS_GET_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };

export const updateNewsAction =
  (NEWSId: string, updatedData: any) => async (dispatch: any) => {
    try {
      dispatch({ type: NEWS_UPDATE_REQUEST });
      const cookies = new Cookies();
      const token = cookies.get("token");

      const url = `${API_URL}/api/v1/news/${NEWSId}?token=${token}`;

      const { data } = await axios.put(`${url}`, updatedData);

      dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: NEWS_UPDATE_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };

export const deleteNewsAction = (NEWSId: string) => async (dispatch: any) => {
  try {
    dispatch({ type: NEWS_DELETE_REQUEST });
    const cookies = new Cookies();
    const token = cookies.get("token");

    const url = `${API_URL}/api/v1/news/${NEWSId}?token=${token}`;

    const { data } = await axios.delete(url);

    dispatch({ type: NEWS_DELETE_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: NEWS_DELETE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
