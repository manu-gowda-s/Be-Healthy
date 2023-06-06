import { React, useState, useEffect, state, handleCallback } from 'react';
import './CreateSlot.css';
import 'rsuite/styles/index.less';
import 'rsuite/dist/rsuite.min.css'
import { DatePicker } from 'antd';
import { Timeline } from 'rsuite';
import { Button, Container, Row, Col, Card, Nav } from 'react-bootstrap';
import 'antd/dist/antd.css'; 
import 'antd/dist/antd.less';
import { Link } from 'react-router-dom';
import { Alert, Calendar } from 'antd';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import TimePicker from 'react-time-picker';

function ViewSlot() {
    // Modal Hooks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Time picker Hooks
    const [value, setValue] = useState(moment('07/13/2022'));
    const [selectedValue, setSelectedValue] = useState(moment('07/13/2022'));
    const preDate = moment(new Date()).format("DD/MM/YYYY HH:MM:SS A");
    const [startTime, setStartTime] = useState(preDate);
    const [endTime, setEndTime] = useState(preDate);

    // data to fetch from JSON
    const [data, setData] = useState([]);
    const getData = () => {

        fetch('http://localhost:3000/slots'
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



    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };

    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const handleStartTime = (e) => (
        setStartTime(e)
    )
    const handleEndTime = (e) => (
        setEndTime(e)
    )
    const jsonData = {
        // date: currentDate,
        start_time: startTime,
        end_time: endTime
    }
    const  showItem = (e) => {
        handleShow();
        console.log(e.id,e.start_time,e.end_time);
        jsonData.start_time = e.start_time;
        console.log(jsonData.start_time);
    }


    const selectedDate = selectedValue.format('DD/MM/YYYY');

    return (
        <div style={{
            display: 'block', padding: 30, textAlign: 'center'
        }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Slots</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='my-3'>
                        <h6>Start Time</h6>
                        <TimePicker onChange={handleStartTime} value={jsonData.start_time} />
                    </div>
                    <div className='my-3'>
                        <h6>End Time</h6>
                        <TimePicker onChange={handleEndTime} value={endTime} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
            <Nav fill variant="tabs" defaultActiveKey="/" style={{ "justifyContent": "center" }}>
                    {/* <Nav.Item>
                        <Nav.Link className='btn-stepper' style={{ "color": "black" }} as={Link} to="/">Schedule</Nav.Link>
                    </Nav.Item>{' '} */}
                    <Nav.Item style={{ "backgroundColor": "white" }}>
                        <Nav.Link className='btn-stepper' eventKey="link-2">Scheduled Slots</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row className='my-5'>
                    <Col lg={6}>
                        {/* updateParentTime={updateParentTime}  */}
                        {/* <CalendarView /> */}
                        <Alert message={`You selected date: ${selectedValue?.format('DD/MM/YYYY')}`} />
                        <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
                    </Col>
                    <Col lg={6}>
                        <Timeline>
                            {/* {list.users.map((data, key) => {
                                console.log(data); */}
                            {/* // return <h1 key={key}>{data}</h1>; key={key.id}*/}
                            {
                                // data && data.length > 0 && Object.entries(data).map(([key, value]) => ({key, value}) =>
                                data && data.length > 0 && data.map((item, index) =>
                                    // console.log("JSON Date",item.date),
                                    // console.log("Calendar Date",selectedDate)
                                    selectedDate === item.date ? <Timeline.Item key={index}>
                                        <Card>
                                            <Card.Body>
                                            <Button className='btn-card' variant="primary"  
                                                onClick={ () => showItem(item)}><i className="fas fa-pen"></i></Button>
                                                {/* <Button className='btn-card' variant="primary" onClick={handleShow}><i className="fas fa-pen"></i></Button> */}
                                                <Card.Subtitle>{item.date}</Card.Subtitle>
                                                <Card.Text>{item.start_time} - {item.end_time}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Timeline.Item>
                                        : ""
                                    // <Timeline.Item key={index}>
                                    // <Card >
                                    //     <Card.Body className='text-center'>
                                    //         <h4>No Records are available</h4>
                                    //     </Card.Body>
                                    // </Card>
                                    // </Timeline.Item>

                                )
                            }

                        </Timeline>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ViewSlot;
