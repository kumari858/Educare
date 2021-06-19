import React from 'react';
import './Header.css';
import { IoNotificationsOutline, IoIosArrowDown, BiUser, FiLogOut } from 'react-icons/all';
import Logo from './../images/logo.png';
import User from './../images/userimg.jpg';
const Header=()=>{
    return(
        <div>
        <header className="navbar navbar-expand-sm bg-light">
        <div className=" navbar-brand logo">
        <img src={Logo} width="27px" /> 
        
        </div>
        {/* <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                        <IoNotificationsOutline  className="d-flex fs-6 mr-3 icon" />
                            <li class="nav-item dropdown d-lg-flex">
                                <img width="40" className="user-img rounded" src={User} alt="user" />
                                <a className="d-flex flex-column ml-3 h5 fw-bold" href="/" id="navbarDropdown"> Direction Educare
                                <span>Admin</span>
                                </a>
                                <IoIosArrowDown className="d-flex ml-2 icon" />
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/"><BiUser />My Profile</a></li>
                                    <li><a className="dropdown-item" href="/"><FiLogOut />Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> */}


</header>

        </div>
    )
}
export default Header;