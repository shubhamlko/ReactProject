import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';


const Registration = () => {
    const username = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();
    const cpassword = useRef();


    const submitHandler = (e) => {
        if (username.current.value !== "" && email.current.value !== "" && password.current.value !== "" && password.current.value === cpassword.current.value && mobile.current.value !== "") {
            localStorage.setItem("name", username.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("mobile", mobile.current.value)
            toast.success("registration successfully")
            
        }
        else {

            alert("pls Enter all details")
        }
    }

    return (
        <>
            <div className='col-md-6 m-auto'>
                <div className='p-3 border'>
                    <form>
                        <div className='mb-2'>
                            <label htmlFor='name' className='mb-1 fw-bold'> Name</label>
                            <input type='text' className='form-control' ref={username} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email' className='mb-1 fw-bold'>Email</label>
                            <input type='text' className='form-control' ref={email} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mobile' className='mb-1 fw-bold'>Mobile</label>
                            <input type='text' className='form-control' ref={mobile} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password' className='mb-1 fw-bold'>Password</label>
                            <input type='text' className='form-control' ref={password} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cpassword' className='mb-1 fw-bold'>Confirm Password</label>
                            <input type='text' className='form-control' ref={cpassword} />
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary' onClick={submitHandler}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Registration