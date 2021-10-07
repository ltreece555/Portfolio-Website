import { combineReducers } from "redux";
import colorPalleteReducer from "./colorPallete";
import mobileReducer from "./mobile";
import scrollHeightReducer from "./scrollHeight";
import startUpReducer from "./startUp";

const allReducers = combineReducers({
  colorPallete: colorPalleteReducer,
  scrollHeight: scrollHeightReducer,
  startUp: startUpReducer,
  mobile: mobileReducer,
});

export default allReducers;
