import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addPost from "./addPost";

const reducer = combineReducers({
  addPost
});

const configureStore = (initialState, options) => {
  const store = createStore(reducer, process.env.NODE_ENV === "production" ? null : composeWithDevTools());
  return store;
};
export default configureStore;
