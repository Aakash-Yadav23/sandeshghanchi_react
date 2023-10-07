import {
  ALL_SAGAYI_SAPAN_GET_REQUEST,
  ALL_SAGAYI_SAPAN_GET_SUCCESS,
  ALL_SAGAYI_SAPAN_GET_FAIL,
  SAGAYI_SAPAN_GET_DETAILS_REQUEST,
  SAGAYI_SAPAN_GET_DETAILS_SUCCESS,
  SAGAYI_SAPAN_GET_DETAILS_FAIL,
  SAGAYI_SAPAN_CREATE_REQUEST,
  SAGAYI_SAPAN_CREATE_SUCCESS,
  SAGAYI_SAPAN_CREATE_FAIL,
  SAGAYI_SAPAN_UPDATE_REQUEST,
  SAGAYI_SAPAN_UPDATE_SUCCESS,
  SAGAYI_SAPAN_UPDATE_FAIL,
  SAGAYI_SAPAN_DELETE_REQUEST,
  SAGAYI_SAPAN_DELETE_SUCCESS,
  SAGAYI_SAPAN_DELETE_FAIL,
  SAGAYI_SAPAN_CLEAR_ERROR,
} from "../constants/SagayiSapan";

interface SagayiSapanState {
  loading: boolean;
  isAuthenticated: boolean;
  sagayiSapanDetails: {};
  SagayiSapan: []; // Replace 'any' with appropriate SagayiSapan type
  error: any; // Replace 'any' with appropriate error type
}

const initialState: SagayiSapanState = {
  loading: false,
  isAuthenticated: false,
  SagayiSapan: [],
  sagayiSapanDetails: {},
  error: null,
};

const SagayiSapanReducer = (
  state: SagayiSapanState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_SAGAYI_SAPAN_GET_REQUEST:
    case SAGAYI_SAPAN_CREATE_REQUEST:
    case SAGAYI_SAPAN_DELETE_REQUEST:
    case SAGAYI_SAPAN_GET_DETAILS_REQUEST:
    case SAGAYI_SAPAN_UPDATE_REQUEST:
      // Handle ALL_SAGAYI_SAPAN_GET_REQUEST
      return {
        ...state,
        loading: true,
      };

    case ALL_SAGAYI_SAPAN_GET_SUCCESS:
      // Handle ALL_SAGAYI_SAPAN_GET_SUCCESS
      return {
        ...state,
        loading: false,
        SagayiSapan: action.payload,
        error: null,
      };
    case SAGAYI_SAPAN_CREATE_SUCCESS:
    case SAGAYI_SAPAN_UPDATE_SUCCESS:
    case SAGAYI_SAPAN_GET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        sagayiSapanDetails: action.payload,
        success: true,
        error: null,
      };
    case SAGAYI_SAPAN_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        error: null,
      };
    case ALL_SAGAYI_SAPAN_GET_FAIL:
      return {
        ...state,
        loading: false,
        SagayiSapan: [],
        error: action.payload,
      };
    case SAGAYI_SAPAN_CREATE_FAIL:
    case SAGAYI_SAPAN_DELETE_FAIL:
    case SAGAYI_SAPAN_UPDATE_FAIL:
    case SAGAYI_SAPAN_GET_DETAILS_FAIL:
      // Handle ALL_SAGAYI_SAPAN_GET_FAIL
      return {
        ...state,
        loading: false,
        sagayiSapanDetails: {},
        success: false,
        error: action.payload,
      };
    case SAGAYI_SAPAN_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    // Add cases for other action types similarly

    default:
      return state;
  }
};

export default SagayiSapanReducer;
