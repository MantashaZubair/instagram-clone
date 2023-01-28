import React from 'react'
import { NavLink } from 'react-router-dom'
import groupimg from "../Images/groupimg.png"
import logo from "../Images/logo.png"
const Signin = () => {
  return (
    <div className="container login-container">
     <div className='row '>
        <div className='col-md-7 col-12 px-md-0 px-1' >
           <img src={logo} className="logo" alt='logo' />
           <img src={groupimg} className="groupimag" alt='groupima' />
        </div>
        <div className='col-md-5 mb-md-4 col-12  px-md-0 px-1'>
        <div className="card cardPositon shadow">
            <div className="card-body">
             <h4 className="card-title fs-5 fw-bold text-center mt-2">Sign In</h4>
             <form className='px-md-5 px-0'>
                <input type="email" className="p-md-2 p-1 mt-4 mb-3 form-control input-bg" placeholder='phone' />
                <input type="email" className="p-md-2 p-1 mt-4 mb-3 form-control input-bg" placeholder='Email' />
                <input type="email" className="p-md-2 p-1 mt-4 mb-3 form-control input-bg" placeholder='Fullname' />
                <input type="password" className="p-md-2 p-1 mb-3 form-control input-bg" placeholder='Password'/>
                <div className="mt-3 d-grid">
                <button className="custom-btn custom-btn-blue">Signin</button>
                </div>
                <div>
                    <hr className='text-muted  mt-4'/>
                    <p className='text-muted text-center'>Or</p>
                    <hr className='text-muted'/>
                </div>
                <div className="mb-md-4 mb-2 mt-4 d-grid">
                <button className="custom-btn custom-btn-white">
                    <span className='text-muted fs-6'>Already have an account?</span>
                    <NavLink className='ms-1 text-info fw-bold' to="/login">Log In</NavLink>
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

export default Signin