import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CountDownTimer from "../components/time_counter";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";

const Article = styled.article`
  flex: 1;
`;
const QuestionPanel = styled.div`
  .general-section {
    border-bottom: 1px solid #bababa;
    flex: 1;
    height: 5vh;
    display: flex;
    font-weight: 700;
    font-size: 16px;
  }
  .countdown {
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
  }
  .questionType {
    align-items: center;
    padding-left: 10px;
    color: #ff0000;
  }
  .questionNum {
    align-items: center;
    padding-left: 10px;
  }
  .question-section {
    flex: 5;
    padding: 20px 10px;
    .question {
      font-weight: 700;
      font-size: 18px;
      padding-bottom: 10px;
    }
    .form-control {
      margin-top: 10px;
    }
  }
`;
const QuestionSectionComponent = ({
  question,
  handleAnswerChange,
  answerVal,
  markGuess,
}) => {
  console.log(question);
  return (
    <QuestionPanel>
      <div className="general-section countdown">
        <CountDownTimer seconds={7200}></CountDownTimer>
      </div>
      <div className="general-section questionType">Question type : MCQ</div>
      <div className="general-section questionNum">
        Question no : {question?.qid}
      </div>

      <div className="question-section">
        <div className="question">{question?.question?.text}</div>
        <FormControl className="form-control">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handleAnswerChange}
            value={answerVal}
          >
            {question?.options.map((item, i) => {
              return (
                <FormControlLabel
                  value={`choice_${i}`}
                  control={<Radio />}
                  label={item?.option + "." + item?.text}
                />
              );
            })}
          </RadioGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Mark as guess"
              onChange={handleAnswerChange}
              checked={markGuess}
            />
          </FormGroup>
        </FormControl>
      </div>
    </QuestionPanel>
  );
};
export default QuestionSectionComponent;
