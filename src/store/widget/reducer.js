// create reducer here with initialState from selectors.js
// create initialState here
import * as ActionType from "./constants";
import { combineReducers } from "redux";

const INIT_STATE = {
  widgetData: [],
  cupon: [],
  event_product: [],
  shortcut: [],
  promo: [],
  banner: [],
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
  let result = action.payload;

  console.log("ini sedang di reducers", result);
  let shortcut = action.payload.data.filter((item) => item.type === "shortcut");

  let result1 = action.payload.data[5].detail;
  let event_product = action.payload.data.filter(
    (item) => item.type === "event_product"
  );

  let promo = action.payload.data.filter((item) => item.type === "promo");
  let banner = action.payload.data.filter((item) => item.type === "banner");

  return {
    ...state,
    widgetData: result,
    shortcut: shortcut,
    cupon: result1,
    event_product: event_product,
    banner: banner,
  };
};

const rootReducer = combineReducers({
  widgetState: WidgetReducer,
});

export default rootReducer;
