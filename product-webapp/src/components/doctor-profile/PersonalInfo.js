import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input,InputNumber } from "formik-antd";
import MultiStepFormContext from "./Multiformcontext";
import './doctor.css';

const PersonalInfo = () => {
  const { personal, setPersonal, next } = useContext(MultiStepFormContext);


  return (
    <Formik
      initialValues={personal}
      onSubmit={(values) => {
        setPersonal(values);
        next();
      }}
    
      validate={(values) => {
        const errors = {};
        if (!values.firstName) errors.firstName = "First Name is required";
        if (!(/^[a-zA-Z](\s?[a-zA-Z]){2,16}$/).test(values.firstName)) errors.firstName="Provide valid first name"   
        if (!values.lastName) errors.lastName = "Last Name is required";
        if (!(/^[a-zA-Z](\s?[a-zA-Z]){2,16}$/).test(values.lastName)) errors.lastName="Provide valid first name"
        if (!values.address) errors.address = "Address is required";
        if (!values.age) errors.age = "Age is required";
        if(!(values.age<100 && values.age>18)) errors.age="provide valid age";
        if (!values.contactNo) errors.contactNo = "Contact Number is required";
        if(!(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(values.contactNo)))  errors.contactNo = "Provide valid mininum 10 number"
        if ((/^[0-9]+$/).test(values.profession))
          errors.profession =
            "Profession does not require numbers or special characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
         
          <div className={"details__wrapper"}>
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 leftImg">
                  <img src="https://st3.depositphotos.com/3382541/12567/v/600/depositphotos_125674406-stock-illustration-businessman-sitting-at-working-plac.jpg" style={{position:'relative',bottom:'120px',right:'29px'}}></img>
                </div>
                <div className="col-xxl-6">
                   <h3>Personal Info:</h3>
                <div className="row">
               
              <div className="col-md-6">
               
                <div className={`form__item ${errors.firstName && "input__error"}`}>
                  <label>FirstName</label>
                  <Input name={"firstName"}  className="form-control"/>
                  <p className={"error__feedback"}>{errors.firstName}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`form__item ${errors.lastName && "input__error"}`}>
                  <label>LastName</label>
                  <Input name={"lastName"}  className="form-control"/>
                  <p className={"error__feedback"}>{errors.lastName}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={`form__item ${errors.address && "input__error"}`}>
                  <label>Address</label>
                  <Input name={"address"}  className="form-control"/>
                  <p className={"error__feedback"}>{errors.address}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`form__item ${errors.name && "input__error"}`}>
                <label>Age</label>
                <InputNumber name={"age"}  className="form-control"/>
                         
                  <p className={"error__feedback"}>{errors.age}</p>
                </div>
              </div>
            </div>

          
            <div
              className={`form__item ${errors.contactNo && "input__error"}`}
            >
              <label>Contact No</label>
              <Input name={"contactNo"} className="form-control"/>
              <p className={"error__feedback"}>{errors.contactNo}</p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
              </div>
            </div>
                  </div>
              </div>
            </div>
    
            
          
      
         
        );
      }}
    </Formik>
  );
};

export default PersonalInfo;
