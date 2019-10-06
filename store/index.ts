import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addPost from "./addPost";

const reducer = combineReducers({
  addPost
});

const configureStore = (initialState, options) => {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};
export default configureStore;
