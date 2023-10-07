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

interface NewsState {
  loading: boolean;
  News: [];
  NewsDetails: {};
  resultPerPage:null,
  newsCount:null,
  error: null;
}

interface CreateNewsState extends NewsState {
  NewsCreated: boolean;
}

interface GetNewsDetailsState extends NewsState {}

interface DeleteNewsDetailsState extends NewsState {
  deleted: boolean;
}

interface UpdateNewsDetailsState extends NewsState {
  success: boolean;
}

const initialState: NewsState = {
  loading: false,
  News: [],
  resultPerPage:null,
  newsCount:null,
  NewsDetails: {},
  error: null,
};

const initialStateCreateNews: CreateNewsState = {
  loading: false,
  News: [],
  NewsDetails: {},
  error: null,
  NewsCreated: false,
  resultPerPage:null,
  newsCount:null,
};

const initialStateUpdateNews: UpdateNewsDetailsState = {
  loading: false,
  News: [],
  NewsDetails: {},
  error: null,
  success: false,
  resultPerPage:null,
  newsCount:null,
};

const initialStateDeleteNews: DeleteNewsDetailsState = {
  loading: false,
  News: [],
  NewsDetails: {},
  error: null,
  deleted: false,
  resultPerPage:null,
  newsCount:null,
};

const initialStateGetNewsDetails: GetNewsDetailsState = {
  loading: false,
  News: [],
  NewsDetails: {},
  error: null,
  resultPerPage:null,
  newsCount:null,
};

export const AllNewsDetailsGetReducer = (
  state: NewsState = initialState,
  action: any
) => {
  switch (action.type) {
    case ALL_NEWS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_NEWS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        News: action.payload.news,
        resultPerPage:action.payload.resultPerPage,
  newsCount:action.payload.newsCount,
        error: null,
      };

    case ALL_NEWS_GET_FAIL:
      return {
        ...state,
        loading: false,
        News: null,
        error: action.payload,
      };
    case NEWS_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const NewsDetailsGetReducer = (
  state: GetNewsDetailsState = initialStateGetNewsDetails,
  action: any
) => {
  switch (action.type) {
    case NEWS_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        NEWSDetails: action.payload,
        error: null,
      };

    case NEWS_DETAILS_GET_FAIL:
      return {
        ...state,
        loading: false,
        NEWSDetails: null,
        error: action.payload,
      };
    case NEWS_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const NewsCreateReducer = (
  state: CreateNewsState = initialStateCreateNews,
  action: any
) => {
  switch (action.type) {
    case NEWS_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        NewsDetails: action.payload,
        NewsCreated: true,
      };

    case NEWS_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEWS_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const NewsUpdateDetailsReducer = (
  state: UpdateNewsDetailsState = initialStateUpdateNews,
  action: any
) => {
  switch (action.type) {
    case NEWS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        NewsDetails: action.payload,
        success: true,
      };

    case NEWS_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEWS_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const NewsDeleteDetailsReducer = (
  state: DeleteNewsDetailsState = initialStateDeleteNews,
  action: any
) => {
  switch (action.type) {
    case NEWS_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEWS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleted: true,
      };

    case NEWS_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEWS_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
