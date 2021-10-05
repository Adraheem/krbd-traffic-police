import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";

export const loginUser = (token) => (dispatch) => {
  localStorage.setItem("jwtToken", token);

  // Set token to Auth header
  setAuthToken(token);

  // Decode token to get user data
  const decoded = jwt_decode(token);

  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

export const logoutUser = () => (dispatch) => {
  if (localStorage.jwtToken) {
    localStorage.removeItem("jwtToken");
  }
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
};
