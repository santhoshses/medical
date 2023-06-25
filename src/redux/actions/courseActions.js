import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const fetchQuestionSummary = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
    code: "TP",
    offset: 0,
    page_size: 0,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/review/grid", payload, {
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_QUESTION_SUMMARY,
          payload: response?.data?.questions,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setCourseDetails = () => {
  return function (dispatch) {
    axios
      .get(
        "https://hmqa.medacecin.in/learn/api/v1/course/list?courseType=TEST&prodCode=TP",
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("AccessToken"),
          },
        }
      )
      .then((response) => {
        let courseId = response?.data?.courses.length
          ? response.data.courses[0].id
          : "";
        axios
          .get(
            "https://hmqa.medacecin.in/learn/api/v1/course/test/" + courseId,
            {
              headers: {
                Authorization: "JWT " + localStorage.getItem("AccessToken"),
              },
            }
          )
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
            console.log(error);
          });
      })
      .catch((error) => {
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
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/start", payload, {
        headers: headers,
      })
      .then((response) => {})
      .catch((error) => {
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
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/review/list", payload, {
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_CURRENT_QUESTION,
          payload: response?.data?.questions,
        });
      })
      .catch((error) => {
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

  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/test/save", payload, {
        headers: headers,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};

export const submitCurrentTest = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/test/submit", payload, {
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.TEST_SUBMIT_STATUS,
          payload: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const generateOtp = (username) => {
  const payload = {
    username,
  };

  const headers = {
    "Content-Type": "application/json",
    // "Authorization": "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .get("https://hmqa.medacecin.in/api/otp/generate", payload, {
        headers: headers,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};

export const verifyOtp = (otp, username) => {

  const payload = {
    otp,
    username
  };

  const headers = {
    "Content-Type": "application/json",
    // "Authorization": "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/api/otp/verify", payload, {
        headers: headers,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};
