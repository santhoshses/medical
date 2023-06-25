import { Container, Grid, Box, Tab, Card, TextField } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";
import {
  ButtonOutlined,
  ButtonContained,
} from "../components/common/ButtonComponent";
import Timer from "../components/common/Timer";
import editIcon from "../assets/svg/ic_edit.svg";
import timerIcon from "../assets/svg/ic_round-access-time-filled.svg";

const StyledLoginContent = styled.div`
  .login-card-content {
    width: 340px;
    position: relative;
    top: 50px;
    left: 90px;
    padding: 40px;
  }
  .login {
    color: red;
  }
  .login-header {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 14px;
  }
  .login-sub-header {
    color: #646e82;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 35px;
  }
  .login-btn {
    color: #ffffff;
    border-radius: 32px;
    background: linear-gradient(350deg, #052a74 0%, #0161f3 96.3%);
    width: 80%;
  }
  .login-btn-container {
    text-align: center;
    margin-top: 45px;
  }
  .login-btn-container > .Mui-disabled {
    color: #ffffff;
    opacity: 0.5;
  }
  .edit-number {
    cursor: pointer;
  }
  .timer-content {
    margin-left: auto;
  }
  .resend-container {
    margin-top: 34px;
  }
`;

const LoginCardComponent = ({ generateOtpCallback, verifyOtpCallback }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const requestOtpMethod = () => {
    setIsLogin(false);
    generateOtpCallback(mobileNumber);
  };
  const verifyOtpMethod = () => {
    setIsLogin(true);
    verifyOtpCallback(otp, mobileNumber);
    navigate("/home");
  };
  const getLoginContent = () => {
    return (
      <>
        <div className="login-header">Login</div>
        <div className="login-sub-header">Your Manipal Medace account</div>
        <TextField
          type="number"
          fullWidth
          label="Mobile Number"
          id="fullWidth"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <div className="login-btn-container">
          <ButtonOutlined
            disabled={mobileNumber.length === 10 ? false : true}
            className="login-btn"
            onClick={() => requestOtpMethod()}
          >
            Request OTP
          </ButtonOutlined>
        </div>
      </>
    );
  };

  const getOTPContent = () => {
    return (
      <>
        <div className="login-header">Verify OTP</div>
        <div className="login-sub-header">
          Enter the OTP sent to +91 {mobileNumber}
          <img
            src={editIcon}
            alt="no-img"
            className="edit-number"
            onClick={() => setIsLogin(true)}
          />
        </div>
        <MuiOtpInput value={otp} onChange={handleChange} />
        <Grid container className="resend-container">
          <Grid>
            <ButtonContained>Resend OTP</ButtonContained>
          </Grid>
          <Grid className="timer-content">
            <img src={timerIcon} />
            <Timer seconds={1} minutes={5} />
          </Grid>
        </Grid>
        <div className="login-btn-container">
          <ButtonOutlined
            disabled={otp.length === 4 ? false : true}
            className="login-btn"
            onClick={() => verifyOtpMethod()}
          >
            Verify
          </ButtonOutlined>
        </div>
      </>
    );
  };

  return (
    <StyledLoginContent>
      <Card variant="outlined" className="login-card-content">
        {isLogin ? getLoginContent() : getOTPContent()}
      </Card>
    </StyledLoginContent>
  );
};

export default LoginCardComponent;
