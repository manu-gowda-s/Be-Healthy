import { Alert, Calendar } from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import './BookSlot.css';
import Card from 'react-bootstrap/Card';
import Chip from "@material-ui/core/Chip";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const BookSlot = () => {
    const preDate = moment(new Date()).format("DD/MM/YYYY");
    const [value, setValue] = useState(moment('2022-07-20'));
    // const [value, setValue] = useState(preDate);
    const [selectedValue, setSelectedValue] = useState(moment('2022-07-20'));
    // const [selectedValue, setSelectedValue] = useState(preDate);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const  showItem = () => {
        handleShow();   
    }
  
    const onSelect = (newValue) => {
      setValue(newValue);
      setSelectedValue(newValue);
    };
  
    const onPanelChange = (newValue) => {
      setValue(newValue);
    };

    const [data, setData] = useState([]);
    const getData = () => {

        fetch('http://localhost:3000/schedule'
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
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const selectedDate = selectedValue.format('DD/MM/YYYY');

    return (
        <>
            {/* <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} /> */}
            <Container fluid style={{ "margin": "0px" }}>
            <Card className="my-3">
                <Card.Img className="patient-img" src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="IMAGE" />
                {/* <Card.Header>
                <p>this is header</p>
                <p>this is header</p>
            </Card.Header> */}
                <Card.Body>
                    <p><b>Name: </b>Pritanka Chauhan</p>
                    <p><b>Email: </b>p.chauhan@gmail.com</p>
                </Card.Body>
                <Card.Footer className="p-3">
                    <h4>Doctor Assigned</h4>
                    <p><b>Name: </b>Clementina DuBuque</p>
                    <p><b>Email: </b>Rey.Padberg@gmail.com</p>
                </Card.Footer>
            </Card>
            </Container>
            <Container>
                <Row className='my-5'>

                    <Col lg={8}>
                        <Alert message={`You selected date: ${selectedValue?.format('DD/MM/YYYY')}`} />
                        <Calendar value={value} fullscreen={false} onSelect={onSelect} onPanelChange={onPanelChange} />
                        {/* <CalendarView /> */}
                    </Col>
                    <Col className='m-auto'>
                  
                            <Card>
                            <Card.Body>
                            { data && data.length > 0 && data.map((item, index) =>
                                   
                                   selectedDate === item.date ? 
                                <Chip label={item.start_time + " - "+ item.end_time} />: ""
                                )}
                            </Card.Body>
                        </Card> 
                        
                        <Card className='my-5'>
                            <FloatingLabel controlId="floatingTextarea2" label="Description">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Card>
                        <Card className='my-5'>
                            <Card.Footer>
                                <Button onClick={ () => showItem()}>Book slot</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header >
                    <Modal.Title style={{"margin":"auto"}}>
                    </Modal.Title> closeButton
                    
                </Modal.Header> */}
                <Modal.Body style={{"margin":"auto"}}>
                    <Alert className='mb-3' message={"Your appointment has been saved sucessfully !"} variant="success"/>
                    {/* <h6>Your appointement has been saved sucessfully!</h6> */}
                    <h1 style={{"display":"flex","justifyContent":"center"}}>Thank you..</h1>
                    <h1 style={{"display":"flex","justifyContent":"center"}}><i class="fas fa-check-circle"></i></h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                   
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookSlot;



// “patientEmail” : String  // Primary Key
// “patientImage”:
// “patientName” : String
// “password” : String
// “patientMobile” : Long
// “patientDob”: Int
// “patientGender”:Enum
// “patientCity”: String
