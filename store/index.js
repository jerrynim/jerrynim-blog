import { combineReducers } from "redux";
import counter from "./counter";
import tech from "./tech";
import project from "./project";

const rootReducer = combineReducers({
  counter,
  tech,
  project
});

export default rootReducer;
