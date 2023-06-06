import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";


function Cards(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-4 col-sm-12 mb-2">
            <div className="card-client" style={{ width: "19rem" }}>
              <div className="user-picture">
                <img
                  className="logoimg"
                  src="https://us.123rf.com/450wm/logotyp/logotyp1701/logotyp170100124/70079627-hand-child-baby-midwife-pediatrician.jpg?ver=6" alt=" "
                />
              </div>
              <h1 className="text-dark fs-3"> Pediatrician</h1>
              <p className="fs-5 issue">Child specialist and doctor for consult</p>

              <div className="social-media mt-2">
                <button className="learn-more" id="buttons">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <Link to="/patient" className="button-text">Consult Now</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-sm-6 mb-1">
            <div className="card-client" style={{ width: "19rem" }}>
              <div className="user-picture">
                <img
                  className="logoimg"
                  src="https://cdn1.vectorstock.com/i/1000x1000/15/25/medical-dental-logo-icon-design-vector-22631525.jpg" alt=" "
                />
              </div>
              <h3 className="text-dark fs-3"> Dentist</h3>
              <p className="fs-5 issue">
                Teething troubles? Schedule a dental checkup
              </p>

              <div className="social-media mt-2">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                   <Link to="/patient" className="button-text">Consult Now</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-sm-6 ">
            <div className="card-client" style={{ width: "19rem" }}>
              <div className="user-picture">
                <img
                  className="logoimg"
                  src="https://previews.123rf.com/images/lifeking/lifeking1511/lifeking151100091/48771076-vector-logo-or-icon-design-element-for-companies.jpg" alt=" "
                />
              </div>
              <h3 className="text-dark fs-3">Orthopedist</h3>
              <p className="fs-5 issue">
                For Bones and Joints issue, spinal injuries
              </p>
              <div className="social-media mt-2">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <Link to="/patient" className="button-text">Consult Now</Link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
