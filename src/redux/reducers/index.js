import { combineReducers } from "redux";
import { courseReducer } from "./CourseReducer";

const reducers = combineReducers({
  testDetails:courseReducer
});

export default reducers;
