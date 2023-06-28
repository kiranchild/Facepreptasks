import React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from './logo.jpeg'
import {useNavigate} from 'react-router-dom';
const Login=()=> {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
        if(user==="foo" && password==="bar")
        {
            navigate('/home');
        
        }
        else{
        alert("password and user name wrong")
        }

  };

  return (
   <>
   
    <form className="form">
    <img src={logo} className="logo1" alt="logo"></img>
         <h2>Admin Login</h2>
            <div className="username">
            <TextField id="UserName"  value={user} onChange={(e)=>setUser(e.target.value)} label="User Name" name="Username"/>
            </div>
            <p className="p"></p>
            <div className="password">
          <TextField name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" id="password"/><br/>
          </div>
          <div >
          <Button className="button-login" type="submit"  onClick={handleSubmit}>Login</Button>
          
          </div>
        
        </form>
        

    </>
  
  );
}
export default Login