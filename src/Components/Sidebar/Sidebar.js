import React, { useState } from 'react';
import { IoIosArrowBack, FaUser, RiDashboardLine, MdClass, RiGroupLine, FaUserFriends, IoMdCopy, CgFileDocument, RiCalendarTodoLine, IoCheckboxOutline, IoIosSettings, FiLogOut } from 'react-icons/all';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
    <div >
        <div className="secondary-bg" id="sidebar-wrapper">
        <div className="sidebar-heading d-flex justify-content-around align-items-center text-center py-4 secondary-text">
          KenDEL <IoIosArrowBack />
        </div>
        <div className="list-group list-group-flush my-3">
            <Link to="/" className="sidebar list-group-item-action  bg-transparent d-flex text-white  ">
                <FaUser className="me-2 mr-3 navicon" /> Profile
            </Link>
            <Link to="/" className="sidebar list-group-item-action  secondary-text d-flex justify-content-start active align-items-center text-white common-line">
                <RiDashboardLine className="me-2 mr-3 navicon" /> Dashboard
            </Link>
            <p class="text-uppercase px-4 py-2 p6 mb-0 text-white">Main</p>
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white">
                <MdClass className="me-2 mr-3 navicon" /> Class
            </Link>
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white">
                <RiGroupLine className="me-2 mr-3 navicon" /> Staff 
            </Link>
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white">
                <FaUserFriends className="me-2 mr-3 navicon" /> Student 
            </Link>
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white">
                <IoMdCopy className="me-2 mr-3 navicon" /> Exam 
            </Link> 
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white common-line">
                <IoCheckboxOutline className="me-2 mr-3 navicon" /> Attendance
            </Link>  
            <p class="text-uppercase px-4 p6 py-2 mb-0 text-white">Others</p>
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white fw-bold">
                <IoIosSettings className="me-2 mr-3 navicon" /> Settings
            </Link>  
            <Link to="/" className="sidebar list-group-item-action bg-transparent d-flex justify-content-start align-items-center text-white fw-bold">
                <FiLogOut className="me-2 mr-3 navicon" /> Logout
            </Link>  
        </div>
        </div>    
    </div>
    )
}
