import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import SideNavBar from './Sidebar';
import './Sidebar.css'
import Navbars from './Navbars';

function HomePage() {
  return (
  <>
   
    <Navbars subnav={'Home'} subnav3={'Logout'}/>
     <Container fluid className='profile-container'>
     <Row className='profile-row'>
          <img className='profilebg' src='https://media.istockphoto.com/photos/doctor-in-hospital-background-with-copy-space-picture-id949812160?k=20&m=949812160&s=170667a&w=0&h=d37eip7n1YrRu2wZxkKndJb_IR6DevLpXbAWBzzWVD8='/>
         
        <Col style={{"padding":"0px"}} className="sidenav-col">
        <SideNavBar/>
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
    </>
  );
}
export default HomePage;