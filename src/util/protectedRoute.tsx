import { useEffect, useState } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userState } from '../reducers/userLoginReducer';

interface IRootState {
    userLogin: userState;
  } 

  const checkUserTokenExpiry = (exp: number | null)=>{
    if(exp !== null){
        //console.log('exp is ', exp)
        //console.log('data now is ', Math.floor(Date.now()/1000));
        return Math.floor(Date.now() / 1000) > exp;
    }
    return true;
  }

const ProtectedRoute = (props: any) => {
    const { isUserlogin } = useSelector<IRootState, userState>((state) => state.userLogin);
    let userTokenExp = localStorage.getItem('user-credential-expiry');
    let userLogined = false;
    let userExpired = null;
    if(userTokenExp !== null){
        userExpired = checkUserTokenExpiry(parseInt(userTokenExp));
    }
    let errorMessage = 'Not authorized. Please log in first.';
    if(userExpired){
        errorMessage = 'Token expired, Please log in again'
    }
    if((userExpired !== null && !userExpired) || isUserlogin){
        userLogined = true;
    }
    //console.log('isUserLogin is ', isUserlogin, userLogined);

    return userLogined ? <Outlet /> : <Navigate to="/unauthorized" replace={true} state={{em: errorMessage, m:1}}/>;
    
}

export default ProtectedRoute;