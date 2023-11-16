import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const Template = ({title,desc1, desc2, image , frameImage , formType, setIsLoggedIn}) => {
  return (
    <>
    <div className='col-md-8'>
        <div className='form-div'>
            <h3>{title}</h3>
            <div className='description'>
                 <span> {desc1}</span> 
                 <span>{desc2} </span>
            </div>
            <div className='form-elm'>
                {
                    formType === "signup" ? (<RegisterForm  setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }
            </div>
            <div className='atl-opt'>
                    <span className='line'></span>
                    <span>Or</span>
                    <span className='line'></span>
            </div>
            <button>
                Login with Google
            </button>
        </div>
    </div>
    <div className='col-md-4'>
        <div className='img-box'>
                <img src={frameImage} alt="img" />
                <img src={image} alt="img" />
        </div>
    </div>
    </>
  )
}

export default Template