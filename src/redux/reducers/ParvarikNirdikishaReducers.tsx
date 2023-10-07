import {
  ALL_PARVARIK_NIRDIKISHA_GET_REQUEST,
  ALL_PARVARIK_NIRDIKISHA_GET_SUCCESS,
  ALL_PARVARIK_NIRDIKISHA_GET_FAIL,
  PARVARIK_NIRDIKISHA_DETAILS_GET_REQUEST,
  PARVARIK_NIRDIKISHA_DETAILS_GET_SUCCESS,
  PARVARIK_NIRDIKISHA_DETAILS_GET_FAIL,
  PARVARIK_NIRDIKISHA_CREATE_REQUEST,
  PARVARIK_NIRDIKISHA_CREATE_SUCCESS,
  PARVARIK_NIRDIKISHA_CREATE_FAIL,
  PARVARIK_NIRDIKISHA_UPDATE_REQUEST,
  PARVARIK_NIRDIKISHA_UPDATE_SUCCESS,
  PARVARIK_NIRDIKISHA_UPDATE_FAIL,
  PARVARIK_NIRDIKISHA_DELETE_REQUEST,
  PARVARIK_NIRDIKISHA_DELETE_SUCCESS,
  PARVARIK_NIRDIKISHA_DELETE_FAIL,
  PARVARIK_NIRDIKISHA_CLEAR_ERROR,
} from "../constants/ParvarikNirdikisha";

interface ParvarikNirdikishaState {
  loading: boolean;
  isAuthenticated: boolean;
  parvarikNirdikishaDetails: {};
  ParvarikNirdikisha: []; // Replace 'any' with appropriate ParvarikNirdikisha type
  error: any; // Replace 'any' with appropriate error type
}

const initialState: ParvarikNirdikishaState = {
  loading: false,
  isAuthenticated: false,
  ParvarikNirdikisha: [],
  parvarikNirdikishaDetails: {},
  error: null,
};

const parvarikNirdikishaReducer = (
  state: ParvarikNirdikishaState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_PARVARIK_NIRDIKISHA_GET_REQUEST:
    case PARVARIK_NIRDIKISHA_CREATE_REQUEST:
    case PARVARIK_NIRDIKISHA_DELETE_REQUEST:
    case PARVARIK_NIRDIKISHA_DETAILS_GET_REQUEST:
    case PARVARIK_NIRDIKISHA_UPDATE_REQUEST:
      // Handle ALL_PARVARIK_NIRDIKISHA_GET_REQUEST
      return {
        ...state,
        loading: true,
      };

    case ALL_PARVARIK_NIRDIKISHA_GET_SUCCESS:
      // Handle ALL_PARVARIK_NIRDIKISHA_GET_SUCCESS
      return {
        ...state,
        loading: false,
        ParvarikNirdikisha: action.payload,
        error: null,
      };
    case PARVARIK_NIRDIKISHA_CREATE_SUCCESS:
      // Handle ALL_PARVARIK_NIRDIKISHA_GET_SUCCESS
      return {
        ...state,
        loading: false,
        parvarikNirdikishaDetails: action.payload,
        success: true,
        error: null,
      };

    case PARVARIK_NIRDIKISHA_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        parvarikNirdikishaDetails: action.payload,
        success: true,
        error: null,
      };
    case PARVARIK_NIRDIKISHA_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        error: null,
      };
    case ALL_PARVARIK_NIRDIKISHA_GET_FAIL:
      return {
        ...state,
        loading: false,
        ParvarikNirdikisha: [],
        error: action.payload,
      };
    case PARVARIK_NIRDIKISHA_CREATE_FAIL:
    case PARVARIK_NIRDIKISHA_DELETE_FAIL:
    case PARVARIK_NIRDIKISHA_UPDATE_FAIL:
    case PARVARIK_NIRDIKISHA_DETAILS_GET_FAIL:
      // Handle ALL_PARVARIK_NIRDIKISHA_GET_FAIL
      return {
        ...state,
        loading: false,
        parvarikNirdikishaDetails: {},
        success: false,
        error: action.payload,
      };
    case PARVARIK_NIRDIKISHA_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    // Add cases for other action types similarly

    default:
      return state;
  }
};

export default parvarikNirdikishaReducer;
