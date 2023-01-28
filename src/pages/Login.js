import React from 'react'
import { NavLink } from 'react-router-dom'
import groupimg from "../Images/groupimg.png"
import logo from "../Images/logo.png"
import "./Login.css"
const Login = () => {
  return (
    <div className="container login-container">
        <div className='row '>
            <div className='col-md-7 col-12 px-md-5' >
               <img src={logo} className="logo" alt='logo' />
               <img src={groupimg} className=" groupimag" alt='groupima' />
            </div>
            <div className='col-md-5 col-12 px-md-0 px-1'>
            <div className="card cardPositon shadow">
                <div className="card-body">
                 <h4 className="card-title fs-5 fw-bold text-center mt-2">Log In</h4>
                 <form className='px-md-5 px-0'>
                    <input type="email" className="p-md-2 p-1  mt-4 mb-3 form-control input-bg" placeholder='Phone number,user,email' />
                    <input type="password" className="p-md-2 p-1 mb-3 form-control input-bg" placeholder='Password'/>
                    <div className="mt-3 d-grid">
                    <button className="custom-btn custom-btn-blue">Login</button>
                    </div>
                    <div>
                        <hr className='text-muted  mt-4'/>
                        <p className='text-muted text-center'>Or</p>
                        <hr className='text-muted'/>
                    </div>
                    <div className="mb-md-5 mb-2 mt-4 d-grid">
                    <button className="custom-btn custom-btn-white">
                        <span className='text-muted fs-6'>Don't have Login?</span>
                        <NavLink className='ms-1 text-info fw-bold' to="/signin">Sign Up</NavLink>
                    </button>
                    </div>
                 </form>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login