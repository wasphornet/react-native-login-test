import { combineReducers } from "redux";

const initialStateAuth = {
  loading: false,
  isLoggedIn: false,
  message: null,
}

const AuthReducer = (state = initialStateAuth, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case "LOGOUT":
      // localStorage.clear();
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  auth: AuthReducer,
});
