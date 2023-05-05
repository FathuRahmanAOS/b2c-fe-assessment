// define sagas function here
import {
    call,
    put,
  } from "redux-saga/effects";
  
  import apiWidget from "../../services/api/widget";
  import {
    doGetWidgetSucceed,
    doGetWidgetFailed,
  } from "./actions";
  
  function* handleGetWidget(action) {
    const { payload } = action;
    try {
      const result = yield call(apiWidget.getWidgetData, payload);
      console.log('ini sedang di sagas ',result);
      yield put(doGetWidgetSucceed(result));
    } catch (error) {
      yield put(doGetWidgetFailed(error));
    }
  }
    
  export { handleGetWidget};
