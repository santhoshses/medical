import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { useDispatch, useSelector } from "react-redux";
import { generateOtp, verifyOtp } from "../redux/actions/loginActions";
import { useLocation, useNavigate } from "react-router-dom";
import { getAccessToken, getRefreshToken } from "../util";

const LoginContainer = () => {
  const accessTokenData = useSelector(
    (state) => state?.authDetails.accessToken
  );
  const refreshTokenData = useSelector(
    (state) => state?.authDetails.refreshToken
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(getAccessToken()){
        navigate("/home");
    }
    if (accessTokenData && location.pathname == "/login") {
      localStorage.setItem("AccessToken", accessTokenData);
      navigate("/home");
    }
  }, [accessTokenData]);

  useEffect(() => {
    if(getRefreshToken()){
        navigate("/home");
    }
    if (refreshTokenData && location.pathname == "/login") {
      localStorage.setItem("RefreshToken", refreshTokenData);
      navigate("/home");
    }
  }, [refreshTokenData]);

  const generateOtpMethod = (phone) => {
    dispatch(generateOtp(phone));
  };
  const verifyOtpMethod = (otp, phone) => {
    dispatch(verifyOtp(otp, phone));
  };
  return (
    <div>
      <LoginComponent
        generateOtpCallback={generateOtpMethod}
        verifyOtpCallback={verifyOtpMethod}
      />
    </div>
  );
};

export default LoginContainer;
