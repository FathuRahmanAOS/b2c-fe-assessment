// create reducer here with initialState from selectors.js
// create initialState here
import * as ActionType from "./constants";

const INIT_STATE = {
  widgetData:[]
};

const WidgetReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_WIDGET_REQUEST:
      return {
        ...state,
      };
    case ActionType.GET_WIDGET_SUCCEED:
      return applyGetWidgetSucceed(state, action);

    default:
      return state;
  }
};

const applyGetWidgetSucceed = (state, action) => {
  let result = action.payload
  console.log('ini sedang di reducers',result);
  return {
    ...state,
    widgetData: result,
  };
};

export default WidgetReducer;