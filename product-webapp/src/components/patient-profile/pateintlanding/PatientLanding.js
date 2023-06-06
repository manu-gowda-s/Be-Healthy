import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import doctor from "./images/doctor.png";
import { FcSearch } from "@react-icons/all-files/fc/FcSearch";
import { FcAssistant } from "@react-icons/all-files/fc/FcAssistant";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { FcBusinessContact } from "@react-icons/all-files/fc/FcBusinessContact";
import "./pateintlanding.css";
import Testimonals from "../../userlanding/feedback/Testimonals";
import Searchbar from "./Searchbar";
import DoctorData from './images/DoctorData.json';
import { useEffect } from "react";
import axios from "axios";
import FooterCard from "../../userlanding/footer/FooterCard";
import { Link } from "react-router-dom";
import avatarlogo from './images/avatar.png';
import applogo from '../../common/logo.jpg'


function PatientLanding(props) {

  const[docData,setDocData]=useState([]);



  useEffect(()=>{
    async function fetchdata(){
      const doctorData=await axios.get('http://localhost:8001/doctorinfo');
    //   doctorData.data.forEach((list) => {
    //     console.log(list.firstName);
    // })
    setDocData(doctorData.data);
    }fetchdata()
  },[]);


  return (
    <>
            <nav className="navbar navbar-expand-lg shadow-lg" style={{background: "#0A1CCC"}}>
  <div className="container-fluid">
  <Link to="/"> <img src={applogo} alt="" /></Link>
 
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-5 mx-2 text-light"  to="/">Home</Link>
        </li> 
      
      
        <div class="dropdown-center">
        <img src={avatarlogo} classsName="mx-3" alt="" type="button" data-bs-toggle="dropdown" style={{width:"55px",height:"55px",marginLeft:"30px",marginRight:"80px"}}/> 
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href=" ">View profile</a></li>
            <li><Link to='/login' class="dropdown-item">Logout</Link></li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</nav>
      <section className="banner1">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 slideImg" src={slide1} alt="First slide" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slideImg" src={slide2} alt="Second slide" />

          
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slideImg" src={slide3} alt="Third slide" />

         
          </Carousel.Item>
        </Carousel>
      </section>

      <div className="container mt-5 mb-5 me-5">
        <div className="row">
          <Searchbar placeholder="Search by Doctor, Specialist, location..." data={docData}/>
        </div>
      </div>

      <section>
        <div className="p-5 m-5">
          <h2 className="text-center">4 Easy Steps To Get Your Solutions</h2>
        </div>

        <div className="container-fluid mt-5">
          <div className="row px-1">
            <div className="col-xxl-3 col-sm-6 col-md-8 col-xl-6 mb-2">
              <div className="newcard me-3">
                <FcSearch className="card-icons d-flex justify-content-center" />
                <h5 className="text-center p-2 fs-3">Search doctor</h5>
                <p>
                  We're here to help whenever you feel ill, nut keeping you
                  healthy is our better priority.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6 col-md-8 col-xl-6 mb-2">
              <div className="newcard">
                <FcBusinessContact className="card-icons d-flex justify-content-center"/>
                <h5 className="text-center p-2 fs-3">Check doctor Profile</h5>
                <p>
                  We can help you find available vaccine appointments near you
                  or notify you when availibility.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6 col-md-8 col-xl-6 mb-2">
              <div className="newcard">
                <FcCalendar className="card-icons d-flex justify-content-center" />
                <h5 className="text-center p-2 fs-3">Schedule Appointment</h5>
                <p>
                  From seasonal allergies to born identification and treatments,
                  we have all resources.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-sm-6 col-md-8 col-xl-6 mb-2">
              <div className="newcard">
                <FcAssistant className="card-icons d-flex justify-content-center" />
                <h5 className="text-center p-2 fs-3">Get Your Solution</h5>
                <p>
                  We can help you find available vaccine appointments near you
                  or notify you when availibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="banner1 m-5 p-5"> 
      <div className="card mb-3 ms-5" style={{width: "90%",height:"30%",background:"#f6f5f5"}}>
  <div className="row g-0">
  <h2 className="card-title m-3 p-3 text-center">Select Doctors</h2>
    <div className="col-md-7">
    <div className="card-body ms-5">
        <h4 className="fw-bold">Consult a doctor anytime and anywhere by search</h4>
        <ul className="list-group list-group-flush w-75 p-4" style={{background:"#e0e0e0 !important"}}>
        <li className="list-group-item fs-5"><i className="fa-solid fa-1 text-info m-2"></i>Top-search specialties</li>
        <li className="list-group-item fs-5"><i className="fa-solid fa-2 text-warning m-2"></i>Excellence in Healthcare every.</li>
        <li className="list-group-item fs-5"><i className="fa-solid fa-3 text-danger m-2"></i>Building a healthy environment.</li>
      </ul>
      
       <Link to="/patientpro/appointment"><button className="bn632-hover bn24 mx-3 ">View All </button></Link>
     
      </div>
     
    </div>
    <div className="col-md-5">
    <img src={doctor} className="img-fluid rounded-start mb-5" alt=" "/>
    </div>
  </div>
</div>
         
      </section>
      <div>
        <h2 className="text-center">What our users have to say</h2>
			
        <Testimonals/>
      </div>

      <section>
        <FooterCard/>
      </section>
     

    </>
  );
}

export default PatientLanding;
