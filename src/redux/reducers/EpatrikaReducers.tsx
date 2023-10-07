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

interface EpatrikaState {
  loading: boolean;

  epatrika: [];
  epatrikaCount: number;
  epatrikaDetails: {};
  resultPerPage: number;
  // Replace 'any' with appropriate epatrika type
  error: any; // Replace 'any' with appropriate error type
}

const initialState: EpatrikaState = {
  loading: false,

  epatrika: [],
  epatrikaCount: 0,
  epatrikaDetails: {},
  resultPerPage: 0,
  error: null,
};

export const epatrikaReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_EPATRIKA_GET_REQUEST:
    case EPATRIKA_DETAILS_GET_REQUEST:
    case EPATRIKA_CREATE_REQUEST:
    // Add other relevant request cases
    case EPATRIKA_UPDATE_REQUEST:
    case EPATRIKA_DELETE_REQUEST:
      return {
        ...state,
        loading: true,

        epatrika: null,
        error: null,
      };

    case ALL_EPATRIKA_GET_SUCCESS:
    case EPATRIKA_DETAILS_GET_SUCCESS:
    case EPATRIKA_CREATE_SUCCESS:
    case EPATRIKA_UPDATE_SUCCESS:
    // Add other relevant success cases
    case EPATRIKA_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,

        epatrika: action.payload,
        error: null,
      };

    case ALL_EPATRIKA_GET_FAIL:
    case EPATRIKA_DETAILS_GET_FAIL:
    case EPATRIKA_CREATE_FAIL:
    case EPATRIKA_UPDATE_FAIL:
    // Add other relevant failure cases
    case EPATRIKA_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        epatrika: null,
        error: action.payload,
      };

    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const allEpatrikaGetReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_EPATRIKA_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_EPATRIKA_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        epatrika: action.payload,
        error: null,
      };
    case ALL_EPATRIKA_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const epatrikaDetailsGetReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case EPATRIKA_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EPATRIKA_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        epatrikaDetails: action.payload,
        error: null,
      };
    case EPATRIKA_DETAILS_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const epatrikaCreateReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case EPATRIKA_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EPATRIKA_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        epatrikaDetails: action.payload,
        error: null,
      };
    case EPATRIKA_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const epatrikaUpdateReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case EPATRIKA_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EPATRIKA_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        epatrikaDetails: action.payload,
        error: null,
      };
    case EPATRIKA_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const epatrikaDeleteReducer = (
  state: EpatrikaState = initialState,
  action: any
) => {
  switch (action.type) {
    case EPATRIKA_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EPATRIKA_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        epatrikaDetails: action.payload,
        error: null,
      };
    case EPATRIKA_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EPATRIKA_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


