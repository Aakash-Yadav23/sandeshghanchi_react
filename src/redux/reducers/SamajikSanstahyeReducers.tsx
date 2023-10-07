import {
  ALL_SAMAJIKSANSTHAYE_GET_REQUEST,
  ALL_SAMAJIKSANSTHAYE_GET_SUCCESS,
  ALL_SAMAJIKSANSTHAYE_GET_FAIL,
  SAMAJIKSANSTHAYE_GET_DETAILS_REQUEST,
  SAMAJIKSANSTHAYE_GET_DETAILS_SUCCESS,
  SAMAJIKSANSTHAYE_GET_DETAILS_FAIL,
  SAMAJIKSANSTHAYE_CREATE_REQUEST,
  SAMAJIKSANSTHAYE_CREATE_SUCCESS,
  SAMAJIKSANSTHAYE_CREATE_FAIL,
  SAMAJIKSANSTHAYE_UPDATE_REQUEST,
  SAMAJIKSANSTHAYE_UPDATE_SUCCESS,
  SAMAJIKSANSTHAYE_UPDATE_FAIL,
  SAMAJIKSANSTHAYE_DELETE_REQUEST,
  SAMAJIKSANSTHAYE_DELETE_SUCCESS,
  SAMAJIKSANSTHAYE_DELETE_FAIL,
  SAMAJIKSANSTHAYE_CLEAR_ERROR,
  
} from "../constants/SamajikSanstahye";

interface SamajikSansthayeState {
  loading: boolean;
  isAuthenticated: boolean;
  samajikSansthayeDetails: {};
  SamajikSansthaye: []; // Replace 'any' with appropriate SamajikSansthaye type
  error: any; // Replace 'any' with appropriate error type
}

const initialState: SamajikSansthayeState = {
  loading: false,
  isAuthenticated: false,
  SamajikSansthaye: [],
  samajikSansthayeDetails: {},
  error: null,
};

const SamajikSansthayeReducer = (
  state: SamajikSansthayeState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_SAMAJIKSANSTHAYE_GET_REQUEST:
    case SAMAJIKSANSTHAYE_CREATE_REQUEST:
    case SAMAJIKSANSTHAYE_DELETE_REQUEST:
    case SAMAJIKSANSTHAYE_GET_DETAILS_REQUEST:
    case SAMAJIKSANSTHAYE_UPDATE_REQUEST:
      // Handle ALL_SAGAYI_SAPAN_GET_REQUEST
      return {
        ...state,
        loading: true,
      };

    case ALL_SAMAJIKSANSTHAYE_GET_SUCCESS:
      // Handle ALL_SAGAYI_SAPAN_GET_SUCCESS
      return {
        ...state,
        loading: false,
        SamajikSansthaye: action.payload,
        error: null,
      };
    case SAMAJIKSANSTHAYE_CREATE_SUCCESS:
    case SAMAJIKSANSTHAYE_UPDATE_SUCCESS:
    case SAMAJIKSANSTHAYE_GET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        samajikSansthayeDetails: action.payload,
        success: true,
        error: null,
      };
    case SAMAJIKSANSTHAYE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        error: null,
      };
    case ALL_SAMAJIKSANSTHAYE_GET_FAIL:
      return {
        ...state,
        loading: false,
        SamajikSansthaye: [],
        error: action.payload,
      };
    case SAMAJIKSANSTHAYE_CREATE_FAIL:
    case SAMAJIKSANSTHAYE_DELETE_FAIL:
    case SAMAJIKSANSTHAYE_UPDATE_FAIL:
    case SAMAJIKSANSTHAYE_GET_DETAILS_FAIL:
      // Handle ALL_SAGAYI_SAPAN_GET_FAIL
      return {
        ...state,
        loading: false,
        samajikSansthayeDetails: {},
        success: false,
        error: action.payload,
      };
    case SAMAJIKSANSTHAYE_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    // Add cases for other action types similarly

    default:
      return state;
  }
};

export default SamajikSansthayeReducer;
