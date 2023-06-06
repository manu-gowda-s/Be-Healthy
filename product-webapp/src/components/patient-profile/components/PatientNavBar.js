import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './PatientNavbar.css'
class PatientNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }
  render() {
    return (
     <>
          <div className="text-center">
              {/* <img src={myImage} style={{"width":"250px"}}></img> */}
              <div className="p-4">
            <i className="far fa-user-circle my-3" style={{"fontSize":"100px"}}></i>
              
            
              </div>
              <hr/>
              <div style={{"color":"blue"}}>
             
              </div>
          <div className="p-4" style={{"padding":"10px"}}>
              {/* <i className="fa fa-file" aria-hidden="true"></i>  */}
              <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="appointment">
              <div style={{"display":"flex","flexDirection":"row"}}>
              <i className="fas fa-file-alt"></i>
              <p>View Appointment</p>
              </div>
                </Nav.Link>
              <Nav.Link eventKey="link-1" as={Link} to="bookslot">
              <div style={{"display":"flex","flexDirection":"row"}}>
              <i className="fas fa-file-alt"></i>
              <p>Create Slots</p>
              </div>
              </Nav.Link>
              <Nav.Link eventKey="link-1" as={Link} to="profile">
              <div style={{"display":"flex","flexDirection":"row"}}>
              <i className="far fa-user-circle"></i>
              <p>View your profile</p>
              </div>
              </Nav.Link>
              <Nav.Link eventKey="link-2" as={Link} to="availabledoctors">
              <div style={{"display":"flex","flexDirection":"row"}}>
              <i className="fas fa-info-circle"></i>
              {/* <i class="fas fa-search"></i> */}
              <p>Book Appointment</p>
              </div>
              </Nav.Link>
              </Nav>
             
              </div>
     </div>
     </>
    );
  }
}
export default PatientNavBar;