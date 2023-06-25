import { combineReducers } from "redux";
import { courseReducer } from "./CourseReducer";
import { loginReducer } from "./LoginReducer";
const reducers = combineReducers({
  testDetails:courseReducer,
  authDetails:loginReducer
});

export default reducers;
