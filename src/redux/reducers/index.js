import { combineReducers } from "redux";
import { questionReducer } from "./QuestionReducer";
import { courseReducer } from "./CourseReducer";

const reducers = combineReducers({
  allQuestions: questionReducer,
  testDetails:courseReducer
});

export default reducers;
