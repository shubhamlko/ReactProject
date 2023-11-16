import React from 'react'
import Template from './Template/Template'
 import signupImg from "../img/registration.jpg"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Sign up"
    desc1="demp"
    desc2="demo2"
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}

    
    />
  )
}

export default Signup