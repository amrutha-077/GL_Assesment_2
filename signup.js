import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
const Signup=()=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userErr,setUsererr]=useState('')
    const [emailErr,setEmailerr]=useState('')
    const [passwordErr,setPassworderr]=useState("")
    const bgstyle={color:"red"}


    const handleBlurEvent=(e,key)=>{
        if(key==='username'){
         if(e.target.value){
             setUsererr(e.target.value)
             setUsererr('')
             
         }
         else{
             setUsererr('Please Enter the Username')
         }
        }
        if(key==='email'){
            if(e.target.value){
                setEmailerr(e.target.value)
                setEmailerr('')
            }
            else{
                setEmailerr('Please Enter the Email')
            }
           }
        if(key==='password'){
         if(e.target.value){
             setPassworderr(e.target.value)
             setPassworderr('')
         }
         else{
             setPassworderr('Please Enter the password')
         }
        }
       
     }


   
    return(
        <div>
             <div className="form">
          Name<input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} onBlur={(e)=>handleBlurEvent(e,'username')}></input>
          <h6 style={bgstyle}>{userErr}</h6>
          Email<input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={(e)=>handleBlurEvent(e,'email')}></input>
          <h6 style={bgstyle}>{emailErr}</h6>
          Password<input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} onBlur={(e)=>handleBlurEvent(e,'password')}></input>
          <h6 style={bgstyle}>{passwordErr}</h6>
          <Link to='/login'><button className="login-btn">Signup</button></Link>
          </div>
         </div>
    )
}
export default Signup