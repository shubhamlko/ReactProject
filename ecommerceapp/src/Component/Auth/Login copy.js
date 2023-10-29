import React, { useState } from 'react'
import axios from "axios"
import { useNavigate , Link } from 'react-router-dom';
const Login = () => {
    const [inputfield, setInputfield] = useState({
        email: "",
        password: ""

    });
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [records, setRecords] = useState([]);
    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputfield({ ...inputfield, [name]: value })
    }
    const submitHandler = async e => {
        e.preventDefault();
         const formData = { ...inputfield, id: new Date().getTime().toString() };
         setRecords([...records, formData]);
         setInputfield({ email: "", password: "" });
         console.log(inputfield.email + inputfield.password)

        try{
            await axios.post("http://localhost:3000/", {
                    email , password
            })
            .then(res =>{
                if(res.data="exist"){
                    history("/home" , {state: {id:email}})

                }
                else if(res.data="notexist"){
                    alert("User have not sign yet")
                }
            })
            .catch(e=>{
                alert("wrong details")

            })
        }
        catch(e){
console.log(e)
        }
    }

    return (
        <>

            <div className="container">

                <div className='row'>
                    <div className='col-md-5 col-sm-10 m-auto pt-5'>
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            <p className="text text-normal">New user? 
                                <span>
                                    <label className="text text-links">Create an account</label>
                                </span>
                            </p>
                        </div>
                        <form className="form" onSubmit={submitHandler}>
                            <div className="input-control">
                                <label htmlFor="email" className="input-label">Email Address</label>
                                <input type="email" name="email" value={inputfield.email} className="input-field" onChange={changehandler} placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label">Password</label>
                                <input type="password" name="password" value={inputfield.password} className="input-field" onChange={changehandler} placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <label className="text text-links">Forgot Password</label>
                                <input type="submit" name="submit" className="input-submit" value="Sign In" />
                            </div>
                        </form>







                    </div>
                </div>



            </div>


        </>
    )
}

export default Login