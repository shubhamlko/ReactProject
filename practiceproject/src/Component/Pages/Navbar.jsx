import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from '../Appcontext';

const Navbar = () => {

  const logout = () => {

    localStorage.removeItem("SignUp");
    toast.success("You have been logged out");
    window.location.reload();
  }
  const deleteacount = () => {
    localStorage.clear();
    toast.error("Your account deleted successfully");
    window.location.reload();
  }
  return (
    <>
      <div className='p-3 bg-dark text-white mb-3'>

        <div className='container'>

          <div className='row'>
            <div className='col-md-3'>
              React Application
            </div>
            <div className='col-md-9'>
              <div className='d-flex align-items-center gap-3 justify-content-end'>
                <Link to={"/"}>
                  <button className='btn btn-primary'>
                    Home
                  </button>
                </Link>

                <Link to={"/cart"}>
                  <button className='btn btn-primary'>
                    cart
                  </button>
                </Link>
                {


                  <Link to={"/login"} >
                    <button className='btn btn-primary'>
                      login
                    </button>
                  </Link>
                }
                {
                  <Link to={"/registration"} >
                    <button className='btn btn-primary'>
                      Registration
                    </button>
                  </Link>
                  }
{
                  <div className='text-warning fw-bold'>
                    user name here
                  </div>

                }
                {
                  <div className='text-white pointer fw-bold' onClick={logout}>
                    Log Out
                  </div>
                }

                {
                  <div className='text-white pointer fw-bold' onClick={deleteacount}>
                    delete account
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar