import React from 'react'
import Template from './Template/Template'
import loginimg from "../img/login.png"

const Login = ({setIsLoggedIn}) => {
 

  return (
    <>
    <div className='container'>
      <div className='row'>
      <Template
        title="Welcome Back"
        desc1="Build your skills with us"
        desc2="Education to futre "
        image={loginimg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
         />
      </div>
    </div>
        
    </>
  )
}

export default Login