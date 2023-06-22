import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import QuestionSelectorContainer from "./QuestionSelectorContainer";
import { setQuestions } from "../redux/actions/questionActions";
import { useParams } from "react-router-dom";

import QuestionSummaryComponent from "../components/QuestionSummaryComponent";
import QuestionSectionComponent from "../components/QuestionSectionComponent";
import HeaderContainer from "./HeaderContainer";

import FooterComponent from "../components/FooterComponent";
const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Article = styled.article`
  flex: 1;
`;
const Aside = styled.aside`
  flex: 0 0 24vw;
  /* height: 84vh;
  overflow: auto; */
  border-left: 1px solid;
  .questionGridHeader {
    background: #4e85c5;
    height: 40px;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    padding-left: 15px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    margin: 15px 0 0 15px;
  }
`;


const Footer = styled.footer`
  /**Any style for footer wrapper level can be applied here */
`;

const QuestionContainer = () => {
  let { questionId } = useParams();
  const storeData = useSelector((state) => state);
  const [currentQuestion, setcurrentQuestion] = useState(questionId);
  const { questions } = storeData["allQuestions"];
  console.log(questions)
  const dispatch = useDispatch();
  const fetchQuestions = async () => {
    dispatch(setQuestions());
  };

  useEffect(() => {
    fetchQuestions();
    return () => {};
  }, []);
  useEffect(() => {
    setcurrentQuestion(storeData["allQuestions"].question);
  }, [storeData]);

  return (
    <PageWrapper>
    <HeaderContainer />
      <MainWrapper>
        <Article>
          <QuestionSectionComponent question={currentQuestion} />
        </Article>
        <Aside>
          <div className="summary-grid-wrapper">
            <QuestionSummaryComponent question={currentQuestion} />
          </div>
          <div className="questionGridHeader">All Questions</div>
          <p>Choose a Question</p>
          <QuestionSelectorContainer allQuestions={questions} />
        </Aside>
      </MainWrapper>
      <Footer>
          <FooterComponent />
      </Footer>
    </PageWrapper>
  );
};
export default QuestionContainer;
