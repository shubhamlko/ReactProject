import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component} = props;
    const navigate = useNavigate();
    useEffect(() =>{
        let isLoggedIn = localStorage.getItem("loggedUser");

        if(!isLoggedIn){
            navigate("/registration")
        }
        else{
          navigate("/login")
        }
    },[])
 

  return (
    <>
          <Component />
    </>
  )
}

export default Protected