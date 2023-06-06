import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input,InputNumber} from "formik-antd";
import MultiformContext from "./Multiformcontext";

const ExperienceInfo = () => {
    const { experience, setExperience, next, prev } = useContext(MultiformContext);
    return (
      <Formik
        initialValues={experience}
        onSubmit={(values) => {
            setExperience(values);
          next();
        }}
        validate={(values) => {
          const errors = {};
          if (!values.graduation) errors.graduation = "Graduation is required";
          if (!values.specialization) errors.specialization = "Specialization is required";
          if(!(/^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/.test(values.mrn)))  errors.mrn = "Provide valid 12 number"
          if (!values.registrationYr) errors.registrationYr = "Year of Registration is required";
          if (!(values.registrationYr>1950 && values.registrationYr<2021)) errors.registrationYr = "Provide valid registration year";
          return errors;
        }}
      >
        {({ handleSubmit, errors }) => {
          return (
            <>
             <div className={"details__wrapper"}>
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 leftImg">
                  <img src="https://media.istockphoto.com/vectors/happy-diverse-students-celebrating-graduation-from-school-vector-id1227151024?k=20&m=1227151024&s=612x612&w=0&h=LixPEQebppS7yyIOiGWVUwrk3sHTctZ8sb65EmXTs64=" className="rounded" style={{position:'relative',bottom:'67px',right:'80px'}}></img>
                </div>
                <div className="col-xxl-6 col-sm-12 col-xs-12">
                <h3>Education Details:</h3>
                <div className="row">
             <div className="col-md-6">
               <div className={`form__item ${errors.graduation && "input__error"}`}>
                 <label>Graduation</label>
                 <Input name={"graduation"}  className="form-control"/>
                 <p className={"error__feedback"}>{errors.graduation}</p>
               </div>
             </div>
             <div className="col-md-6">
               <div className={`form__item ${errors.specialization && "input__error"}`}>
                 <label>Specialization</label>
                 <Input name={"specialization"}  className="form-control"/>
                 <p className={"error__feedback"}>{errors.specialization}</p>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-md-6">
               <div className={`form__item ${errors.mrn && "input__error"}`}>
                 <label>MRN</label>
                 <InputNumber name={"mrn"}  className="form-control"/>
                 <p className={"error__feedback"}>{errors.mrn}</p>
               </div>
             </div>
             <div className="col-md-6">
               <div className={`form__item ${errors.registrationYr && "input__error"}`}>
               <label>Year of Registartion</label>
               <Input name={"registrationYr"}  className="form-control"/>
                        
                 <p className={"error__feedback"}>{errors.registrationYr}</p>
               </div>
               <div
             className={"form__item button__items d-flex justify-content-end"}
            >
              <Button type={"default"} onClick={prev} className="mx-3">
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
             </div>
           </div>
                </div>





         
           </div>
       
           </div>
         </div>


        
            </>
          );
        }}
      </Formik>
    );
};

export default ExperienceInfo;
