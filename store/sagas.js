import { all } from "redux-saga/effects";
import loginScreenSaga from "../screens/Login/saga";

function* rootSaga() {
  yield all([
    loginScreenSaga()
  ]);
}

export default rootSaga;
