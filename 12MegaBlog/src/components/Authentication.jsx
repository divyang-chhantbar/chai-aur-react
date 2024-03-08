/* 
So this is a great layout and a mechanism to protect the pages or routes
It's a protective container and a container is an empty which help us to show anything we wanted to 
*/
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected(children,authentication = true) {
    const navigate = useNavigate()
    const[loader,setLoader] = useState(true)
    // now we need to know whether the authStatus : isLoggedIn or not 
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
       if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)   
},[authStatus,navigate,authentication])

   return loader? <h1>Loading...</h1> : <>{children}</>
}
