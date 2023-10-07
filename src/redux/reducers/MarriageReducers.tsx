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

interface MarriageState {
  loading: boolean;
  isAuthenticated: boolean;
  marriages: [];
  marriageDetails: any; // Replace 'any' with appropriate Marriage type
  error: any; // Replace 'any' with appropriate error type
}

const initialState: MarriageState = {
  loading: false,
  isAuthenticated: false,
  marriages: [],
  marriageDetails: {},
  error: null,
};

const marriageReducer = (state: MarriageState = initialState, action: any) => {
  switch (action.type) {
    case ALL_MARRIAGE_GET_REQUEST:
    case MARRIAGE_GET_DETAILS_REQUEST:
    case MARRIAGE_CREATE_REQUEST:
    case MARRIAGE_UPDATE_REQUEST:
    case MARRIAGE_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ALL_MARRIAGE_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        marriages: action.payload,
        error: null,
      };
    case MARRIAGE_GET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        marriageDetails: action.payload,
        error: null,
      };
    case MARRIAGE_CREATE_SUCCESS:
    case MARRIAGE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        marriageDetails: action.payload.marriage,
        error: null,
        success: action.payload.success,
      };

    case MARRIAGE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        error: null,
      };
    case ALL_MARRIAGE_GET_FAIL:
    case MARRIAGE_GET_DETAILS_FAIL:
    case MARRIAGE_CREATE_FAIL:
    case MARRIAGE_UPDATE_FAIL:
    case MARRIAGE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case MARRIAGE_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default marriageReducer;
