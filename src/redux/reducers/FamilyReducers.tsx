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
  FAMILY_CLEAR_ERRORS,
} from "../constants/Family";

interface FamilyState {
  loading: boolean;
  families: [];
  familyDetails: {};
  error: null;
}

interface CreateFamilyState extends FamilyState {
  familyCreated: boolean;
}

interface GetFamilyDetailsState extends FamilyState {}

interface DeleteFamilyDetailsState extends FamilyState {
  deleted: boolean;
}

interface UpdateFamilyDetailsState extends FamilyState {
  success: boolean;
}

const initialState: FamilyState = {
  loading: false,
  families: [],
  familyDetails: {},
  error: null,
};

const initialStateCreateFamily: CreateFamilyState = {
  loading: false,
  families: [],
  familyDetails: {},
  error: null,
  familyCreated: false,
};

const initialStateUpdateFamily: UpdateFamilyDetailsState = {
  loading: false,
  families: [],
  familyDetails: {},
  error: null,
  success: false,
};

const initialStateDeleteFamily: DeleteFamilyDetailsState = {
  loading: false,
  families: [],
  familyDetails: {},
  error: null,
  deleted: false,
};

const initialStateGetFamilyDetails: GetFamilyDetailsState = {
  loading: false,
  families: [],
  familyDetails: {},
  error: null,
};

export const ALlFamilyDetailsGetReducer = (
  state: FamilyState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_FAMILY_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_FAMILY_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        families: action.payload,
        error: null,
      };

    case ALL_FAMILY_GET_FAIL:
      return {
        ...state,
        loading: false,
        families: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const familyDetailsGetReducer = (
  state: GetFamilyDetailsState = initialStateGetFamilyDetails,
  action: any
) => {
  switch (action.type) {
    case FAMILY_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAMILY_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        familyDetails: action.payload,
        error: null,
      };

    case FAMILY_DETAILS_GET_FAIL:
      return {
        ...state,
        loading: false,
        familyDetails: null,
        error: action.payload,
      };
      case FAMILY_CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
    default:
      return state;
  }
};

export const familyCreateReducer = (
  state: CreateFamilyState = initialStateCreateFamily,
  action: any
) => {
  switch (action.type) {
    case FAMILY_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAMILY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        familyDetails: action.payload,
        familyCreated: true,
      };

    case FAMILY_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case FAMILY_CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
    default:
      return state;
  }
};

export const familyUpdateDetailsReducer = (
  state: UpdateFamilyDetailsState = initialStateUpdateFamily,
  action: any
) => {
  switch (action.type) {
    case FAMILY_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAMILY_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        familyDetails: action.payload,
        success: true,
      };

    case FAMILY_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case FAMILY_CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
    default:
      return state;
  }
};

export const familyDeleteDetailsReducer = (
  state: DeleteFamilyDetailsState = initialStateDeleteFamily,
  action: any
) => {
  switch (action.type) {
    case FAMILY_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAMILY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleted: true,
      };

    case FAMILY_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FAMILY_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
