import React from "react";
import "./footer.css";
import applogo from '../../common/logo.jpg';
//import logo from '../Images/logo.png';
function FooterCard(props) {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, Bangalore</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={applogo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href=" ">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href=" ">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href=" ">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Services</h3>
                  </div>
                  <ul>
                    <li>
                      <a href=" ">Home</a>
                    </li>
                    <li>
                      <a href=" ">about</a>
                    </li>
                    <li>
                      <a href=" ">services</a>
                    </li>
                    <li>
                      <a href=" ">portfolio</a>
                    </li>
                 
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Location</h3>
                  </div>
                  <div className="subscribe-form">
                    <iframe
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bangalore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                     title=" "
                        style={{width:"600px",height:"300px"}}
                     
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright @ 2022. BeHealthify. All Right Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterCard;
