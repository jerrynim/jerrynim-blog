import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addPost from "./addPost";

const reducer = combineReducers({
  addPost
});

const configureStore = () => {
  if (process.env.NODE_ENV === "production") {
    const store = createStore(reducer);
    return store;
  }
  const store = createStore(reducer, composeWithDevTools());
  return store;
};
export default configureStore;
