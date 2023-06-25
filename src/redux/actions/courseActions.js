import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import { errorHandling } from "../error-handling/api-error_handling";
import { BASE_URL,methodPostHeader,methodGetHeader } from "../constants/api-header-constants";
import { refreshToken } from "./loginActions";


export const fetchQuestionSummary = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
    code: "TP",
    offset: 0,
    page_size: 0,
  };
  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/review/grid`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_QUESTION_SUMMARY,
          payload: response?.data?.questions,
        });
      })
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};

export const setCourseDetails = () => {
  return function (dispatch) {
    axios
      .get(`${BASE_URL}/learn/api/v1/course/list?courseType=TEST&prodCode=TP`, {
        headers: methodGetHeader(),
      })
      .then((response) => {
        let courseId = response?.data?.courses.length
          ? response.data.courses[0].id
          : "";
        axios
          .get(`${BASE_URL}/learn/api/v1/course/test/${courseId}`, {
            headers: methodGetHeader(),
          })
          .then((response) => {
            let res = response?.data.length ? response?.data[0].chapters : [];
            if (res.length) {
              let payload = {
                courseId,
                testTopics: res.filter((item) => item.title == "Grand Test")[0],
              };
              dispatch({
                type: ActionTypes.SET_COURSE_TEST_DETAILS,
                payload,
              });
            }
          })
          .catch((error) => {
            errorHandling(error,dispatch);
            console.log(error);
          });
      })
      .catch((error) => {
        
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};

export const startTest = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
    mode: "TEST",
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/start`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {})
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};

export const getCurrentQuestion = (seq_id, block_id, qid) => {
  const payload = {
    seq_id,
    block_id,
    code: "TP",
    offset: qid - 1,
    page_size: 1,
    post_submit: true,
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/review/list`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_CURRENT_QUESTION,
          payload: response?.data?.questions,
        });
      })
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};
export const getAllQuestion = (seq_id, block_id, qid) => {
  const payload = {
    seq_id,
    block_id,
    code: "TP",
    offset: qid - 1,
    page_size: 500,
    post_submit: true,
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/review/list`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {
        let data= response?.data?.questions.map((item)=>{
          return item.questionText;
        })
        dispatch({
          type: ActionTypes.SET_ALL_QUESTION,
          payload: data,
        });
      })
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};
export const saveCurrentQuestion = (pblock_id, course_id, data) => {
  const payload = {
    pblock_id,
    course_id,
    ...data,
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/test/save`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {})
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};

export const submitCurrentTest = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}/learn/api/v1/mcq/test/submit`, payload, {
        headers: methodPostHeader(),
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.TEST_SUBMIT_STATUS,
          payload: true,
        });
      })
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};


