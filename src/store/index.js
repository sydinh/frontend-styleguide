import { createStore, combineReducers } from "redux";
import literals from "./literals.js";

const rootReducer = combineReducers({
  literals
  // other reducers...
});

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
