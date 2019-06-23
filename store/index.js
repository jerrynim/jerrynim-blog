import { combineReducers } from "redux";
import counter from "./counter";
import tech from "./tech";
import project from "./project";
import sendmail from "./sendmail";

const rootReducer = combineReducers({
  counter,
  tech,
  project,
  sendmail
});

export default rootReducer;
