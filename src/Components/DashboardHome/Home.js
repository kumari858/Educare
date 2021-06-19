import React from 'react';
import {MdClass, FaUserFriends, IoMdCopy } from 'react-icons/all';
import './home.css'
const Home =()=>{
    return(
    <div className="d-flex flex-row mh-75" id="wrapper">
        
    <div id="page-content-wrapper">
    
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
    );
}
export default Home;