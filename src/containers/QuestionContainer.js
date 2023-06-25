import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import QuestionSelectorContainer from "./QuestionSelectorContainer";
import {
  fetchQuestionSummary,
  getCurrentQuestion,
  saveCurrentQuestion,
  submitCurrentTest,
  getAllQuestion
} from "../redux/actions/courseActions";
import { useParams } from "react-router-dom";

import QuestionSummaryComponent from "../components/QuestionSummaryComponent";
import QuestionSectionComponent from "../components/QuestionSectionComponent";
import HeaderContainer from "./HeaderContainer";
import { getQuestionStatusCount } from "../util";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [questionStatusCount, setQuestionStatusCount] = React.useState({});
  const [answerVal, setAnswerVal] = React.useState("");
  const [markGuess, setMarkGuess] = React.useState(false);

  const storeTestData = useSelector((state) => state?.testDetails);
  const accessTokenData = useSelector(
    (state) => state?.authDetails.accessToken
  );
  const storeCurrentQuestion = useSelector(
    (state) => state?.testDetails.currentQuestion
  );
  const testData = storeTestData?.courseTestDetail?.testTopics;
  const courseSummaryData = storeTestData?.courseSummaryData;

  let topicData;
  if (testData?.topics && testData.topics.length) {
    topicData = testData.topics[0];
  }
  const [currentQuestion, setcurrentQuestion] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if(topicData){
      // navigate("/home");
      dispatch(fetchQuestionSummary(topicData.id, topicData.progress.id));
      setQuestionStatusCount(getQuestionStatusCount(courseSummaryData));
      dispatch(
        getCurrentQuestion(topicData.id, topicData.progress.id, topicData.qid)
      );
      dispatch(getAllQuestion(topicData.id, topicData.progress.id, topicData.qid));
      const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue =
          "Data will be lost if you leave the page, are you sure?";
        return "";
      };
      window.addEventListener("beforeunload", unloadCallback);
  
      return () => {
        window.removeEventListener("beforeunload", unloadCallback);
      };
    }
   
  }, []);

  useEffect(() => {
    setQuestionStatusCount(
      getQuestionStatusCount(storeTestData?.courseSummaryData)
    );
    if (storeTestData.currentQuestion && storeTestData.currentQuestion.length) {
      setcurrentQuestion(storeTestData.currentQuestion[0]);
    }
  }, [storeTestData]);

  useEffect(() => {
    clearCallBack();
    setTimeout(() => {
      setAnswerVal(currentQuestion.userAnswer);
      setMarkGuess(currentQuestion.guess);
    }, 1000);
  }, [currentQuestion]);

  useEffect(() => {
    setTimeout(() => {
      if(topicData){
        dispatch(
          getCurrentQuestion(topicData.id, topicData.progress.id, questionId)
        );
        dispatch(fetchQuestionSummary(topicData.id, topicData.progress.id));
      }
      else{
        navigate('/home')
      }
     
    }, 500);
  }, [questionId]);

  useEffect(() => {
    if (accessTokenData) {
      localStorage.setItem("AccessToken", accessTokenData);
    }
  }, [accessTokenData]);

  const updateAnswer = (ev) => {
    if (ev.target.type == "radio") {
      setAnswerVal(ev.target.value);
    } else {
      setMarkGuess(ev.target.checked);
    }
  };
  const clearCallBack = (ev) => {
    setAnswerVal("");
    setMarkGuess(false);
  };
  const submitTest = () => {
    dispatch(submitCurrentTest(topicData.id, topicData.progress.id));
  };
  const saveNextQuestion = (marked_review = false) => {
    const pblockid = courseSummaryData[questionId - 1].pblockid;
    const nextQuestionId = parseInt(questionId) + 1;
    let data = {
      is_guessed: markGuess,
      is_marked_view: marked_review,
      is_skip: answerVal ? false : true,
      answer: answerVal,
    };
    dispatch(
      saveCurrentQuestion(
        pblockid,
        storeTestData?.courseTestDetail?.courseId,
        data
      )
    );
    // clearCallBack();
    navigate("/question/" + nextQuestionId);
  };
  return (
    <PageWrapper>
      <HeaderContainer />
      <MainWrapper>
        <Article>
          {currentQuestion && currentQuestion.qid && (
            <QuestionSectionComponent
              handleAnswerChange={updateAnswer}
              question={currentQuestion}
              answerVal={answerVal}
              markGuess={markGuess}
            />
          )}
        </Article>
        <Aside>
          <div className="summary-grid-wrapper">
            {questionStatusCount && (
              <QuestionSummaryComponent
                questionStatusCount={questionStatusCount}
              />
            )}
          </div>
          <div className="questionGridHeader">All Questions</div>
          <p>Choose a Question</p>
          {courseSummaryData && (
            <QuestionSelectorContainer
              savecallBack={saveNextQuestion}
              allQuestions={courseSummaryData}
            />
          )}
        </Aside>
      </MainWrapper>
      <Footer>
        <FooterComponent
          savecallBack={saveNextQuestion}
          clearCallBack={clearCallBack}
          submitTestCallBack={submitTest}
          questionStatusCount={questionStatusCount}
        />
      </Footer>
    </PageWrapper>
  );
};
export default QuestionContainer;
