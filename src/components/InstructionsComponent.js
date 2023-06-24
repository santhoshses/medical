import { styled } from "styled-components";
import { QuestionNotVisitedSmall, QuestionNotAnsweredSmall, QuestionAnsweredSmall, QuestionMarkedReviewSmall, QuestionAnsweredMarkedReviewSmall } from "../StyledIcons";

const StyledInstructionsContent = styled.div`
  padding: 1em;
  p, div>ol>li, div>ol>li>div, div>ol>li>div>span, div>ol>li>ul>li {
    font-family: 'Times';
    font-style: normal;
    font-size: 16px;
  }
  .note {
    font-weight: 600;
    font-size: 14px;
    color: #ff0000;
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
  .table-wrapper {
    max-height: 55vh;
    overflow: auto;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    text-decoration: underline;
  }
  .font-sub-heading {
    font-size: 18px;
    text-align: center;
  }
  .icon-container {
    display: flex;
  }
  .txt-red {
    color: #FF0000
  }
  .instruction-wrapper{
    margin: 0;
  }
  .instruction-table-wrapper {
    max-height: 48vh;
  }
`;

const InstructionsComponent = ({hideNote}) => {
    return (
      <StyledInstructionsContent>
        {!hideNote && (<p className="note">
          Note that timer is running. Kindly close the question paper page to
          attend the questions.
        </p>)}
        <p className={`font-sub-heading ${hideNote && 'instruction-wrapper'}`}>Please read the instructions carefully</p>
        <p className="title"> General Instructions:</p>
        <div className={`table-wrapper ${hideNote && 'instruction-table-wrapper'}`}>
            <div>
                <ol className="">
                    <li>Total duration of National NEET Mock - 2023  is 180 minutes.</li>
                    <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself.  You will not be required to end or submit your examination.</li>
                    <li>
                        The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                        <div className="icon-container">
                            <QuestionNotVisitedSmall>
                                <span className="text">1</span>
                            </QuestionNotVisitedSmall>
                            <span>This question has not been visited yet.</span>
                        </div>
                        <div className="icon-container">
                            <QuestionNotAnsweredSmall>
                                <span className="text">2</span>
                            </QuestionNotAnsweredSmall>
                            <span>This question has been visited, but not answered.</span>
                        </div>
                        <div className="icon-container">
                            <QuestionAnsweredSmall>
                                <span className="text">3</span>
                            </QuestionAnsweredSmall>
                            <span>This question has been answered and will be considered for evaluation.</span>
                        </div>
                        <div className="icon-container">
                            <QuestionMarkedReviewSmall>
                                <span className="text">4</span>
                            </QuestionMarkedReviewSmall>
                            <span>This question has been marked for review and has not been answered.</span>
                        </div>
                        <div className="icon-container">
                            <QuestionAnsweredMarkedReviewSmall>
                                <span className="text">5</span>
                            </QuestionAnsweredMarkedReviewSmall>
                            <span>This question has been answered and marked for review, which will be considered for evaluation.</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            The Marked for Review status for a question simply indicates that you would like to look at that question again.
                        </div>
                        <div className="txt-red">
                            If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.
                        </div>
                        <p className="title"> Navigating to a Question:</p>
                    </li>
                    <li>
                        To answer a question, do the following:
                        <ul>
                            <li>
                                Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does 
                                <br/>NOT save your answer to the current question.
                            </li>
                            <li>
                                Click on Save & Next to save your answer for the current question and then go to the next question.
                            </li>
                            <li>
                                Click on Mark for Review & Next to mark your question for review, and then go to the next question.
                            </li>
                        </ul>
                    </li>
                    <li>
                      <div>
                         You can view all the questions by clicking on the Question Paper button. Note that the options for multiple choice type questions will not be shown.
                      </div>
                      <p className="title"> Answering a Question :</p>
                    </li>
                    <li>
                      Procedure for answering a multiple choice type question:
                      <ul>
                        <li>To select your answer, click on the button of one of the options</li>
                        <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button</li>
                        <li>To change your chosen answer, click on the button of another option</li>
                        <li> To save your answer, you MUST click on the Save & Next button</li>
                        <li>To mark the question for review, click on the Mark for Review & Next button. 
                          <span className="txt-red">If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering of question as indicated above.
                    </li>
                    <li>Note that ONLY Questions for which answers are saved after answering will be considered for evaluation. This will also include questions that have been answered and marked for review.</li>
                </ol>
            </div>
        </div>
      </StyledInstructionsContent>
    );
  };

export default InstructionsComponent;