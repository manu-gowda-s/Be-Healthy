//import Table from 'react-bootstrap/Table';
import logo from './logo1.png'
import './Appointment.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useEffect, useState} from 'react';
function Appointments(){
    const [appointments, setappointments] = useState([]);
    const [type, setType] = useState("all");
    const getAll = async () => {
        const response = await fetch('http://localhost:8001/All');
        setappointments(await response.json());
    }
    const getpending = async () => {
        const response = await fetch('http://localhost:8001/pending');
        setappointments(await response.json());
    }
    const getcompleted = async () => {
        const response = await fetch('http://localhost:8001/completed');
        setappointments(await response.json());
    }
    const handleOnChange = (e) =>{
        setType(e.target.value);
    }
    useEffect(() => {
        if(type === "all"){
            getAll();
        } else if(type === "pending") {
            getpending();
        } else {
            getcompleted();
        }
    },[type]);
    return(
            <div className='me-5'>
             
            <div className="row" style={{ height: "5rem"}}>
                <div className="col-6" style={{ borderWidth: "4px", borderBottom:"solid", borderColor:"#CAD5E2"}}>
                    <h3 style={{ padding: "2%" ,paddingLeft: "36%"}}>0 PATIENT CONSULTED</h3>
                </div>
                <div className="col-6" style={{ borderWidth: "4px", borderBottom:"solid", borderColor:"#CAD5E2"}}>
                <h3 style={{ padding: "2%" ,paddingLeft: "27%"}}>0 COMPLETED APPOINTMENTS</h3>
                </div>
            </div>
            <div className='row' style={{borderBottomWidth: "3px", borderBottomStyle: "solid", borderBottomColor: "#CAD5E2"}}>
                <div className='col-7'>
                    <h4 style={{padding: "2%", paddingLeft:"66%"}}>LIST OF APPOINTMENTS</h4>
                </div>
                <div className='col-5' style={{padding: "1%", paddingLeft:"22%"}}>
                    <div><button type="button" className="btn btn-success">Create Slot</button></div>
                </div>
            </div>
            <div className='sorting' style={{paddingTop: "2rem"}}>
                <Container className='Container1' style={{width: "16rem"}}>
                    <Row id='ROW2' style={{position:"relative", left:"162%"}}>
                        <Col className='column1'><h4 style={{position:"relative", left:"1rem"}}>Sort by: </h4></Col>
                        <Col className='column2'>
                            <select onChange={handleOnChange} className="statusChange">
                                <option value="all">All</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </Col>
                    </Row>
                </Container>
            </div>
            {appointments.map((curElem)=> { 
                return(
                    <div className="page-content page-container" id="page-content">
                        <div className="padding" style={{paddingTop: "2%"}}>
                            <div className="row container d-flex justify-content-center">
                                <div className="col-lg-8 grid-margin stretch-card">
                                    <div className="card" style={{width:"123%", height:"100%"}}>
                                        <div className="card-body" style={{padding:"0"}}>
                                            <div className="table-responsive">
                                                <table className="table" style={{margin:"0"}}>
                                                    <tbody>
                                                        <tr>
                                                        <td rowSpan={2} className="image"><img style={{width:"100px", position: "relative", left: "18%"}} className="rounded-circle" src={logo}></img></td>
                                                        <td style={{fontWeight: "bold"}}>Patient Name:</td>
                                                        <td style={{fontWeight: "bold"}}>Date:</td>
                                                        <td style={{fontWeight: "bold"}}>Timings:</td>
                                                        <td style={{fontWeight: "bold"}}>Status:</td>
                                                        </tr>
                                                        <tr>
                                                        <td>{curElem.patient}</td>
                                                        <td>{curElem.date}</td>
                                                        <td>{curElem.time}</td>
                                                        <td>{curElem.status}</td>
                                                        </tr>
                                                        <tr style={{borderWidth:"1px", borderStyle:"solid", borderColor: "#CAD5E2", backgroundColor: "#9c88ff", color: "white"}}>
                                                        <td style={{paddingLeft:"5%"}}>Video Consult</td>
                                                        <td style={{paddingLeft: "3%"}}>Patient Profile</td>
                                                        <td>Reschedule</td>
                                                        <td style={{width: "20%"}}>Chat</td>
                                                        <td style={{paddingRight:"0"}}>Cancel</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        
        );
}
export default Appointments