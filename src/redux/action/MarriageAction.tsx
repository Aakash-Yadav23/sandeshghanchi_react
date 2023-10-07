// constants/Marriage.ts
import axios from 'axios';
import { Dispatch } from 'redux';
import API_URL from '../../url';

import {
    ALL_MARRIAGE_GET_REQUEST,
    ALL_MARRIAGE_GET_SUCCESS,
    ALL_MARRIAGE_GET_FAIL,
    MARRIAGE_GET_DETAILS_REQUEST,
    MARRIAGE_GET_DETAILS_SUCCESS,
    MARRIAGE_GET_DETAILS_FAIL,
    MARRIAGE_CREATE_REQUEST,
    MARRIAGE_CREATE_SUCCESS,
    MARRIAGE_CREATE_FAIL,
    MARRIAGE_UPDATE_REQUEST,
    MARRIAGE_UPDATE_SUCCESS,
    MARRIAGE_UPDATE_FAIL,
    MARRIAGE_DELETE_REQUEST,
    MARRIAGE_DELETE_SUCCESS,
    MARRIAGE_DELETE_FAIL,
    MARRIAGE_CLEAR_ERRORS,
  } from "../constants/Marriage";



export const createMarraigeAction = (MarraigeData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: MARRIAGE_CREATE_REQUEST });
  
      const { data } = await axios.post(`${API_URL}/newMarraige`, MarraigeData);
  
      dispatch({ type: MARRIAGE_CREATE_SUCCESS, payload: data });
    } catch (error:any) {
      dispatch({
        type: MARRIAGE_CREATE_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };


  export const detailsMarraigeAction = (id: string) => async (
    dispatch: Dispatch
  ) => {
    try {
      dispatch({ type: MARRIAGE_GET_DETAILS_REQUEST });
  
      const { data } = await axios.get(`${API_URL}/Marraige/${id}`);
  
      dispatch({ type: MARRIAGE_GET_DETAILS_SUCCESS, payload: data });
    } catch (error:any) {
      dispatch({
        type: MARRIAGE_GET_DETAILS_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };





  export const getAllMarraigesAction = () => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ALL_MARRIAGE_GET_REQUEST });
  
      const { data } = await axios.get(`${API_URL}/marriages`);
  
      dispatch({ type: ALL_MARRIAGE_GET_SUCCESS, payload: data });
    } catch (error:any) {
      dispatch({
        type: ALL_MARRIAGE_GET_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };


  export const updateMarraigeAction = (id: string, updatedData: any) => async (
    dispatch: Dispatch
  ) => {
    try {
      dispatch({ type: MARRIAGE_UPDATE_REQUEST });
  
      const { data } = await axios.put(`${API_URL}/marraige/${id}`, updatedData);
  
      dispatch({ type: MARRIAGE_UPDATE_SUCCESS, payload: data });
    } catch (error:any) {
      dispatch({
        type: MARRIAGE_UPDATE_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };

  export const deleteMarraigeAction = (id: string) => async (
    dispatch: Dispatch
  ) => {
    try {
      dispatch({ type: MARRIAGE_DELETE_REQUEST });
  
      const { data } = await axios.delete(`${API_URL}/marraige/${id}`);
  
      dispatch({ type: MARRIAGE_DELETE_SUCCESS, payload: data });
    } catch (error:any) {
      dispatch({
        type: MARRIAGE_DELETE_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };


  export const clearMarriageErrors = () => async (dispatch:Dispatch<any>) => {
  
    dispatch({ type: MARRIAGE_CLEAR_ERRORS });
  };







  export const clearMarraigeErrors = () => async (dispatch:Dispatch) => {
  
    dispatch({ type: MARRIAGE_CLEAR_ERRORS });
  };