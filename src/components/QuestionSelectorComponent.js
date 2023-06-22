import React,{useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import { styled } from "styled-components";

import { Outlet, Link } from "react-router-dom";
import { selectedQuestion } from "../redux/actions/questionActions";
import { QuestionNotAnswered, QuestionAnswered, QuestionNotVisited, QuestionMarkedReview, QuestionAnsweredMarkedReview } from "../StyledIcons";

const QuestionSelectorComponent = ({ question, selectedQuestionId }) => {
  const dispatch = useDispatch();
 
useEffect(() => {
  if(selectedQuestionId == question.id){
    dispatch(selectedQuestion(question))
  }
  
}, []);
  const getStatus = () => {

    switch (question.category) {
      case "smartphones":
        return(
          <QuestionNotAnswered className="question-badge">
            {question.id}
          </QuestionNotAnswered>
        );
      case "skincare":
        return (
          <QuestionAnswered className="question-badge">
            {question.id}
          </QuestionAnswered>
        );
      case "fragrances":
        return (
          <QuestionNotVisited className="question-badge">
            {question.id}
          </QuestionNotVisited>
        );
      case "laptops":
        return (
          <QuestionAnsweredMarkedReview className="question-badge">
            {question.id}
          </QuestionAnsweredMarkedReview>
        );
      case "groceries":
        return (
          <QuestionMarkedReview className="question-badge">
            {question.id}
          </QuestionMarkedReview>
        );

      default:
        break;
    }
  };
  return (
    <div className="grid-item">
      <div className="grid-item-wrapper">
        <Link onClick={()=>dispatch(selectedQuestion(question))} style={{ textDecoration: 'none' }} to={`/question/${question.id}`}>{getStatus()}</Link>
        </div>
    </div>
  );
};
export default QuestionSelectorComponent;
