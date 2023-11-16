import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setFormData(prevData => {
            return {
                ...prevData, [event.target.name]: event.target.value
            }

        })
    }
    const submithandler = (event) => {

        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard");
    }




    return (
        <div>


            <form onSubmit={submithandler}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Login</label>
                    <input  type="text" 
                            className="form-control" 
                            name='email' 
                            id="email" 
                            value={formData.email} 
                            onChange={changeHandler} 
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <div className="input-group" id="show_hide_password">
                        <input className="form-control"
                            name='password'
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                        />
                        <div className="input-group-addon">
                            <span onClick={() => setShowPassword((prev) => !prev)}>

                                {
                                    showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className='my-3 bg-light text-center'>
                    <button type='submit'>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm