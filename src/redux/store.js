import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";
const redux = require('redux');
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);
export default store;
