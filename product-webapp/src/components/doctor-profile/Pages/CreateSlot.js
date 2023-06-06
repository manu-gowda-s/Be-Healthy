import { Button, Container, Card, Row, Col, Nav, FormControl } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './CreateSlot.css';
import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import TimePicker from 'react-time-picker';
import Chip from "@material-ui/core/Chip";
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
// import 'react-time-picker/dist/TimePicker.css';

function CreatSlot() {
    // moment(new Date, 'DD-MM-YYYY').format()
    
    const [data, setData] = useState([]);
    const preDate = moment(new Date()).format("DD/MM/YYYY HH:MM:SS A" );
    const [startDate, setStartDate] = useState(new Date());
    const currentDate = moment(startDate).format("DD/MM/YYYY" );
    const [startTime, setStartTime] = useState(preDate);
    const [endTime, setEndTime] = useState(preDate);

   

    const form = useRef(null)

    const handleStartTime = (e) => (
        setStartTime(e)
    )

    const handleEndTime = (e) => (
        setEndTime(e)
    )

    // console.log(startTime, endTime);


    // const date = startDate.getDate() + "/" + parseInt(startDate.getMonth() + 1) + "/" + startDate.getFullYear();
    
    const jsonData = {
        date: currentDate,
        start_time: startTime,
        end_time: endTime
    }

    const submit = e => {
        e.preventDefault()
        console.log(currentDate)
        // console.log("start time:", startTime)
        // console.log("end time:", endTime)
        const json = JSON.stringify(jsonData);
        const res = axios.post("http://localhost:3000/slots", json, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        // fetch('http://localhost:3000/slots', {
        //   method: 'POST',
        //   body: JSON.stringify(json),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        //   .then(res => res.json())
        //   .then(json => 
        //     setData(json)
        //     )
    }

    return (
        <div className='App' style={{
            display: 'block', padding: 30, textAlign: 'center'
        }}>

            <Container>
                <Nav fill variant="tabs" defaultActiveKey="/" style={{ "justifyContent": "center" }}>
                    {/* <Nav.Item>
                        <Nav.Link className='btn-stepper' style={{ "color": "black" }} as={Link} to="/">Schedule</Nav.Link>
                    </Nav.Item>{' '} */}
                    <Nav.Item style={{ "backgroundColor": "white" }}>
                        <Nav.Link className='btn-stepper' eventKey="link-2">Create Slots</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='time-slot'>
                    {/* {data && data.length > 0 && data.map((item, index) => */}
                    <Form ref={form} onSubmit={submit}>
                        <div className="input-container my-5">
                            <div >
                                {/* value={data.startDate} */}
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) =>
                                        setStartDate(date)}/>
                            </div>
                            <i className="fas fa-calendar-alt" ></i>
                        </div>
                        <Card className='time-section text-center p-4' style={{ "width": "1000px" }}>
                            <Card.Body className='mx-5'>
                                <div className='time-top my-4' >
                                    <p>Select Time</p>
                                    <Button><i className="fas fa-plus"></i></Button>
                                </div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label=""
                                    className="mb-4"
                                >
                                    <TimePicker onChange={handleStartTime} value={startTime} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label=""
                                    className="mb-4"
                                >
                                    <TimePicker onChange={handleEndTime} value={endTime} />
                                </FloatingLabel>
                                <Card.Footer className='my-3'>
                                    {/* <Chip label={data.startTime} /> */}
                                    <Chip label="09:00Am-10:00Am" />
                                </Card.Footer>
                                <Button className="button my-3" type='submit' variant="success">CREATE SLOT</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                    {/* )} */}
                </div>
            </Container>
        </div>
    )
}

export default CreatSlot;
