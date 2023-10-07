import { Dispatch } from "react";
import {
  ALL_EPATRIKA_GET_REQUEST,
  ALL_EPATRIKA_GET_SUCCESS,
  ALL_EPATRIKA_GET_FAIL,
  EPATRIKA_DETAILS_GET_REQUEST,
  EPATRIKA_DETAILS_GET_SUCCESS,
  EPATRIKA_DETAILS_GET_FAIL,
  EPATRIKA_CREATE_REQUEST,
  EPATRIKA_CREATE_SUCCESS,
  EPATRIKA_CREATE_FAIL,
  EPATRIKA_DELETE_REQUEST,
  EPATRIKA_DELETE_SUCCESS,
  EPATRIKA_DELETE_FAIL,
  EPATRIKA_UPDATE_REQUEST,
  EPATRIKA_UPDATE_SUCCESS,
  EPATRIKA_UPDATE_FAIL,
  EPATRIKA_CLEAR_ERRORS,
} from "../constants/Epatrika";
import axios, { AxiosResponse } from "axios";
import API_URL from "../../url";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";

interface EpatrikaData {
  pdf: string;
  Month: string;
}

const epatrikaAPI = `${API_URL}/api/v1/epatrika`;

export const getAllEpatrika = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: ALL_EPATRIKA_GET_REQUEST });
    const response: AxiosResponse = await axios.get(epatrikaAPI);

    dispatch({ type: ALL_EPATRIKA_GET_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: ALL_EPATRIKA_GET_FAIL, payload: error.message });
  }
};

export const getEpatrikaDetails = (id: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: EPATRIKA_DETAILS_GET_REQUEST });
    const response: AxiosResponse = await axios.get(`${epatrikaAPI}/${id}`);

    dispatch({ type: EPATRIKA_DETAILS_GET_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: EPATRIKA_DETAILS_GET_FAIL, payload: error.message });
  }
};

export const createEpatrika = (title: string, description: string,location: string,image: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: EPATRIKA_CREATE_REQUEST });
    const requestData = {
      title: title,
      description: description,
      location,
      image
    };
    const config = { headers: { "Content-Type": "application/json" } };
    const response: AxiosResponse = await axios.post(epatrikaAPI, requestData, config);

    dispatch({ type: EPATRIKA_CREATE_SUCCESS, payload: response.data });
    toast.success("Login success");
  } catch (error: any) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: EPATRIKA_CREATE_FAIL, payload: errorMessage });
    if (errorMessage === "User Not Found" || "Invalid Credentials") {
      toast.error("Invalid User or Password");
    } else {
      toast.error("Login Failed");
    }
  }
};

export const deleteEpatrika = (id: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: EPATRIKA_DELETE_REQUEST });
    const response: AxiosResponse = await axios.delete(`${epatrikaAPI}/${id}`);

    dispatch({ type: EPATRIKA_DELETE_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: EPATRIKA_DELETE_FAIL, payload: error.message });
  }
};

export const updateEpatrika = (id: string, data: EpatrikaData) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: EPATRIKA_UPDATE_REQUEST });
    const response: AxiosResponse = await axios.put(`${epatrikaAPI}/${id}`, data);

    dispatch({ type: EPATRIKA_UPDATE_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: EPATRIKA_UPDATE_FAIL, payload: error.message });
  }
};

export const clearEpatrikaErrors = () => (dispatch: Dispatch<any>) => {
  dispatch({ type: EPATRIKA_CLEAR_ERRORS });
};
