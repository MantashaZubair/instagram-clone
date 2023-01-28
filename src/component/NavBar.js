import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo.png"
const NavBar = () => {
  return (
    <div >
    <nav className="navbar navbar-light bg-light shadow-sm">
     <div className="container-fluid">
       <NavLink className="navbar-brand" to="/">  
        <img src={logo} height="130px" width="160px" alt='logo' />
       </NavLink>
        <form className="d-flex me-1 me-md-2 mb-md-5">
            <input className="form-control  text-muted search-box" type="search" placeholder="Search" aria-label="Search"/>
            <NavLink className="nav-link text-dark fs-5" to="#"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
            <NavLink className="nav-link text-dark fs-5" to="#"><i className="fa-solid fa-house"></i></NavLink>
            <NavLink className="nav-link text-dark fs-5" to="#"><i className="fa-regular fa-heart"></i></NavLink>
            <div className="dropdown me-md-5 me-0">
                    <a className="btn profile-link" href="#" role="button"  data-bs-toggle="dropdown">
                        <img
                        className=" navbar-profile-pic"
                        src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="profile-img"
                         />
                     </a>

                    <ul className="dropdown-menu">
                      <li>
                      <NavLink className="dropdown-item" to="/myprofile">My profile</NavLink>
                      </li>
                      <li><a className="dropdown-item" href="#">
                       Logout
                      </a></li>
                  
                    </ul>
                  </div>
           
        </form>
     </div>
     </nav>
     </div>
  )
}

export default NavBar