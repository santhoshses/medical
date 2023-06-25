import { ActionTypes } from "../constants/action-types";

const initialState = {
  courseTestDetail: {},
  courseSummaryData: [],
  currentQuestion: [],
  testSubmitStatus:false,
  allQuestions:[]
};
export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COURSE_TEST_DETAILS:
      return { ...state, courseTestDetail: payload };
    case ActionTypes.SET_QUESTION_SUMMARY:
      return { ...state, courseSummaryData: payload };
    case ActionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: payload };
    case ActionTypes.TEST_SUBMIT_STATUS:
      return { ...state, testSubmitStatus: payload };
      case ActionTypes.SET_ALL_QUESTION:
        return { ...state, allQuestions: payload };
      

    default:
      return state;
  }
};
