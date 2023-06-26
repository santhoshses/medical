import React from "react";
import { styled } from "styled-components";
import {
  QuestionNotAnsweredSmall,
  QuestionAnsweredSmall,
  QuestionNotVisitedSmall,
  QuestionMarkedReviewSmall,
  QuestionAnsweredMarkedReviewSmall,
} from "../StyledIcons";

const QuestionSummaryComponent = ({questionStatusCount}) => {
  
  const GridContainer = styled.div`
    display: flex;
    height: 32vh;
    flex-direction: column;
    .img-wrapper > img{
      height: 10vh;
      margin: auto;
    }
  `;
  const GridRow = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid;
    flex: 1;

    flex: 1;
    &:nth-child(1) {
      flex: 2;
    }
  `;
  const GridCell = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 12px;
      position: relative;
      margin:0;
    }
    &:nth-child(1) {
      border-right: 1px solid;
    }
  `;
  return (
    <GridContainer>
      <GridRow>
        <GridCell className="img-wrapper">
          <img src='/images/Unsplash.png' alt='no-img' className="img-wrapper" />          
        </GridCell>
        <GridCell>Narendranath</GridCell>
      </GridRow>
      <GridRow>
        <GridCell>
          <QuestionAnsweredSmall>
            <span className="text">{questionStatusCount.questionAnswered}</span>
          </QuestionAnsweredSmall>
          <p>Answered</p>
        </GridCell>
        <GridCell>
          <QuestionNotAnsweredSmall>
            <span className="text">{questionStatusCount.questionNotAnswered}</span>
          </QuestionNotAnsweredSmall>
          <p>NotAnswered</p>
        </GridCell>
      </GridRow>
      <GridRow>
        <GridCell>
          <QuestionNotVisitedSmall>
            <span className="text">{questionStatusCount.questionNotVisited}</span>
          </QuestionNotVisitedSmall>
          <p>Not Visited</p>
        </GridCell>
        <GridCell>
          <QuestionMarkedReviewSmall>
            <span className="text">{questionStatusCount.questionMarkedReview}</span>
          </QuestionMarkedReviewSmall>
          <p>Marked for Review</p>
        </GridCell>
      </GridRow>
      <GridRow>
        <GridCell style={{ border: "0px" }}>
          <QuestionAnsweredMarkedReviewSmall style={{display: "flex"}}>
            <span className="text">{questionStatusCount.questionAnsweredMarkedReview}</span>
          </QuestionAnsweredMarkedReviewSmall>
          <p style={{display: "flex",flex:5,marginLeft:"5px"}}>Answered & Marked for Review (will NOT be considered for evaluation</p>
        </GridCell>
      </GridRow>
    </GridContainer>
  );
};
export default QuestionSummaryComponent;
