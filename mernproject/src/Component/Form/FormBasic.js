import React, { useState } from 'react'

const FormBasic = () => {
  const [inputFeild , setInputFeild ] = useState({
    Username : "",
    mobile : "",
    emailId : "",
    addresh : "",
    isVisible : true,
    mode : "",
    drpCity : ""

  });

  const inputHandler = (event) =>{
    const {name, value, checked , type} = event.target;
        setInputFeild( prevData =>{
          return {
            ...prevData , 
          [name] :  type === "checkbox" ? checked : value
          }
        })
  }

  const submitHander = (event) =>{
    event.preventDefault();
    console.log(inputFeild)
  }
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-6 mt-5 shadow p-5'>
          <form onSubmit={submitHander}>
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

            <div className="form-group mb-3 d-flex gap-5 align-items-center">
              <div className='d-flex gap-2 align-items-center'>
                <input type="radio" 
                className="" 
                name='mode' 
                value="online_mode" 
                id="online_mode" 
                checked={inputFeild.mode === "online_mode"}
                onChange={inputHandler}
                />
                <label htmlFor="online_mode">Online</label>
              </div>
              <div className='d-flex gap-2 align-items-center'>
                <input type="radio" className=""
                 name='mode' 
                 value="Offline_mode"
                  id="Offline_mode" 
                  checked={inputFeild.mode === "Offline_mode"} 
                  onChange={inputHandler}
                  />
                <label htmlFor="Offline_mode"> Offline</label>
              </div>
             
            </div>
           
            <div className="form-group mb-3">
            <label className="form-check-label" htmlFor="" >City</label>
              <select className='form-control' value={inputFeild.drpCity} name='drpCity' onChange={inputHandler}>
                <option value="Lucknow"> Lucknow </option>
                <option value="Lucknow"> Delhi </option>
                <option value="Lucknow"> Kanpur </option>
                <option value="Lucknow"> Noida </option>

              </select>
              
            </div>


            <div className="form-check mb-3">
              <input 
              type="checkbox" 
              onChange={inputHandler}
              className="form-check-input" 
              id="isVisible" 
              name="isVisible" 
              checked={inputFeild.isVisible}
              />
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