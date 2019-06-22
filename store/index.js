import { combineReducers } from "redux";
import counter from "./counter";
import tech from "./tech";

const rootReducer = combineReducers({
  counter,
  tech
});

export default rootReducer;
