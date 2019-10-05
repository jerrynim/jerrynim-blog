import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import post from "./post";

const reducer = combineReducers({
  post
});

const configureStore = (initialState, options) => {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};
export default configureStore;
