import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";

import { Outlet, Link } from "react-router-dom";
// import { selectedQuestion } from "../redux/actions/courseActions";
import { getQuestionStatus } from "../util";

const QuestionSelectorComponent = ({ question, selectedQuestionId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedQuestionId == question.id) {
      // dispatch(selectedQuestion(question));
    }
  }, []);
 
  return (
    <div className="grid-item">
      <div className="grid-item-wrapper">
        <Link
          // onClick={() => dispatch(selectedQuestion(question))}
          style={{ textDecoration: "none" }}
          to={`/question/${question.qid}`}
        >
          {getQuestionStatus(question)}
        </Link>
      </div>
    </div>
  );
};
export default QuestionSelectorComponent;
