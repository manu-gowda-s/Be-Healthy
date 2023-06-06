import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DoctorsList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { React, useState, useEffect, state, handleCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { DocImg } './Images/doc-img.jpg'


let selectedProfile = [];
let profileSelectedData = [];
let profileList = [];

function DoctorsList() {

    const [data, setData] = useState([]);
    const [profileData, setSelectedData] = useState([]);

    const getData = () => {

        fetch('http://localhost:3000/profile'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                profileList = myJson;
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const delete_records = () => {
        console.log(profileSelectedData);
        profileSelectedData.splice(1, 1);
        // fetch(`http://localhost:3000/selectedProfiles/`, {
        //     method: 'DELETE',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   }).then( response => {    response.json()
        //    })
    }

    const getSelectedData = () => {
        profileSelectedData = [];
        fetch('http://localhost:3000/selectedProfiles'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                profileSelectedData.push(myJson);
                setSelectedData(myJson)
            });
    }
    useEffect(() => {
        getSelectedData()
    }, [])


    const addProfile = (e) => {
        // e.preventDefault()
        let add_profile_list = profileList.find(profile => {
            if (profile.id == e.id) {
                return profile;
            }
        });

        selectedProfile = [];
        fetch(`http://localhost:3000/selectedProfiles`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add_profile_list)
        }
        ).then(response => {
            if (response.ok) {
                return response.json();
            }
        }
        ).then(addedList => {
            // profileSelectedData = [];
            // selectedProfile = [];
            selectedProfile.push(addedList);
            getSelectedData();
            return selectedProfile;
        }
        )
        // selectedProfile.length = 0;
        // selectedProfile.push(e);
        // const json = JSON.stringify(selectedProfile);
        // const res = axios.post("http://localhost:3000/selectedProfiles", json, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // console.log(selectedProfile)

    }

    // const bookSlot = (list) => {
    //     location.href = "./"
    //     console.log(list);

    // }



    return (
        <>
            <div>
                <Container fluid>

                    <InputGroup className="my-3">
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Search by Doctors"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                        <div style={{ "marginRight": "40px" }}>

                            <Row>
                                {data && data.length > 0 && data.map((item, index) =>
                                    <Col key={index}>
                                        <Card className='card-profile mb-3' style={{ "width": "25rem" }}>
                                            <Card.Header as="h5">{item.Speciality}</Card.Header>
                                            <Card.Body style={{ "display": "flex", "flexDirection": "row" }}>
                                                <div className=' profile-header1'>
                                                    <Card.Img src='https://doctors.fortishealthcare.com/uploads/1db1d482-893e-4d14-9e42-3720d036a957_180521122231/picture/dr.%20vivek%20jha%20jpeg.jpg' style={{ "width": "150px", "height": "100%", "marginRight": "10px" }} />
                                                    {/* <Card.Img src='./../Images/doctor1.jpg' style={{"width":"150px","height":"100%","marginRight":"10px"}}/> */}
                                                </div>
                                                <div style={{ "width": "100%", "textAlign": "left", "margin": "auto 0px" }}>
                                                    <Card.Title>Dr.{item.doctorsName}</Card.Title>
                                                    <Card.Text>
                                                        <b>Email:</b> {item.doctorsEmail}<br />
                                                        <b>Experience:</b> {item.yearOfExperience} year
                                                    </Card.Text>
                                                    <Button variant="primary"
                                                        className='footer-btn'
                                                        onClick={() => addProfile(item)}
                                                        style={{ "float": "right" }}>View</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )}
                            </Row>
                            <Pagination className='my-5'>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                        <div>

                            {/* key={index,index1} */}

                            <Row>

                                {
                                    data.map((item1, index1) =>
                                        selectedProfile.map((item2, index) =>
                                            // item1.id == 1 ?
                                            item1.id == item2.id ?
                                                <Col lg={12} key={index}>
                                                    <Card className="text-center" style={{ width: '28rem' }}>
                                                        <Card.Header>{item2.Speciality}</Card.Header>
                                                        <Card.Body>
                                                            <div className='profile-header'>
                                                                <div className='img m-2'>
                                                                    <Card.Img src='https://doctors.fortishealthcare.com/uploads/1db1d482-893e-4d14-9e42-3720d036a957_180521122231/picture/dr.%20vivek%20jha%20jpeg.jpg' />
                                                                </div>
                                                                <div className='img-content my-3 mx-3'>
                                                                    <h4 style={{ "lineHeight": "0px" }}>{item2.doctorsName}</h4>
                                                                    <p><b>(-{item2.Speciality})</b></p>
                                                                    <p><b>Email:</b> {item2.doctorsEmail}</p>
                                                                    <p><b>Mobile No:</b> {item2.doctorsMobile}</p>
                                                                    <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                                                                        <div><p><b>Age: </b></p></div>
                                                                        <div><p><b>Gender:</b> {item2.doctorsGender}</p></div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <ListGroup className="listgroup my-2">
                                                                <ListGroup.Item>
                                                                    {/* <b>Qualification</b> */}
                                                                    <table style={{ "width": "100%" }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style={{ "width": "50%" }}>Qualification</th>
                                                                                <td>{item2.qualification}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    {/* <b>Year of Experience</b> */}
                                                                    <table style={{ "width": "100%" }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style={{ "width": "50%" }}>Year of Experience</th>
                                                                                <td>{item2.yearOfExperience} years of Exp.</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    {/* <b>Hospital Location</b> */}
                                                                    <table style={{ "width": "100%" }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style={{ "width": "50%" }}>City</th>
                                                                                <td>{item2.doctorCity}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item>
                                                                    <h6><b>Decription</b></h6>
                                                                    <p>
                                                                        We're here to help whenever you feel ill, nut keeping you healthy is our better priority.
                                                                    </p>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        </Card.Body>
                                                        <Card.Footer className="text-muted"><Button variant="primary" dataParentToChild = {item2}><Link to="/patientpro/bookslot" className="nav-link active fs-5 mx-2 ">Book a Slot</Link></Button></Card.Footer>
                                                        {/* <Card.Footer className="text-muted"><Button variant="primary" onClick={() => bookSlot(item2)}><Link to="/bookslot">Book a Slot</Link></Button></Card.Footer> */}
                                                    </Card>
                                                </Col> : ""

                                        ))}
                            </Row>
                        </div>
                    </div>



                </Container>
            </div>
        </>
    )
}

export default DoctorsList

// need installation
// npm i react-paginate@0.5.1
// npm i axios
