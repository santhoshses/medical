import { styled } from "styled-components";
import questionImg from "./assets/png/question-selector.png";

export const QuestionNotAnswered = styled.div`
  width: 54px;
  height: 53px;
  background: url(${questionImg}) -54px 0;
`;
export const QuestionAnswered = styled.div`
  width: 55px;
  height: 53px;
  background: url(${questionImg}) 0 0;
`;
export const QuestionNotVisited = styled.div`
  width: 50px;
  height: 52px;
  background: url(${questionImg}) -157px 0;
  color: #000000;
`;

export const QuestionMarkedReview = styled.div`
  width: 54px;
  height: 52px;
  background: url(${questionImg}) -106px 0;
`;

export const QuestionAnsweredMarkedReview = styled.div`
  width: 54px;
  height: 53px;
  background: url(${questionImg}) -63px 54px;
`;

/**Small Icons */

export const QuestionNotAnsweredSmall = styled.div`
  width: 39px;
  height: 35px;
  background: url(${questionImg}) -36px -52px;

  .text {
    font-family: "Times";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8px;

  }
`;
export const QuestionAnsweredSmall = styled.div`
  width: 42px;
  height: 33px;
  background: url(${questionImg}) 0px -52px;
  .text {
    font-family: "Times";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8px;
    
  }
`;
export const QuestionNotVisitedSmall = styled.div`
  width: 38px;
  height: 35px;
  background: url(${questionImg}) -103px -51px;
  .text {
    font-family: "Times";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8px;
  }
`;

export const QuestionMarkedReviewSmall = styled.div`
  width: 37px;
  height: 35px;
  background: url(${questionImg}) -71px -51px;
  .text {
    font-family: "Times";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8px;
  }
`;

export const QuestionAnsweredMarkedReviewSmall = styled.div`
  width: 37px;
  height: 35px;
  background: url(${questionImg}) -1px -81px;
  .text {
    font-family: "Times";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    position: relative;
    left:12px;
    top:12px;
    
  }
`;
