import axios from 'axios';
import {
  ALL_FAMILY_GET_REQUEST,
  ALL_FAMILY_GET_SUCCESS,
  ALL_FAMILY_GET_FAIL,
  FAMILY_DETAILS_GET_REQUEST,
  FAMILY_DETAILS_GET_SUCCESS,
  FAMILY_DETAILS_GET_FAIL,
  FAMILY_CREATE_REQUEST,
  FAMILY_CREATE_SUCCESS,
  FAMILY_CREATE_FAIL,
  FAMILY_UPDATE_REQUEST,
  FAMILY_UPDATE_SUCCESS,
  FAMILY_UPDATE_FAIL,
  FAMILY_DELETE_REQUEST,
  FAMILY_DELETE_SUCCESS,
  FAMILY_DELETE_FAIL,
  FAMILY_CLEAR_ERRORS
} from '../constants/Family';

import { Dispatch } from 'redux';
import API_URL from '../../url';

export const getAllFamiliesAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ALL_FAMILY_GET_REQUEST });

    const { data } = await axios.get(`${API_URL}/families`);

    dispatch({ type: ALL_FAMILY_GET_SUCCESS, payload: data });
} catch (error:any) {

    dispatch({
      type: ALL_FAMILY_GET_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getFamilyByIdAction = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FAMILY_DETAILS_GET_REQUEST });

    const { data } = await axios.get(`${API_URL}/family/${id}`);

    dispatch({ type: FAMILY_DETAILS_GET_SUCCESS, payload: data });
} catch (error:any) {

    dispatch({
      type: FAMILY_DETAILS_GET_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};



export const createFamilyAction = (newData:any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FAMILY_CREATE_REQUEST });

    const { data } = await axios.post(`${API_URL}/admin/families`,newData);

    dispatch({ type: FAMILY_CREATE_SUCCESS, payload: data });
} catch (error:any) {

    dispatch({
      type: FAMILY_CREATE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const updateFamilyAction = (id: string,updateData:any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FAMILY_UPDATE_REQUEST });

    const { data } = await axios.put(`${API_URL}/admin/family/${id}`,updateData);

    dispatch({ type: FAMILY_UPDATE_SUCCESS, payload: data });
} catch (error:any) {

    dispatch({
      type: FAMILY_UPDATE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};




export const deleteFamilyAction = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: FAMILY_DELETE_REQUEST });

    const { data } = await axios.delete(`${API_URL}/admin/family/${id}`);

    dispatch({ type: FAMILY_DELETE_SUCCESS, payload: data });
  } catch (error:any) {
    dispatch({
      type: FAMILY_DELETE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};


export const clearFamilyErrors = () => async (dispatch:Dispatch) => {
  
  dispatch({ type: FAMILY_CLEAR_ERRORS });
};