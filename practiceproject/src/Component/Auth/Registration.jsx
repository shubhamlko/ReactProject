import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Registration = () => {
    const username = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();
    const cpassword = useRef();
const navigate = useNavigate()

    const submitHandler = (e) => {
        if (username.current.value !== "" && email.current.value !== "" && password.current.value !== "" && password.current.value === cpassword.current.value && mobile.current.value !== "") {
            localStorage.setItem("name", username.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("mobile", mobile.current.value)
            localStorage.setItem("loggedUser", email.current.value)
            toast.success("registration successfully")
            navigate("/login")
            
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
                            <input type='text' id="name" className='form-control' ref={username} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email' className='mb-1 fw-bold'>Email</label>
                            <input type='text' id="email" className='form-control' ref={email} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mobile' className='mb-1 fw-bold'>Mobile</label>
                            <input type='text' id="mobile" className='form-control' ref={mobile} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'  className='mb-1 fw-bold'>Password</label>
                            <input type='text' id="password" className='form-control' ref={password} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cpassword' className='mb-1 fw-bold'>Confirm Password</label>
                            <input type='text' id="cpassword" className='form-control' ref={cpassword} />
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