import { combineReducers } from "redux";
import { questionReducer } from "./QuestionReducer";
import { userReducer } from "./UserReducer";

const reducers = combineReducers({
  allQuestions: questionReducer,
  userData:userReducer
});

export default reducers;
