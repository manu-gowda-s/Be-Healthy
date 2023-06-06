import React from "react";
import { useEffect, useState } from "react";
import "../login/Login2";
import logo from "../login/Logo.png";
import bgdoc from "../login/bg-doctor.jpg";
import { Link } from "react-router-dom";
import Navbars from "../common/Navbars";
function Register(props) {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues)
    console.log(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);
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
    if (!values.confirmpassword) {
      errors.confirmpassword = "Please confirm your password";
    } else if (values.password != values.confirmpassword) {
      errors.confirmpassword = "Password should match";
    }
    return errors;
  };
  return (
    <div>
      <Navbars subnav="Home" display="d-none"/>
      <div className="container-fluid px-5 px-md-5 px-lg-1 px-xl-5 py-2 mx-auto vh-100 login-container">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-7">
              <div className="card1 pb-5">
                <div className="row">
                
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={bgdoc} className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card2 card border-0 px-4 py-5 mt-5 column-1">
                <h1 className="mt-5 mb-5 web-title">Register</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="form">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                  </div>
                  <div className="row">
                    <div className="form-outline w-100">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter your Password"
                        value={formValues.password}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                  </div>
                  <div className="row pt-2">
                    <div className="form-outline w-100">
                      <input
                        type="password"
                        className="form-control"
                        name="confirmpassword"
                        placeholder="Confirm your Password"
                        value={formValues.confirmpassword}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.confirmpassword}</p>
                  </div>

                  <div class="mb-3 form-check mt-3">
                    <input
                      type="checkbox"
                      class="form-check-input ms-5 me-2"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label ms-3" for="exampleCheck1">
                      {" "}
                      Are you a Doctor?
                    </label>
                  </div>

                  

                  <div className="mt-4 pt-2 text-center">
                    <button className="bn632-hover bn26 mt-3 mb-5">
                      Register
                    </button>
                  </div>
                  <p className="text-center text-muted style">
                    Already Registered?
                    <u style={{ color: "blue" }}><Link to='/login'>Login here</Link></u>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
