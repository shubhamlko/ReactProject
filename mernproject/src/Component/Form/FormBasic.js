import React, { useState } from 'react'

const FormBasic = () => {
  const [inputFeild , setInputFeild ] = useState({
    Username : "",
    mobile : "",
    emailId : "",
    addresh : "",
    isVisible : true

  });
console.log(inputFeild)

  const inputHandler = (event) =>{
        setInputFeild( prevData =>{
          return {
            ...prevData , [event.target.name] : event.target.value
          }
        })
  }
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-6 mt-5 shadow p-5'>
          <form>
          <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" name='Username' value={inputFeild.Username} placeholder="Enter Name" onChange={inputHandler}/>
             </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Phone</label>
              <input type="number" className="form-control" name='mobile' value={inputFeild.mobile}  placeholder="Enter Phone" onChange={inputHandler}/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" name='emailId' value={inputFeild.emailId} placeholder="Enter email"  onChange={inputHandler}/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Addresh</label>
              <input type="text" className="form-control" name='addresh' value={inputFeild.addresh} id="exampleInputPassword1" placeholder="Address" onChange={inputHandler}/>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="isVisible" name="isVisible" checked={inputFeild.isVisible}/>
              <label className="form-check-label" htmlFor="isVisible" >Aggred</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormBasic