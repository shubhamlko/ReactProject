import React, { useState } from 'react'
import axios  from 'axios';
import { NavLink, useNavigate  } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""

    });
  
    const changehandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/login", user)
        .then(res =>{
            //  console.log(res)
            //  alert(res.messsage)
            //  navigate("/home")
            // if(isSuccess){
            //     navigate("/home")
            // }
            // else{
            //     alert("not")
            // }
        } )
        
      
      
      
    

    }
    return (
        <>

            <div className="container">

                <div className='row'>
                    <div className='col-md-5 col-sm-10 m-auto pt-5'>
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            <p className="text text-normal">New user? <span><a href="/signup" className="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form className="form" onSubmit={submitHandler}>
                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" value={user.email} className="input-field" onChange={changehandler} placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" value={user.password} className="input-field" onChange={changehandler} placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <a href="#" className="text text-links">Forgot Password</a>
                                <input type="submit" name="submit" className="input-submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login