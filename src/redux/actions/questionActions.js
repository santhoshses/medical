import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const setQuestions = () => {
  return function(dispatch){
    axios.get("https://dummyjson.com/products").then(response=>{
      dispatch({
        type: ActionTypes.SET_QUESTIONS,
        payload: response.data.products,
      })
    }).catch(error=>{console.log(error)})
  }
  
};

export const setCourseDetails = () => {
  return function(dispatch){
    axios.get("https://hmqa.medacecin.in/learn/api/v1/course/list?courseType=TEST&prodCode=TP",{
      headers: {
        "Authorization" : "JWT "+localStorage.getItem("AccessToken")
      }
    }).then(response=>{
      dispatch({
        type: ActionTypes.SET_ACCESS_TOKEN,
        payload: response.data,
      })
    }).catch(error=>{console.log(error)})
  }
  
};

export const selectedQuestion = (question) => {
  return {
    type: ActionTypes.SELECTED_QUESTION,
    payload: question,
  };
};
