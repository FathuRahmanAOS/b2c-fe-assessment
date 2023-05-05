// create action function here
import * as ActionType from "./constants";

//CRITERIA
export const doGetWidgetRequest = (payload) => ({
  type: ActionType.GET_WIDGET_REQUEST,
  payload,
});

export const doGetWidgetSucceed = (payload) => ({
  type: ActionType.GET_WIDGET_SUCCEED,
  payload,
});

export const doGetWidgetFailed = (payload) => ({
  type: ActionType.GET_WIDGET_FAILED,   
  payload,
});
