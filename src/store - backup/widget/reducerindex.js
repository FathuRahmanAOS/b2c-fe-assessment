import { combineReducers } from "redux";
import WidgetReducer from "./reducer";

const rootReducer = combineReducers({
    widgetState : WidgetReducer,
})

export default rootReducer