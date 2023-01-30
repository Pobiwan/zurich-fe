import './errorroute.css';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdPanTool } from 'react-icons/md';
import { MdBuild } from "react-icons/md";

export default function ErrorRoute({errorMessage, mode}:{errorMessage?: string, mode?: number}){
    const location = useLocation();
    const navigate = useNavigate();
    if(location.state){
        const {em, m} = location.state;
        if(em){
            errorMessage = em;
        }
    }   

    function returnLogo(){
        if(mode === 1){
            return <MdPanTool size={70} color={'red'}/> 
        }   
        if(mode === 2){
            return <MdBuild size={70} height={300} color={'red'}/>
        }   
    }

    useEffect(()=>{
        setTimeout(()=> {navigate('/login')}, 3000);
    },[])

    return(
        <div className="errorroute-container">
            {returnLogo()}
            <h1 className={"errormessage"}> {errorMessage} </h1>
        </div>
    )
}