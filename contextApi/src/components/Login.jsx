import React, { useContext } from "react";
import { useState } from "react";
import userContext from "../context/Context";

function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser(username,password)
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>{
                return setUsername(e.target.value);
            }}
            placeholder="username"
             />
             <br />
            <input type="password"
            value={password}
            onChange={(e)=>{
                return setPassword(e.target.value);
            }}
            placeholder="password" />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;