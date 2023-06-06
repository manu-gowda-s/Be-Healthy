import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbars from '../../common/Navbars';
import PatientNavBar from './PatientNavBar';


function Pateintroute(props) {
    return (
        <div>
            
      
       <Navbars subnav={'Home'} subnav3={'logout'}></Navbars>

     <Container fluid className='profile-container'>
     <Row className='profile-row'>
          <img className='profilebg' src='https://media.istockphoto.com/photos/doctor-in-hospital-background-with-copy-space-picture-id949812160?k=20&m=949812160&s=170667a&w=0&h=d37eip7n1YrRu2wZxkKndJb_IR6DevLpXbAWBzzWVD8='/>
         
        <Col style={{"padding":"0px"}} className="border border-secondary">
        <PatientNavBar/>
        </Col>
        <Col lg={10} className="col-bg">
          {/* <MainComponent/> */}
          {/* <Routes>
          <Route path="/profile" element={<Main />} />
        </Routes> */}

        <Outlet /> 
          </Col>
      </Row>
    </Container>


        </div>
    );
}

export default Pateintroute;