import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Login2.css'
import logo from './Logo.png';
import bgdoc from './bg-doctor.jpg';
import Navbars from '../common/Navbars';



function Login2(props) {

    const initialValues = { email : "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
   
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name] : value});
        //console.log(formValues)
        console.log(e.target.value)
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    }
  
    useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formErrors);
      }
    }, [formErrors])
  
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      
      if (!values.password) {
        errors.password = "Password is required!";
      }
  
      return errors;
    }
  
    return (
        <div>
               <Navbars subnav="Home" display="d-none"/>
            <div className="container-fluid px-5 px-md-5 px-lg-1 px-xl-5 py-2 mx-auto vh-100 login-container">
    <div className="card card0 border-0 mt-5">
        <div className="row d-flex">
            <div className="col-lg-7">
                <div className="card1 pb-5">
                    <div className="row">
                        {/* <img src={logo} className="logo"/> */}
                        {/* <h3 className="text-uppercase text-center mt-5">
                          Welcome to BeHealthy
                        </h3> */}
                    </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                        <img src={bgdoc} className="login-image"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="card2 card border-0 px-4 py-5 mt-5 column-1">
                    <h1 className='mt-5 mb-5 web-title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className="row mb-3">
                      <div className="form">
                        <input type="email" name="email" className="form-control" placeholder="Enter your Email" value={formValues.email} onChange={handleChange}/>
                      </div>
                      <p style={{color: "red"}}>{formErrors.email}</p>
                    </div>
      
                    <div className="row">
                      <div className="form-outline w-100">
                        <input type="password" className="form-control" name="password" placeholder="Enter your Password" value={formValues.password} onChange={handleChange}/>
                      </div>
                      <p style={{color: "red"}}>{formErrors.password}</p>
                    </div>

                    <div className="mt-4 pt-2 text-center">
                      <button className="bn632-hover bn26 mt-3 mb-5">LOGIN</button>
                    </div>

                    <p className="text-center text-muted style">Don't have an account? 
                    <u style={{color: "blue"}}><Link to='/register'>Register here</Link></u></p>

                  </form>
                </div>
            </div>
        </div>

    </div>
</div>
        </div>
    );
}

export default Login2;