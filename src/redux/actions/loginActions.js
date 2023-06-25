import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import { errorHandling } from "../error-handling/api-error_handling";
import { BASE_URL,methodPostHeader,methodGetHeader } from "../constants/api-header-constants";
import { appLogout } from "../../util";



export const generateOtp = (username) => {
  const payload = {
    username,
  };

  return function (dispatch) {
    axios
      .get(`${BASE_URL}/api/otp/generate`, payload, {
        headers: methodGetHeader(),
      })
      .then((response) => {})
      .catch((error) => {
        errorHandling(error,dispatch);
        console.log(error);
      });
  };
};

export const verifyOtp = (otp, username) => {
  const payload = {
    otp,
    username,
  };

  const headers = {
    "Content-Type": "application/json",
  };
  return function (dispatch) {
    axios
      .post(`${BASE_URL}/api/otp/verify`, payload, {
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_ACCESS_TOKEN,
          payload: response.accessToken,
        });
        dispatch({
          type: ActionTypes.SET_REFRESH_TOKEN,
          payload: response.refreshToken,
        });
      })
      .catch((error) => {
        errorHandling(error,dispatch);
        dispatch({
          type: ActionTypes.SET_REFRESH_TOKEN,
          payload: "This need to be romoved",
        });
        dispatch({
          type: ActionTypes.SET_ACCESS_TOKEN,
          payload: "eyJhbGciOiJSUzUxMiIsImtpZCI6Im9wZW5lZHgifQ.eyJhdWQiOiAib3BlbmVkeCIsICJleHAiOiAxNjg3Njk3NDE2LCAiZ3JhbnRfdHlwZSI6ICJwYXNzd29yZCIsICJpYXQiOiAxNjg3NjkzODE2LCAiaXNzIjogImh0dHBzOi8vaG1xYS5tZWRhY2VjaW4uaW4vb2F1dGgyIiwgInByZWZlcnJlZF91c2VybmFtZSI6ICI5OTAwMDEyMzQ1IiwgInNjb3BlcyI6IFsicmVhZCIsICJ3cml0ZSIsICJlbWFpbCIsICJwcm9maWxlIl0sICJ2ZXJzaW9uIjogIjEuMi4wIiwgInN1YiI6ICI4ZjM2YjNiOWYzYmEzNzY1MzM1ZDM0ZDBhMzFmZjg2YiIsICJmaWx0ZXJzIjogWyJ1c2VyOm1lIl0sICJpc19yZXN0cmljdGVkIjogZmFsc2UsICJlbWFpbF92ZXJpZmllZCI6IHRydWUsICJlbWFpbCI6ICJ0ZXN0dXNlcjFAbWFuaXBhbC5jb20iLCAibmFtZSI6ICJUZXN0VXNlcjEiLCAiZmFtaWx5X25hbWUiOiAiVXNlcjEiLCAiZ2l2ZW5fbmFtZSI6ICJUZXN0IiwgImFkbWluaXN0cmF0b3IiOiBmYWxzZSwgInN1cGVydXNlciI6IGZhbHNlfQ.HDBIKVW3TMDAwHYlQKWpPNq3Ide_pZxmu8OElpxQGhr-lGUWo8Q_V0bHcTBQ-fiR1E23uAqCBBPDhnMiF9bb_2tntqHpRuQbYURfdVcbu-khf8GnJWSwzCvG6gwZtxDvHT4wJR4PKtkrN4pxNAn3KhUGIIVyYqBawr0J23SeJWhuPJKdmFvGx_e2_aq54LIvouNmKnxNdgPyn0XfLrAS5NCEi63HIdwawKEo7CuH_F21mneAlJlZeeqQe3hNWzvXOt3PcRbL_VcFT1QwICpDDjKt0xNIzYZwhajPF657Io1rEwrYigf7QSKvje8HVesRYVnzNXm28_7lweqBXB4AaA",
        });
      
        console.log(error);
      });
  };
};

export const refreshToken = (clientId) => {
  const payload = {
    username:null,
    password :null,
    grantType:"refresh_token",
    clientId,
    tokenType :"JWT",
    asymmetricJwt :true,
    refresh_token:"JWT " + localStorage.getItem("RefreshToken")

  };

  const headers = {
    "Content-Type": "application/json",
  };
  return function (dispatch) {
    axios
      .post(`${BASE_URL}/oauth2/access_token`, payload, {
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_ACCESS_TOKEN,
          payload: response.accessToken,
        });
      })
      .catch((error) => {
        appLogout();
        console.log(error);
      });
  };
};
