import React, { useState } from 'react'
import { NavLink, useNavigate  } from 'react-router-dom';
import axios from "axios"
import Swal from 'sweetalert2'
const Registraion = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username:"", email : "" , mobile:"" , password:"", cpassword:""
  })
  let name , value ;
  const handleInput = (e) =>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value})
  }
  const handleSubmit = async (e) =>{
      e.preventDefault();
      const {username, email, mobile, password} = user;  //object  destruturing
      axios.post("http://localhost:8000/registration", user)
      
      .then(res =>{
        if(username !=="" && email !=="" && mobile !=="" && password !==""){
        
          Swal.fire(
            'Registration Successful',
            'Your data have been saved successfully please go to Login Page',
           )
           navigate("/login")
          console.log(res)
        
      }else{
        Swal.fire(
          'Invalid Details',
          'Please fill all the fields first',
         )
      }

    })
      
  }

  return (

    <>
      <section>
        <div className="container">

          <div className='row'>
            <div className='col-md-5 col-sm-10 m-auto pt-5'>
              <div className="heading">
                <h1 className="text text-large">Sign In</h1>
                <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                </p>
              </div>
              <form method='post' className="form" id="registration_form">
                <div className="input-control">
                  <label className="input-label" hidden>Name</label>
                  <input type="text" name="username" id="username" value={user.username} className="input-field" onChange={handleInput} placeholder="Enter name" />
                </div>

                <div className="input-control">
                  <label className="input-label" hidden>Email Address</label>
                  <input type="email" name="email" id="email" value={user.email} className="input-field" onChange={handleInput} placeholder="Email Address" />
                </div>

                <div className="input-control">
                  <label className="input-label" hidden>Mobile No</label>
                  <input type="number" name="mobile" id="mobile" value={user.mobile} className="input-field" onChange={handleInput} placeholder="Mobile" />
                </div>

                

                <div className="input-control">
                  <label className="input-label" hidden>Password</label>
                  <input type="password" name="password" value={user.password} className="input-field" onChange={handleInput} placeholder="Password" />
                </div>
                <div className="input-control">
                  <label  className="input-label" hidden>Password</label>
                  <input type="password" name="cpassword" value={user.cpassword} className="input-field" onChange={handleInput} placeholder="Password" />
                </div>

                <div className="input-control">
                  <a href="#" className="text text-links">Forgot Password</a>
                  <input type="submit" name="submit" onClick={handleSubmit} className="input-submit" value="Sign Up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Registraion