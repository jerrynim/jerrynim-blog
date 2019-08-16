import { put, takeEvery } from "redux-saga/effects";

export function* getAsync() {
  try {
    const fetched = yield fetch("http://localhost:3000/api/hello").then(
      response => response.json()
    );
    yield put({ type: "user/CREATE_USER", data: fetched });
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  //TRIGGER_CREATE_USER 발생시마다 getAsync를 실행할 것이다.

  yield takeEvery("user/TRRIGER_CREATE_USER", getAsync);
  //yield all[helper함수들]
}
