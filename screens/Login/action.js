export const loginUser = (user) => ({
  type: "LOGIN_REQUEST",
  payload: user,
});

export const setLoggedIn = (isLoggedIn) => ({
    type: "SET_LOGGED_IN",
    payload: {isLoggedIn},
});

export const logout = () => ({
    type: "LOGOUT",
    payload: {
        isLoggedIn: false,
        message: null,
    },
});