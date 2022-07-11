import { put, takeLatest } from "redux-saga/effects";

function* loginUser({payload}) {
  try {
    const { username, password } = payload;
    if (username === "test@test.com" && password === "12345678") {
      // localStorage.setItem("isLoggedIn", true);
      yield put({
        type: "LOGIN_SUCCESS",
        payload: {
          isLoggedIn: true,
          message: "Login success",
        },
      });
    } else {
      yield put({
        type: "LOGIN_FAILURE",
        payload: {
          isLoggedIn: false,
          message: "Username or password is incorrect",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "LOGIN_FAILURE",
      payload: {
        isLoggedIn: false,
        message: "Login failed",
      },
    });
  }
}
export default function* loginScreenSaga() {
  yield takeLatest("LOGIN_REQUEST", loginUser);
}
