import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../Appcontext'

const Login = () => {
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")

    const email = useRef();
    const password = useRef();



    const loginHandler = (e) => {
        e.preventDefault();
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("SignUp", email.current.value)
            alert("login successfully")
         } else {
            alert("enter valid Email and Password")
        }
    }

    return (
        <>
            <div className='col-md-6 m-auto'>
                <div className='p-3 border'>
                    <form>

                        <div className='mb-2'>
                            <label htmlFor='email' className='mb-1 fw-bold'>Email</label>
                            <input type='text' className='form-control' ref={email} />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='password' className='mb-1 fw-bold'>Password</label>
                            <input type='text' className='form-control' ref={password} />
                        </div>

                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary' onClick={loginHandler}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Login