// define sagas function here
import { call, put } from "redux-saga/effects";

import apiWidget from "../../services/api/widget";
import { doGetWidgetSucceed, doGetWidgetFailed } from "./actions";

import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeWidget from "./constants";

function* handleGetWidget(action) {
  const { payload } = action;
  try {
    const result = yield call(apiWidget.getWidgetData, payload);
    console.log("ini sedang di sagas ", result);
    yield put(doGetWidgetSucceed(result));
  } catch (error) {
    yield put(doGetWidgetFailed(error));
  }
}

function *watchAll(){
    yield all([
        takeEvery(ActionTypeWidget.GET_WIDGET_REQUEST,handleGetWidget),
    ])  
}

export default watchAll;
