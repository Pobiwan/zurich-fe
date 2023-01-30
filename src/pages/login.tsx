import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { logUserIn } from '../reducers/userLoginReducer';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import "./login.css";

interface GoogleUserInfo{
    exp: number
}

export function Login(props: any){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSuccess =  (res:any)=> {
        let userCredentialDecoded = jwt_decode(res.credential);
        let userExpiry = userCredentialDecoded as GoogleUserInfo;
        localStorage.setItem('user-credential-expiry',userExpiry.exp.toString());
        dispatch(logUserIn());
        navigate("/home", {replace:true});
    }

    const onFailure = () => {
        console.log('login failed ');
    }

    return(
    <div className="loginContainer">
        <h1 className="loginContainerHeader"> Welcome to Zurich Test </h1>
        <h3> Please Login In </h3>
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure} />
    </div>
    )
}