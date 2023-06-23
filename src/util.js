import {
  QuestionNotAnswered,
  QuestionAnswered,
  QuestionNotVisited,
  QuestionMarkedReview,
  QuestionAnsweredMarkedReview,
} from "./StyledIcons";

export const GetCourseStatus = (
  status,
  startTime,
  endTime,
  userStartTime,
  userEndTime
) => {
  let endDateObj = new Date(endTime);
  let startDateObj = new Date(startTime);
  let endDateString =
    endDateObj.getDate() +
    " " +
    endDateObj.toLocaleString("default", { month: "long" }) +
    ", " +
    endDateObj.getFullYear();
  let startDateString =
    startDateObj.getDate() +
    " " +
    startDateObj.toLocaleString("default", { month: "long" }) +
    ", " +
    startDateObj.getFullYear();

  switch (status) {
    case 0:
      return {
        status: "Not Started",
        dateText: "Not started ",
      };
    case 1:
      return {
        status: "Started",
        dateText: "Started ",
      };
    case 2:
      return {
        status: "Paused",
        dateText: "Paused ",
      };
    case 3:
      return {
        status: "Completed",
        dateText: "Completed on " + endDateString,
      };
    case 4:
      return {
        status: "Upcoming",
        dateText: "Live on " + startDateString,
      };
    case 5:
      return {
        status: "Live",
        dateText: "Expires on " + endDateString,
      };
    case 6:
      return {
        status: "Expired",
        dateText:
          "Expires by " +
          endDateObj.toLocaleTimeString() +
          ", " +
          endDateString,
      };

    default:
      break;
  }
};

export const getQuestionStatus = (question) => {
  if (question.answer) {
    if (question.marked_view) {
      return (
        <QuestionAnsweredMarkedReview className="question-badge">
          {question.qid}
        </QuestionAnsweredMarkedReview>
      );
    } else {
      return (
        <QuestionAnswered className="question-badge">
          {question.qid}
        </QuestionAnswered>
      );
    }
  } else if (question.marked_view) {
    return (
      <QuestionMarkedReview className="question-badge">
        {question.qid}
      </QuestionMarkedReview>
    );
  } else if (question.skip) {
    return (
      <QuestionNotAnswered className="question-badge">
        {question.qid}
      </QuestionNotAnswered>
    );
  } else if (question.not_visited) {
    return (
      <QuestionNotVisited className="question-badge">
        {question.qid}
      </QuestionNotVisited>
    );
  }
};

export const getQuestionStatusCount = (allQuestions) => {
  let statusObj = {
    questionAnsweredMarkedReview: 0,
    questionAnswered: 0,
    questionMarkedReview: 0,
    questionNotAnswered: 0,
    questionNotVisited: 0,
  };
  allQuestions.map((question)=>{
    if (question.answer) {
      if (question.marked_view) {
        statusObj.questionAnsweredMarkedReview++;
      } else {
        statusObj.questionAnswered++;
      }
    } else if (question.marked_view) {
      statusObj.questionMarkedReview++;
    } else if (question.skip) {
      statusObj.questionNotAnswered++;
    } else if (question.not_visited) {
      statusObj.questionNotVisited++;
    }
    
  })
  return statusObj;
  
};
