import { ActionTypes } from "../constants/action-types";

const initialState = {
  accessToken: "",
  refreshToken: "",
};
export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACCESS_TOKEN:
      return { ...state, accessToken: payload };
    case ActionTypes.SET_REFRESH_TOKEN:
      return { ...state, refreshToken: payload };

    default:
      return state;
  }
};
