import React from "react";
import { Link } from "react-router-dom";
import applogo from './logo.jpg'


function Navbars(props) {


  return (
    <nav className="navbar navbar-expand-lg shadow-lg" style={{background: "#0A1CCC"}}>
    <div className="container-fluid">
    <Link to="/"> <img src={applogo} alt="" /></Link>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active fs-5 mx-2 text-light" aria-current="page">{props.subnav}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 mx-2 text-light" >{props.subnav1}</a>
          </li>
          <li className="nav-item">
            <button className={`mt-1 ${props.display}`} id="logout">{props.subnav3}</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbars;