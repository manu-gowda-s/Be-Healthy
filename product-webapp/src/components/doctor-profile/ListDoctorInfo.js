import { Button, Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import MultiformContext from "./Multiformcontext";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
const ListDoctorInfo = () => {
  const { personal, experience, clinic, prev,next } = useContext(MultiformContext);

  useEffect(()=>{
    const url='http://localhost:8001/doctorinfo';
    axios.post(url,
      {
        id:Math.floor(Math.random() * 16) + 5,
        firstName: personal.firstName,
        lastName: personal.lastName,
        age: personal.age,
        address:personal.address,
        contactNo:personal.contactNo,
        graduation: experience.graduation,
        specialization: experience.specialization,
        mrn: experience.mrn,
        registrationYr:experience.registrationYr,
        experience: clinic.experience,
        location: clinic.location,
        hospitalName: clinic.hospitalName,
        mail:personal.mail
      }).then((res)=>{
        console.log(res);
      });
  
  },[])

  return (
    <div className="mt-5">
     
      <Container fluid className="">
      <h1 className="mb-5">Profile Details:</h1>
        <Row>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">First Name:<span className="fw-light"> {personal.firstName}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Last Name:<span className="fw-light"> {personal.lastName}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Address:<span className="fw-light"> {personal.address}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Age:<span className="fw-light"> {personal.age}</span></p></Col>
        </Row>
        <Row className="mt-5">
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Contact No:<span className="fw-light"> {personal.contactNo}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Graduation:<span className="fw-light"> {experience.graduation}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Specialization:<span className="fw-light"> {experience.specialization}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">MRN:<span className="fw-light"> {experience.mrn}</span></p></Col>
        </Row>
        <Row className="mt-5">
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Registration Year:<span className="fw-light"> {experience.registrationYr}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Experience:<span className="fw-light"> {clinic.experience} years</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Clinic location:<span className="fw-light"> {clinic.location}</span></p></Col>
          <Col xl={6} xs={12}> <p className="fs-4 fw-semibold">Clinic Name:<span className="fw-light"> {clinic.hospitalName}</span></p></Col>
        </Row>
        <Row className="mt-3">
          <Col> </Col>      
        </Row>
      </Container>

    </div>
  );
};
export default ListDoctorInfo;
