import { Dispatch } from "react";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/UserConstants";
import axios, { AxiosResponse } from "axios";
import API_URL from "../../url";
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'universal-cookie';

interface UserData {
  email: string;
  password: string;
}
interface registerData {
  email: string;
  password: string;
  fullName: string;
  // Define your form structure for forgot password
}
interface UserNewData {
  // Define your user data structure for updating profile
}

interface Passwords {
  // Define your passwords structure for updating password
}

interface MyForm {
  // Define your form structure for forgot password
}

interface UserDetails {
  // Define your user details structure
}
const setCookie = (name: string, value: any, days: any) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};




export const login =
  (email: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const requestData = {
        email: email,
        password: password,
      };
      const config = { headers: { "Content-Type": "application/json" } };
      const { data }: AxiosResponse = await axios.post(
        `${API_URL}/api/v1/login`,
        requestData,
        config
      );

      const token = data.id;

      // Set the token in a cookie
      setCookie("token", token, 7); //

      dispatch({ type: LOGIN_SUCCESS, payload: data });
      toast.success("login success");
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: LOGIN_FAIL, payload: errorMessage });
      if (errorMessage === "User Not Found" || "Invalid Credentials") {
        toast.error("Invalid User or Password");
      } else {
        toast.error("Login Failed");
      }
    }
  };

export const register =
  (fullName: string, email: string, password: string) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      console.log("Userdata", email, password, fullName);

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const requestData = {
        fullName: fullName,
        email: email,
        password: password,
      };

      const response = await fetch(`${API_URL}/api/v1/register`, {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      const token = data.id;

      // Set the token in a cookie
      setCookie("token", token, 7);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      toast.success("Registration successful");
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      if (errorMessage === "User already exists") {
        toast.error("User already exists");
      } else {
        toast.error("Registration Failed");
      }

      dispatch({ type: REGISTER_USER_FAIL, payload: errorMessage });
    }
  };

// Load User
export const loadUser = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const cookies = new Cookies();
    const token = cookies.get('token');

    const requestBody = {
      token: token
    };

    const { data }: AxiosResponse = await axios.post(`${API_URL}/api/v1/me`, requestBody);


    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error: any) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: LOAD_USER_FAIL, payload: errorMessage });
  }
};

// Logout User
export const logout = () => async (dispatch: Dispatch<any>) => {
  try {
    await axios.get(`${API_URL}/api/v1/logout`);
    const cookies = new Cookies();
    cookies.remove("token");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error: any) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: LOGOUT_FAIL, payload: errorMessage });
  }
};

// updateProfile
export const updateProfile =
  (userNewData: UserNewData) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data }: AxiosResponse = await axios.put(
        `${API_URL}/api/v1/upd/profile`,
        userNewData,
        config
      );

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: errorMessage,
      });
    }
  };

// get All Users
export const getAllUsers = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data }: AxiosResponse = await axios.get(
      `${API_URL}/api/v1/admin/users`
    );
    console.log("users", data);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data.Users });
  } catch (error: any) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: ALL_USERS_FAIL, payload: errorMessage });
  }
};

// get User Details
export const getUserDetails =
  (id: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const { data }: AxiosResponse = await axios.get(
        `${API_URL}/api/v1/admin/user/${id}`
      );

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.User });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: USER_DETAILS_FAIL, payload: errorMessage });
    }
  };

// Update User
export const updateUser =
  (id: string, userData: UserData) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data }: AxiosResponse = await axios.put(
        `${API_URL}/api/v1/admin/user/${id}`,
        userData,
        config
      );

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: UPDATE_USER_FAIL,
        payload: errorMessage,
      });
    }
  };

// Delete User
export const deleteUser = (id: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data }: AxiosResponse = await axios.delete(
      `${API_URL}/api/v1/admin/user/${id}`
    );

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error: any) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: DELETE_USER_FAIL,
      payload: errorMessage,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: CLEAR_ERRORS });
};

// updatePassword
export const updatePassword =
  (passwords: Passwords) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      console.log("passwords", passwords);
      const { data }: AxiosResponse = await axios.put(
        `${API_URL}/api/v1/upd/pass`,
        passwords,
        config
      );

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: errorMessage,
      });
    }
  };

// forgotPassword
export const forgotPassword =
  (myForm: MyForm) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      console.log("userEmail", myForm);
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data }: AxiosResponse = await axios.post(
        `${API_URL}/api/v1/password/forgot`,
        myForm,
        config
      );

      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: errorMessage,
      });
    }
  };

// resetPassword
export const resetPassword =
  (token: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      console.log("Token", token, "password", password);
      const config = { headers: { "Content-Type": "application/json" } };

      // const { data } = await axios.put(`/api/v1/password/reset/${token}`, password, config);
      const { data }: AxiosResponse = await axios.put(
        `${API_URL}/api/v1/password/reset/${token}`,
        { password },
        config
      );

      console.log("data", data, data?.success);
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data?.success || true,
      });
    } catch (error: any) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: errorMessage,
      });
    }
  };
