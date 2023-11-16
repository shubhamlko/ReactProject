import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='logo'> LOGO</div>
                        </div>
                        <div className='col-md-5'>
                            <nav>
                                <ul className='d-flex gap-3'>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-md-4'>
                            <div className='right-button d-flex gap-3'>
                                {!isLoggedIn &&
                                    <Link to="/login" className='elm-btn'>
                                        Login
                                    </Link>
                                }
                                {
                                    !isLoggedIn &&
                                    <Link to="/register" className='elm-btn'>
                                        Sign Up
                                    </Link>
                                }
                                {
                                    isLoggedIn &&
                                    <button className='elm-btn' onClick={()=>{
                                        setIsLoggedIn(false);
                                        toast.error("log Out");
                                        
                                    }}>
                                        Log Out
                                    </button>
                                }
                                {
                                    isLoggedIn &&
                                    <Link to="/dashboard" className='elm-btn'>
                                        Dashboard
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar