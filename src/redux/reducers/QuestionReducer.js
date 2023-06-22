import { ActionTypes } from "../constants/action-types";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Who is the captain of Indian team?",
      options: ["Dhoni", "Gill", "John"],
    },
  ],
};
export const questionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_QUESTIONS:
      return {...state,questions:payload};
      case ActionTypes.SELECTED_QUESTION:
        return {...state,question:payload};

    default:
      return state;
  }
};
