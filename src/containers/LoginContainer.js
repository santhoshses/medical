import LoginComponent from '../components/LoginComponent';
import { useDispatch, useSelector } from "react-redux";
import { generateOtp, verifyOtp } from '../redux/actions/courseActions';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const generateOtpMethod =(phone)=>{
        dispatch(generateOtp(phone));
    }
    const verifyOtpMethod =(otp,phone)=>{
        dispatch(verifyOtp(otp,phone));
    }
    return (
        <div>
            <LoginComponent generateOtpCallback={generateOtpMethod} verifyOtpCallback={verifyOtpMethod} />
        </div>
    );
}

export default LoginContainer;
