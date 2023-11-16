import React, { useState } from 'react'
import { AiOutlineEyeInvisible , AiOutlineEye } from 'react-icons/ai';
const RegisterForm = () => {
  const [formData , setFormData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    conPassword : ""
  })

  const changeHandler = (event) =>{
    setFormData(prevData =>{
        return{
            ...prevData , [event.target.name] : event.target.value
        }
            
    })
}


const setPassword = () =>{

}
const showPassword = () =>{

}
  return (
    <>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form>
        <div className="form-group mb-3">
                <label htmlFor="firstname">Login</label>
                <input type="text" className="form-control" name='firstname' id="firstname" value={formData.firstname} onChange={changeHandler}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Login</label>
                <input type="text" className="form-control" name='lastname' id="lastname" value={formData.lastname} onChange={changeHandler}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Login</label>
                <input type="text" className="form-control" name='email' id="email" value={formData.email} onChange={changeHandler}/>
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                 <div class="input-group" id="show_hide_password">
                    <input class="form-control" 
                    name='password'
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password} 
                    onChange={changeHandler}
                     />
                    <div class="input-group-addon">
                        <span onClick={() => setPassword((prev) => !prev)}>
                            
                            {
                                showPassword ?  (<AiOutlineEyeInvisible />) : (AiOutlineEye)
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                 <div class="input-group">
                    <input class="form-control" 
                    type={showPassword ? ("text") : ("password")}
                    name='conPassword'
                    value={formData.conPassword} 
                    onChange={changeHandler}
                     />
                    <div class="input-group-addon">
                        <span onClick={() => setPassword((prev) => !prev)}>
                            
                            {
                                showPassword ?  (<AiOutlineEyeInvisible />) : (AiOutlineEye)
                            }
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <button type='button'>Create Account</button>
            </div>
            </form>

    </>
  )
}

export default RegisterForm