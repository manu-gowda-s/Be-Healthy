import React, { useEffect, useState } from "react";
import axios from 'axios';
function AddPatientProfile(props) {

    const initialValue = {
        firstName: "",
        lastName: "",
        age: "",
        contactNo: "",
        height: "",
        weight: "",
        gender:"",
        blood:""
      
  
      };
      const [formValues, setFormValue] = useState(initialValue);
      // const [bloodValue, setGroupValue] = useState(initialValue);
      // const [genderValue, setGender] = useState(initialValue);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, isSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(setValidate({...formValues}));
        isSubmitted(true);
        postData();
      };
    
      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          props.addPateint(formValues);
          console.log(formValues);
          //localStorage.setItem("formValues", JSON.stringify(formValues));
        }
        console.log(formErrors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [formErrors]);
    
      const setValidate = (values) => {
        const errors = {};
        let charReg=/^[A-Za-z]+$/;
        var age_regex=/\s[0-1]{1}[0-9]{0,2}/;
        let numReg=/^[0-9]+$/;
        let heightReg=/^[0-9]*((0[0-9])|(1[01]))$/
        if (!values.firstName) {
          errors.firstName = "First name is required";
        }else if(!charReg.test(values.firstName)){
          errors.firstName = "Provide valid first name";
        }


        if (!values.lastName) {
          errors.lastName = "Last name is required";
        }else if(!charReg.test(values.lastName)){
          errors.lastName = "Provide valid last name";
        }

      

    



        if (!values.age) {
          errors.age = "Age is required"; 
        }else if(!(values.age>5 && values.age<120)){
          errors.age = "Provide valid age"; 
        }

        if (!values.contactNo) {
          errors.contactNo = "Contact number is required";
        }
    
       
        if (!values.weight) {
          errors.weight = "Weight is required";
        }else if(!(numReg.test(values.weight) && values.weight<=150 && values.weight>5)){
          errors.weight = "Provide valid weight";
        }
        return errors;
      };
    
   

   
      function postData(){
       try{
         if(Object.keys(formErrors).length===0 && isSubmit){
           props.addPateint(formValues);
           //props.viewPatient(true);
           console.log(formValues);
           //localStorage.setItem('formValues', JSON.stringify(formValues));
           
       
          
   
         }
       }
       catch(e){
         console.log(e.message)
       }
     }
   




    return (
        <>
           
              <div className="shadow-sm p-3 mb-5 bg-body rounded border-top-0 border-opacity-50">
                <h3 className="text-uppercase text-center">
                  Add Profile
                </h3>
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <input
                          
                            id="firstName"
                            name="firstName"
                            minLength={3}
                            maxLength={20}
                            className="form-control form-control-lg"
                            value={formValues.firstName}
                            onChange={handleChange}
                          />
                          <label className="form-label float-start mx-2">
                            First Name
                          </label>
                          <p className="text-danger mt-4 text-start">
                            {formErrors.firstName}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                           
                            id="lastName"
                            name="lastName"
                            className="form-control form-control-lg"
                            value={formValues.lastName}
                            onChange={handleChange}
                          />
                          <label className="form-label float-start mx-2">
                            Last Name
                          </label>
                          <p className="text-danger mt-4 float-start">
                            {formErrors.lastName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="age"
                            className="form-control form-control-lg"
                            name="age"
                           
                            value={formValues.age}
                            onChange={handleChange}
                          />
                          <label className="form-label float-start mx-2">
                            Age
                          </label>
                          <p className="text-danger mt-4 float-start">
                            {formErrors.age}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 pb-2">
                        <div className="form-outline">
                          <select
                            className="form-select form-select-lg"
                            aria-label="Default select example"
                            defaultValue={formValues.gender}
                            name="gender"
                            onChange={handleChange}
                            // onChange={(e) => {
                            //   const gender = e.target.value;
                            //   setGender(gender);
                            // }}
                          >
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          <p className="text-danger mt-2 float-start">
                            {formErrors.gender}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline w-100">
                          <input
                            type="number"
                            id="contactNo"
                            className="form-control form-control-lg"
                            name="contactNo"
                            value={formValues.contactNo}
                            onChange={handleChange}
                          />
                          <label className="form-label float-start mx-2">
                            Contact No
                          </label>
                          <p className="text-danger mt-4 float-start">
                            {formErrors.contactNo}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <select
                            className="form-select form-select-lg"
                            aria-label="Default select example"
                            defaultValue=""
                            name="blood"
                            onChange={handleChange} 
                            // onChange={(e) => {
                            //   const blood = e.target.value;
                            //   setGroupValue(blood);
                            // }}
                          >
                            <option value="">Select the Blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>               
                            <option value="AB+">AB+</option> 
                            <option value="AB-">AB-</option> 
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="other">Other</option>
                          </select>
                          <p className="text-danger mt-4 float-start">
                            {formErrors.bloodGrp}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="weight"
                            className="form-control form-control-lg"
                            name="weight"
                            value={formValues.weight}
                            onChange={handleChange} 
                          />
                          <label className="form-label float-start mx-2">
                            Weight (Kg)
                          </label>
                          <p className="text-danger mt-2 float-start">
                            {formErrors.weight}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="height"
                            className="form-control form-control-lg"
                            name="height"
                            value={formValues.height}
                            onChange={handleChange}
                          />
                          <label className="form-label float-start mx-2">
                            Height (Ft)
                          </label>
                          <p className="text-danger mt-2 float-start">
                            {formErrors.height}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 text-center">
                      <button className="btn btn-primary btn-lg">
                        Save Profile
                      </button>
                     
                    </div>
                  </form>
                </div>
              </div>
        
        </>
    );
}

export default AddPatientProfile;