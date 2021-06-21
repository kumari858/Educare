import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

import {
  AiOutlineAlignRight,
  IoNotificationsOutline,
  BiUser,
  FiLogOut,ImCross,BsThreeDotsVertical
} from "react-icons/all";
import Dropdown from "react-bootstrap/Dropdown";
import images from "../images/userimg.jpg";
import Sidebar from "../Sidebar/Sidebar";
import "./classes.css"
const Classes = () => {
  return (
    <div className="d-flex flex-row mh-75" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <nav className="topNav navbar navbar-expand-lg navbar-light flex-nowrap primary-bg py-3 px-4">
          <div className="d-flex flex-row align-items-center">
            <AiOutlineAlignRight
              size={28}
              className="me-3 mr-2"
              id="menu-toggle"
            />
            <h2 className="h4 m-0">Classes</h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-wrapper"
            aria-controls="sidebar-wrapper"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <IoNotificationsOutline className="d-flex fs-6 mr-3 icon" />
              <li class="nav-item dropdown d-lg-flex">
                <img
                  width="40"
                  className="user-img rounded"
                  src={images}
                  alt="user"
                />
                <a
                  className="d-flex flex-column ml-3 h5 fw-bold"
                  href="/"
                  id="navbarDropdown"
                >
                  {" "}
                  Direction Educare
                  <span>Admin</span>
                </a>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/Profile">
                      <BiUser />
                      My Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/Logout">
                      <FiLogOut />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid  row-fluid pt-3">
        <div className="d-sm-flex float-left">
            <Dropdown >
              <Dropdown.Toggle  className="rounded-pill btn btn-danger" variant="none" id="dropdown-basic">
              + Create class
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="form-width" href="#/action-1">
                <Dropdown.Header className="font-weight-bold square border-bottom">Create Class <ImCross className="float-right"/> </Dropdown.Header>
                  <Form.Group
                    controlId="formHorizontalEmail"
                    className="column-lg"
                  >
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="text" placeholder="Enter class name" />
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select">
                      <option> select</option>
                    </Form.Control>

                    <br></br>
                    <Button
                     className="text-center"
                      style={{
                        background:
                          "linear-gradient(179.88deg, #011B53 -143.82%, #063DB5 226.52%)",
                      }}
                      type="submit"
                    >
                      Go
                    </Button>
                  </Form.Group>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          <div className="d-sm-flex float-right">
            <Dropdown >
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="form-width" href="#/action-1">
                  <Form.Group
                    controlId="formHorizontalEmail"
                    className="column-lg"
                  >
                    <Form.Label>Class</Form.Label>
                    <Form.Control as="select">
                      <option> select</option>
                    </Form.Control>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select">
                      <option> select</option>
                    </Form.Control>
                    <Form.Label>Teacher</Form.Label>
                    <Form.Control as="select">
                      <option> select</option>
                    </Form.Control>
                    <br></br>
                    <Button
                     className="text-center"
                      style={{
                        background:
                          "linear-gradient(179.88deg, #011B53 -143.82%, #063DB5 226.52%)",
                      }}
                      type="submit"
                    >
                      Go
                    </Button>
                  </Form.Group>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Export
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Export PDF</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Export Excel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="ml-2 mt-5 font-color "  >

     <Table responsive="sm">
    <thead style={{ background:' rgba(189, 195, 199, 0.5)'}}>
      <tr  >
        <th>Sr. No.</th>
        <th>Class Name </th>
        <th>Subject</th>
        <th>Lecture Timing</th>
        <th>Teacher Assigned</th>
        <th>Total students Assigned</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>+2 Non Medical</td>
        <td> Physics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td>50</td>
        <td> <BsThreeDotsVertical/> </td>

      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Chemistry</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Mathematics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      
      <tr>
        <td></td>
        <td></td>
        <td>English</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Computer</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
        <td>2</td>
        <td>+2 Non Medical</td>
        <td> Physics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td>50</td>
        <td> <BsThreeDotsVertical/> </td>

      </tr>
      <tr>
      <td></td>
        <td></td>
        <td>Chemistry</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
        <td>3</td>
        <td>+2 Non Medical</td>
        <td> Physics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td>50</td>
        <td> <BsThreeDotsVertical/> </td>

      </tr>

      <tr>
      <td></td>
        <td></td>
        <td>Chemistry</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
      <td></td>
        <td></td>
        <td>Mathematics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
      <td></td>
        <td></td>
        <td>English</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
      <td></td>
        <td></td>
        <td>Computer</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
        <td>4</td>
        <td>+2 Non Medical</td>
        <td> Physics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td>50</td>
        <td> <BsThreeDotsVertical/> </td>

      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Chemistry</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Mathematics</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      
      <tr>
        <td></td>
        <td></td>
        <td>English</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Computer</td>
        <td>9:00AM - 10:00Am</td>
        <td>Anjali Doda</td>
        <td></td>
        <td> <BsThreeDotsVertical/> </td>
      </tr>
      
      
    </tbody>
  </Table>
  
</div>
      </div>
      
    </div>
    

    /* <div className="d-flex container-fluid">
        <div className="row">
        <div>
        <button className=" btn btn-danger"> create +</button>

        </div>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>


        </div>
         */
    //\ </div>
  );
};
export default Classes;
