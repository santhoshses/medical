import { ToastContainer, toast } from 'react-toastify';
import { refreshToken } from '../actions/loginActions';

export const errorHandling = (err,dispatch)=>{
    const error = err?.response?.data;
    const errorCode = error && error.code ? error.code:0;
    const long_desc = error && error.long_desc ? error.long_desc : "Something went wrong"
    toast.error(long_desc, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    if(errorCode == 1003){
        dispatch(refreshToken());
      }
    return errorCode;
}