import { ActionTypes } from "../constants/action-types";
import axios from "axios";

// export const fetchQuestionSummary = () => {
//   return function (dispatch) {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((response) => {
//         dispatch({
//           type: ActionTypes.SET_QUESTIONS,
//           payload: response.data.products,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
export const fetchQuestionSummary = (seq_id, block_id) => {
  const payload = {
    seq_id,
    block_id,
    code: "TP",
    offset: 0,
    page_size: 0
  };
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/review/grid", payload, {headers:headers})
      .then((response) => {})
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
    "Authorization": "JWT " + localStorage.getItem("AccessToken"),
  };
  return function (dispatch) {
    axios
      .post("https://hmqa.medacecin.in/learn/api/v1/mcq/start", payload, {headers:headers})
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};

export const selectedQuestion = (question) => {
  return {
    type: ActionTypes.SELECTED_QUESTION,
    payload: question,
  };
};
