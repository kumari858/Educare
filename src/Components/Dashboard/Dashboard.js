import React from 'react';
import { AiOutlineAlignRight, IoNotificationsOutline, IoIosArrowDown, BiUser, FiLogOut, MdClass, FaUserFriends, IoMdCopy } from 'react-icons/all';
import images from '../images/userimg.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

export default function Dashboard() {

    return (
        <div className="d-flex flex-row mh-75" id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
                <nav className="topNav navbar navbar-expand-lg navbar-light flex-nowrap primary-bg py-3 px-4">
                    <div className="d-flex flex-row align-items-center">
                        <AiOutlineAlignRight size={28} className="me-3 mr-2" id="menu-toggle" />
                        <h2 className="h4 m-0">Dashboard</h2>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-wrapper" 
                    aria-controls="sidebar-wrapper" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                        <IoNotificationsOutline  className="d-flex fs-6 mr-3 icon" />
                            <li class="nav-item dropdown d-lg-flex">
                                <img width="40" className="user-img rounded" src={images} alt="user" />
                                <a className="d-flex flex-column ml-3 h5 fw-bold" href="/" id="navbarDropdown"> Direction Educare
                                <span>Admin</span>
                                </a>
                                <Dropdown>
                                <Dropdown.Toggle variant= "none" id="dropdown-basic">
                
                                </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                   <Dropdown.Item href="#/Profile"><BiUser />My Profile</Dropdown.Item>
                                   <Dropdown.Item href="#/Logout"><FiLogOut />Logout</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                {/* <div className="dropdown">
                                <IoIosArrowDown className="d-flex ml-2 icon dropdown-toggle" data-toggle="dropdown" />
                                <span className="caret"></span>
                                <ul className="dropdown-menu" >
                                    <li><a  href="#"><BiUser />My Profile</a></li>
                                    <li><a  href="#"><FiLogOut />Logout</a></li>
                                </ul>
                                </div> */}
                            </li>
                        </ul>
                    </div>
                </nav>    
                <div className="container-fluid px-4 pt-5">
                    <div className="intro py-5 px-4 d-flex flex-column flex-lg-row justify-content-end text-center mb-4">
                        <div className="media-body mb-3 text-black text-left">
                            <h4 className="mt-0 mb-2">Welcome back Anjali!</h4>
                            <p className="font-size-18 mb-4">You can check your today's task in your task bar</p>
                        </div>   
                    </div>
                    <div className="row g-3 my-2">
                        <div className="board col-md-6 col-xl-3">
                            <div className=" board p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
                                <div className="d-flex justify-content-center align-items-center circle rounded-full mr-2"><MdClass size={26} /></div>
                                <div>
                                    <h5 className="h5">Total Classes</h5>
                                    <p className="fs-5">10</p>
                                </div>
                            </div>
                        </div>
                  

                        <div className="board col-md-6 col-xl-3">
                            <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
                                <div className="d-flex justify-content-center align-items-center circle rounded-full mr-2"><FaUserFriends size={26} /></div>
                                <div>
                                    <h5 className="h5">Total Students</h5>
                                    <p className="fs-5">10</p>
                                </div>
                            </div>
                        </div>

                    <div className="board col-md-6 col-xl-3">
                        <div className="board p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
                            <div className="d-flex justify-content-center align-items-center circle rounded-full mr-2"><FaUserFriends size={26} /></div>
                            <div>
                                <h5 className="h5">Total Teachers</h5>
                                <p className="fs-5">10</p>
                            </div>
                        </div>
                    </div>

                    <div className="board col-md-6 col-xl-3">
                        <div className="board p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
                            <div className="d-flex justify-content-center align-items-center circle rounded-full mr-2"><IoMdCopy size={26} /></div>
                            <div>
                                <h5 className="h5">Total Exams</h5>
                                <p className="fs-5">10</p>
                            </div>
                        </div>
                    </div>
                </div>
                  
                </div>    
            </div>
        </div>
    )
}
