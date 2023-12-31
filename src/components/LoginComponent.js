import { styled } from "styled-components";
import logo from "../assets/png/logo.png";
import login from "../assets/png/login.png";
import LoginCard from "./LoginCardComponent";

const StyledHomeContent = styled.div`
    .bg-content {
        background-image: url(${login});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: calc(100vh - 82px);
    }
    .logo-container {
        margin-left: 75px;
    }
`;
const LoginComponent = ({generateOtpCallback, verifyOtpCallback}) => {
    return (
        <StyledHomeContent>
            <div className='logo-container'>
                <img src={logo} alt='no-img' />
            </div>
            <div className='bg-content'>
                <LoginCard generateOtpCallback={generateOtpCallback} verifyOtpCallback={verifyOtpCallback}/>
            </div>
        </StyledHomeContent>
    )
}

export default LoginComponent;