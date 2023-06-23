import React from "react";
import { useSelector } from "react-redux";
import QuestionSelectorComponent from "../components/QuestionSelectorComponent";
import { useParams } from "react-router-dom";

const QuestionSelectorContainer = ({allQuestions}) => {
  let { questionId } = useParams();
  return (
    <div style={{ maxHeight: "35vh", overflow: "auto"}} className="question-selector-container">
      <div className="grid-row">
      {allQuestions?.map(question=>(<QuestionSelectorComponent key={question.qid} selectedQuestionId={questionId} question={question}/>))}
      </div>
    </div>
  );
};
export default QuestionSelectorContainer;
